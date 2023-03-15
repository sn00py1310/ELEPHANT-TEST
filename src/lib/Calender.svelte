<script lang="ts">
  import { CALENDER } from "./constCal";
  import { Calendar } from "calendar";
  import { lines2tree } from "icalts";
  import type { IcalJson } from "./Ical";
  import { parse } from "date-fns";
  import { datetime, RRule, RRuleSet, rrulestr } from "rrule";
  import * as ical from "ical";
  import { validate_each_argument, xlink_attr } from "svelte/internal";

  interface Entry {
    summary: string;
    start: Date;
    end: Date;
    location: string;
    uid: string;
    description: string;
    url: string;
    date: Date;
  }

  const today = new Date();
  const cal = new Calendar(1);
  let month = cal.monthDates(2022, 10, (d) => d.getDate());
  let c: { date: Number; entries: Entry[] }[][] = [];
  const ds: Record<string, any> = ical.parseICS(CALENDER) as Record<
    string,
    any
  >;
  const a = Object.values(ds);
  let data: Entry[] = [];

  a.forEach((element) => {
    let k: Date = element.start as Date;
    if (!k) return;
    k.setHours(0, 0, 0, 0);
    data.push({
      description: element.description,
      summary: element.summary,
      location: element.location,
      end: element.end,
      start: element.start,
      uid: element.uid,
      url: element.uid,
      date: k,
    });
    if (element.exdate) {
      const exdate: Date[] = Object.values(element.exdate);
      if (element.rrule) {
        const rule = new RRule(element.rrule.origOptions);
        const all = rule.all();
        const removedExDates = all.filter(
          (x) => !exdate.some((d) => d.getTime() === x.getTime())
        );
        removedExDates.forEach((e) => {
          e.setHours(0, 0, 0, 0);
          data.push({
            description: element.description,
            summary: element.summary,
            location: element.location,
            end: element.end,
            start: element.start,
            uid: element.uid,
            url: element.uid,
            date: e,
          });
        });
      }
    }
  });
  console.log(data);

  cal.monthDates(2022, 10).forEach((week, i) => {
    const nWeek: { date: number; entries: Entry[] }[] = [];
    week.forEach((day, y) => {
      const entries = data.filter((x) => x.date.getTime() === day.getTime());
      nWeek.push({ date: day.getDate(), entries });
    });
    c.push(nWeek);
  });

  console.log(c);
</script>

<table>
  <tr>
    <th>mo</th>
    <th>th</th>
    <th>we</th>
    <th>th</th>
    <th>fr</th>
    <th>sa</th>
    <th>su</th>
  </tr>
  <!-- {#each c as week} -->
  <tr>
    {#each c[0] as day}
      <td>
        <div class="day">
          <span>
            {day.date}
          </span>
          <div>
            {#each day.entries as entry}
              <div class="entry">
                <span>
                  {entry.summary}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </td>
    {/each}
  </tr>
  <!-- {/each} -->
</table>

<style>
  table {
    width: 30em;
    border-collapse: collapse;
    table-layout: fixed;
  }
  td,
  th {
    border: 1px solid var(--ctp-macchiato-text);
    vertical-align: top;
  }
  th {
    padding: 0.5em 1em;
    text-align: center;
  }
  .day {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 3px;
    height: 100%;
    width: 100%;
  }
  .day > span {
    font-size: 11px;
    line-height: 11px;
    padding-bottom: 5px;
  }
  .day > div {
    min-height: 2em;
    display: flex;
    gap: 5px;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .entry {
    background-color: var(--ctp-macchiato-surface0);
    border-radius: 5px;
    max-height: 35px;
    overflow: hidden;
    cursor: pointer;
  }
  .entry span {
    display: flex;
    font-size: 11px;
    line-height: 15px;
    padding: 4px;
  }
  .entry:hover {
    max-height: max-content;
  }
</style>
