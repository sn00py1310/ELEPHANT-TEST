export declare type SimpleReplacement = {
  mode: "globalReplace" | "overwrite" | "inject";
  matcher: {
    pattern: string;
    type: "matches" | "equals";
  };
  replacement: string;
};
