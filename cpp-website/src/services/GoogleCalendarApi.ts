type calendarEvent = {
  kind: string;
  iCalUID: string;
  id: string;
  status: string;
  created: string;
  updated: string;
  summary: string;
  description?: string;
  location?: string;
  start: { date: string; } | { dateTime: string; timeZone: string};
  end: { date: string; } | { dateTime: string; timeZone: string};
  sequence: number;
  eventType: string;
}

class Calendar {
  url: string;

  constructor(config: {clientId: string, apiKey: string}) {
    this.url = `https://www.googleapis.com/calendar/v3/calendars/${config.clientId}/events?key=${config.apiKey}`;
  }

  /** performs the API requerst and immdietaly returns data
   * 
   * @returns object returned from api call
   */
  async getEvents(): Promise<{ items: calendarEvent[]; }> {
    const r = await fetch(this.url);
    return r.json();
  }

  /** returns the next upcoming events as an array
  * @param howMany max number of events to return, by default wil return all events
  * 
  * @return arraly of calendarEvents
  */
  async getUpcomingEvents(howMany: number = -1): Promise<calendarEvent[]> {
    const d = await this.getEvents();
    let events = d.items;
    let now = new Date();
    events = events.filter(e => {
      let date = new Date("date" in e.start ? e.start.date : e.start.dateTime);
      return date >= now;
    });
    events.sort((a, b): number => {
      let d1 = new Date("date" in a.start ? a.start.date : a.start.dateTime);
      let d2 = new Date("date" in b.start ? b.start.date : b.start.dateTime);
      return d1.getTime() - d2.getTime();
    })
    return howMany < 0 ? events : events.slice(0, howMany);
  }

}

export type { calendarEvent }
export { Calendar }
