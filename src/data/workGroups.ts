export interface WorkGroup {
  label: string;
  ids: string[];
}

// Controls both grouping and order on /work. A project id not listed here
// is silently omitted from /work — it's still reachable directly at
// /work/<id> (and via /for/* curated pages in sets.ts) for one-off case
// studies that don't belong in a named group.
export const workGroups: WorkGroup[] = [
  {
    label: 'Etsy',
    ids: ['etsy-homepage', 'etsy-landings', 'etsy-cursor-for-pds', 'etsy-global-nav', 'etsy-collections', 'etsy-ios-faves'],
  },
  {
    label: 'flow14',
    ids: ['qwally', 'mental-health', 'grocery-buddy', 'medtronic-ux-ia', 'vmc-group'],
  },
  {
    label: 'Stay Alfred',
    ids: ['stay-alfred-website', 'stay-alfred-marketing'],
  },
  {
    label: 'Garmin',
    ids: ['garmin-connect', 'garmin-mobile-web'],
  },
];
