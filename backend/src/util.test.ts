import { Settings, SimpleReplacement } from "./entity/Calendar";
import * as util from "./util";

describe("URL Test", () => {
  test("Invalid URL", () => {
    expect(util.checkUrl("abc")).toBeFalsy;
  });

  test("Schema", () => {
    expect(util.checkUrl("abc://example.com")).toBeFalsy;
    expect(util.checkUrl("http://example.com")).toBeFalsy;
    expect(util.checkUrl("https://example.com")).toBeFalsy;
  });

  test("Right First Level Domain", () => {
    expect(util.checkUrl("abc://kit.edu")).toBeFalsy;
    expect(util.checkUrl("http://kit.edu")).toBeFalsy;
    expect(util.checkUrl("https://kit.edu")).toBeFalsy;
  });

  test("Subdomain", () => {
    expect(util.checkUrl("abc://campus.kit.edu")).toBeFalsy;
    expect(util.checkUrl("http://campus.kit.edu")).toBeFalsy;
    expect(util.checkUrl("https://campus.kit.edu")).toBeFalsy;
  });

  test("Wrong path", () => {
    expect(util.checkUrl("abc://campus.kit.edu/test")).toBeFalsy;
    expect(util.checkUrl("http://campus.kit.edu/test")).toBeFalsy;
    expect(util.checkUrl("https://campus.kit.edu/test")).toBeFalsy;
  });

  test("Path traversal", () => {
    expect(util.checkUrl("abc://campus.kit.edu/sp/webcal/abc/../..")).toBeFalsy;
    expect(util.checkUrl("http://campus.kit.edu/sp/webcal/abc/../.."))
      .toBeFalsy;
    expect(util.checkUrl("https://campus.kit.edu/sp/webcal/abc/../.."))
      .toBeFalsy;
  });

  test("Allowed", () => {
    expect(util.checkUrl("http://campus.kit.edu/sp/webcal/abc")).toBeTruthy;
    expect(util.checkUrl("https://campus.kit.edu/sp/webcal/abc")).toBeTruthy;
  });
});



let settings: Settings;
let badRegex: SimpleReplacement;

describe("RemoveBadRegex", () => {  
  beforeEach(() => {
    settings = new Settings();
    badRegex = new SimpleReplacement();
  
    badRegex.mode = "globalRegex";
    badRegex.pattern = "(?:)";
    badRegex.replacement = "";
  });
  

  test("Positive single test", () => {
    settings.replacements = [badRegex];
    expect(util.removeBadRegEx(settings)).toEqual(new Settings());
  });


  test("Negative Test", () => {
    let repl = new SimpleReplacement()
    repl.mode = "globalRegex";
    repl.replacement = "abc";
    repl.pattern = ".*"
    
    settings.replacements = [repl]

    let s = {...settings};
    expect(util.removeBadRegEx(settings)).toEqual(s);
  })

  test("Remove behind", () => {
    let repl = new SimpleReplacement()
    repl.mode = "globalRegex";
    repl.replacement = "abc";
    repl.pattern = ".*"
    
    settings.replacements = [repl]
    let s = {...settings};

    settings.replacements.push(badRegex);
    expect(util.removeBadRegEx(settings)).toEqual(s);
  })

  test("Remove before", () => {
    let repl = new SimpleReplacement()
    repl.mode = "globalRegex";
    repl.replacement = "abc";
    repl.pattern = ".*"
    
    settings.replacements = [repl]
    let s = {...settings};

    settings.replacements = [badRegex, ...settings.replacements]
    expect(util.removeBadRegEx(settings)).toEqual(s);
  })

  test("Remove before and after", () => {
    let repl = new SimpleReplacement()
    repl.mode = "globalRegex";
    repl.replacement = "abc";
    repl.pattern = ".*"
    
    settings.replacements = [repl]
    let s = {...settings};

    settings.replacements = [badRegex, ...settings.replacements, {...badRegex}]
    expect(util.removeBadRegEx(settings)).toEqual(s);
  })
});
