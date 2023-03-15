export declare type DateRep = {
  key: string;
  __value__: any;
  TZID: string;
  [key: string]: string;
};

export declare type IcalJson = {
  VCALENDAR: VCalender[];
};
export declare type VCalender = {
  METHOD: string;
  NAME: string;
  PRODID: string;
  URL: string;
  VERSION: string;
  "X-WR-CALNAME": string;
  VEVENT: VEVENT[];
  VTIMEZONE: {
    DAYLIGHT: Timezone[];
    STANDARD: Timezone[];
    TZID: string;
    "X-LIC_LOCATION": string;
  }[];
};

export declare type VEVENT = {
  DESCRIPTION: string;
  DTEND: DateRep;
  DTSTAMP: string;
  DTSTART: DateRep;
  EXDATE: DateRep;
  LOCATION: string;
  RRULE: string;
  SEQUENCE: string;
  SUMMARY: string;
  UID: string;
  URL: string;
};
export declare type Timezone = {
  DTSTART: string;
  RRULE: string;
  TZNAME: string;
  TZOFFSETFROM: string;
  TZOFFSETTO: string;
};
