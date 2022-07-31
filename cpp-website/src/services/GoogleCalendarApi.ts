type calendarEvent = {
  kind: string;
  iCalUID: string;
  id: string;
  status: string;
  created: string;
  updated: string;
  summary: string;
  creator: { email?: string};
  organizer: {
    email?: string;
    displayName: string;
  }
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

  /** returns all events sorted by start time
   * 
   * @param index if positve, index to end at from start, if negative, will be index to start at from end
   * 
   * @return array of calendarEvents
   */
   async getEventsSorted(index?: number): Promise<calendarEvent[]> {
    const d = await this.getEvents();
    let events = d.items;
    events.sort((a, b): number => {
      let d1 = new Date("date" in a.start ? a.start.date : a.start.dateTime);
      let d2 = new Date("date" in b.start ? b.start.date : b.start.dateTime);
      return d1.getTime() - d2.getTime();
    })
    return index === undefined ? events : (index < 0) ? events.slice(index) : events.slice(0, index);
  }

  /** returns the next upcoming events as an array, sorted by earliest first
   * 
   * @param howMany max number of events to return, by default wil return all upcoming events
   * 
   * @return array of calendarEvents
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

  /** returns the previous events as an array, sorted by latest first
   * 
   * @param howMany max number of events to return, by default wil return all previous events
   * 
   * @return array of calendarEvents
   */
   async getPreviousEvents(howMany: number = -1): Promise<calendarEvent[]> {
    const d = await this.getEvents();
    let events = d.items;
    let now = new Date();
    events = events.filter(e => {
      let date = new Date("date" in e.start ? e.start.date : e.start.dateTime);
      return date <= now;
    });
    events.sort((a, b): number => {
      let d1 = new Date("date" in a.start ? a.start.date : a.start.dateTime);
      let d2 = new Date("date" in b.start ? b.start.date : b.start.dateTime);
      return d2.getTime() - d1.getTime();
    })
    return howMany < 0 ? events : events.slice(0, howMany);
  }

}

export type { calendarEvent }
export { Calendar }
