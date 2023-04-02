import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";




export class Settings {
    replacements: SimpleReplacement[] = []
}


export class SimpleReplacement {
  mode: string = "globalRegex"
  pattern: string;
  replacement: string;
}

@Entity()
export class CreateCalendar {
  @Column({type: "simple-json", nullable: false})
  settings: Settings = new Settings();
  @Column({type: "simple-json", nullable: false})
  url: URL;
}

@Entity()
export class Calendar extends CreateCalendar {
  @PrimaryColumn({nullable: false, unique: true})
  id: string = randomUUID();
  @Column({nullable: false})
  last_access: Date = new Date();
}

