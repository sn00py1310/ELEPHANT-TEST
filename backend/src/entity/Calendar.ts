import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { ValidateNested, IsUrl, Allow, Equals } from "class-validator";
import { Type } from "class-transformer";




export class Settings {
    @Type(() => SimpleReplacement)
    @ValidateNested({ each: true })
    @Allow()
    replacements: SimpleReplacement[] = []
}


export class SimpleReplacement {
  @Allow()
  mode: "globalRegex";
  @Allow()
  pattern: string;
  @Allow()
  replacement: string;
}

@Entity()
export class CreateCalendar {
  @Column({type: "simple-json", nullable: false})
  @ValidateNested({ each: true })
  @Type(() => Settings)
  @Allow()
  settings: Settings = new Settings();

  @Column({nullable: false})
  @IsUrl()
  url: string;
}

@Entity()
export class Calendar extends CreateCalendar {
  @PrimaryColumn({nullable: false, unique: true})
  id: string = randomUUID();
  @Column({nullable: false})
  last_access: Date = new Date();
}

