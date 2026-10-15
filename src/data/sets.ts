export interface Set {
  heading?: string;
  intro: string;
  projects: { id: string; why?: string }[];
}

// Inline glyphs for heading/intro strings, which SetView renders with set:html.
// Sized and animated via .glyph rules in global.css.
const hello = `<svg class="glyph glyph--hi" viewBox="0 0 33 27" fill="currentColor" aria-hidden="true">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1738 0C25.5254 0 32.334 5.66016 32.334 13.4941C32.334 19.1406 29.2852 20.6719 29.2852 23.1055C29.2852 24.1582 29.6133 24.8555 30.4473 25.6211C31.1172 26.2363 30.748 27.002 29.75 27.002C27.8359 27.002 25.8809 26.3867 24.4316 25.3477C22.0391 26.4277 19.25 27.002 16.1738 27.002C6.79492 27.002 0 21.3145 0 13.4941C0 5.66016 6.82227 0 16.1738 0ZM8.20117 6.1582C7.45898 6.1582 7 6.63672 7 7.4082V19.3613C7 20.1816 7.50781 20.6406 8.2207 20.6406C8.93359 20.6406 9.43164 20.1816 9.43164 19.3613V14.498C9.43164 12.9746 10.3203 11.959 11.7852 11.959C13.1914 11.959 13.9141 12.8281 13.9141 14.2734V19.3613C13.9141 20.1816 14.4121 20.6406 15.125 20.6406C15.8379 20.6406 16.3457 20.1816 16.3457 19.3613V13.7754C16.3457 11.4023 15.0078 9.89844 12.7227 9.89844C11.1504 9.89844 10.0078 10.6113 9.45117 11.8711H9.40234V7.4082C9.40234 6.63672 8.95312 6.1582 8.20117 6.1582ZM19.3682 9.88867C18.6261 9.88876 18.1572 10.3868 18.1572 11.168V19.3613C18.1572 20.1523 18.6261 20.6405 19.3682 20.6406C20.1104 20.6406 20.5889 20.1523 20.5889 19.3613V11.1777C20.5889 10.3867 20.1104 9.88867 19.3682 9.88867ZM24.4121 17.877C23.6213 17.8772 22.9961 18.4825 22.9961 19.2539C22.9961 20.0253 23.6213 20.6404 24.4121 20.6406C25.2129 20.6406 25.8379 20.0254 25.8379 19.2539C25.8379 18.4824 25.2129 17.877 24.4121 17.877ZM24.4219 6.1582C23.6897 6.15837 23.1914 6.62709 23.1914 7.38867C23.1914 7.4375 23.2012 7.50586 23.2012 7.57422L23.3281 14.791C23.3477 15.5038 23.719 15.9334 24.4121 15.9336C25.1055 15.9336 25.4863 15.5039 25.5059 14.791L25.6328 7.57422C25.6328 7.50586 25.6426 7.4375 25.6426 7.38867C25.6426 6.62695 25.1543 6.1582 24.4219 6.1582ZM19.3682 6.00195C18.6163 6.00205 18.0205 6.57819 18.0205 7.32031C18.0205 8.05267 18.6163 8.63857 19.3682 8.63867C20.1299 8.63867 20.7256 8.05273 20.7256 7.32031C20.7256 6.57812 20.1299 6.00195 19.3682 6.00195Z"/>
</svg>`;

const backspace = `<svg class="glyph glyph--backspace" viewBox="0 0 30 26" fill="currentColor" aria-hidden="true">
<path d="M25.3477 25.5254L13.5215 25.5117C11.7031 25.5117 10.3633 24.9922 9.13281 23.6523L1.38086 15.4766C0.382812 14.4102 0 13.6035 0 12.7422C0 11.8809 0.382812 11.0879 1.38086 10.0078L9.11914 1.79102C10.3496 0.451172 11.6895 0 13.5215 0H25.3477C28.3008 0 29.832 1.51758 29.832 4.44336V21.1914C29.832 24.1172 28.3008 25.5254 25.3477 25.5254ZM12.9473 18.5527C13.3164 18.5527 13.6445 18.416 13.8906 18.1699L17.4453 14.6016L21 18.1699C21.2461 18.416 21.5742 18.5527 21.9434 18.5527C22.668 18.5527 23.2285 17.9648 23.2285 17.2402C23.2285 16.8984 23.1055 16.584 22.8457 16.3379L19.2773 12.7695L22.8594 9.1875C23.1328 8.91406 23.2422 8.62695 23.2422 8.27148C23.2422 7.56055 22.6816 7 21.957 7C21.6016 7 21.3145 7.12305 21.0547 7.38281L17.4453 10.9648L13.8633 7.39648C13.6172 7.15039 13.3164 7.02734 12.9473 7.02734C12.2363 7.02734 11.6621 7.57422 11.6621 8.29883C11.6621 8.64062 11.7988 8.95508 12.0449 9.20117L15.627 12.7695L12.0449 16.3516C11.7988 16.584 11.6621 16.9121 11.6621 17.2402C11.6621 17.9648 12.2363 18.5527 12.9473 18.5527Z"/></svg>`;

export const sets: Record<string, Set> = {
  default: {
    heading: `${hello} I’m Kyle Johnston,`,
    intro: `and my favorite design tool is the delete key<span class="intro-period">.</span> ${backspace}`,
    projects: [
      { id: 'etsy-homepage' },
      { id: 'etsy-cursor-for-pds' },
      { id: 'etsy-collections' },
      { id: 'etsy-global-nav' },
      { id: 'mental-health' },
      { id: 'qwally' },
    ],
  },
  'babylist': {
    heading: "Hello Babylist!",
    intro: "I’m Kyle Johnston, a staff product designer with a creative director’s background. I design and test consumer and marketplace experiences where craft and results carry equal weight.",
    projects: [
      { id: 'etsy-homepage', why:'demonstrates impact at scale + an AI-enabled workflow' },
      { id: 'etsy-landings', why:'demonstrates systems thinking + product strategy' },
      { id: 'etsy-ios-faves', why:'cross-platform design + product strategy' },
      { id: 'etsy-collections', why:'this feature is similar to registries' },
    ],
  },
  'seatgeek': {
    heading: "Hi SeatGeek — I design the moment intent becomes a purchase.",
    intro: "I'm Kyle Johnston. At Etsy I owned that exact stretch—homepage, discovery, and collections—turning browsing into buying, driving $80M+ in combined sales along the way.",
    projects: [
      { id: 'etsy-homepage', why: 'personalized the funnel entry point, validated with research and live A/B testing' },
      { id: 'etsy-landings', why: 'a literal shopping funnel—discovery-to-listing conversion, built as a flexible system' },
      { id: 'etsy-collections', why: 'highest experiment velocity at Etsy—UX, ranking, and placement tuned through rapid testing' },
      { id: 'qwally', why: 'no existing product to react to—direct partnership with city stakeholders through launch' },
    ],
  },
  'vanta': {
    heading: "Hi Vanta — I’m Kyle Johnston. I bring clarity to complex, interconnected systems and lead the design teams behind them.",
    intro: "Five years as a Staff Product Designer at Etsy sharpened my systems thinking and AI-native workflows. Before that, 12+ years managing in-house and agency teams shaped how I lead.",
    projects: [
      { id: 'etsy-global-nav', why: 'vision and design strategy for a whole product area — the IA connecting Etsy’s entire experience, backed by exec buy-in.' },
      { id: 'etsy-homepage', why: 'one pattern scaled across a data-rich, highly configurable system — 65,000 personalized, ranked items.' },
      { id: 'etsy-cursor-for-pds', why: "working AI-natively — onboarding that scaled AI prototyping across a design team, no trainer required." },
      { id: 'qwally', why: 'zero-to-one for a workflow-heavy SaaS platform in a regulated space (local government) — direct partnership through launch⁠.' },
    ],
  },
  'eli-lilly': {
    heading: "I’m Kyle Johnston,",
    intro: "a staff product designer with a creative director’s background. I design and test consumer and marketplace experiences where craft and results carry equal weight.",
    projects: [
      { id: 'medtronic-ux-ia' },
      { id: 'etsy-global-nav' },
      { id: 'etsy-homepage' },
      { id: 'qwally' },
    ],
  },
};
