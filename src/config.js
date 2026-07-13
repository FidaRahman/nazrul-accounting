// src/config.js
// Single source of truth for business details. Change a value here and it
// updates everywhere on the site.

// Client's real Setmore booking page.
export const SETMORE_URL = "https://nazrulaccounting.setmore.com/";

// Google Apps Script web app: saves inquiries to the Google Sheet + emails the owner.
export const CONTACT_FORM_URL =
  "https://script.google.com/macros/s/AKfycbzoBJVBAz6qwOSHTlyvLlAzMnbIDBY07yxnhtBjIl22T32Kn7y_kHXJHkt53XO5oUpE/exec";

export const BUSINESS = {
  legalName: "Nazrul Accounting and Tax Professional Corporation",
  name: "Nazrul Accounting & Tax",
  tagline: "Provides Peace of Mind",
  founder: "Nazrul Islam, CPA, CGA",
  established: "2015",
  addressLine1: "2390 Eglinton Ave E, Unit 227",
  addressLine2: "Scarborough, ON M1K 2P5",
  phone: "647-238-4534",
  phoneHref: "tel:+16472384534",
  email: "info@nazrulaccounting.ca",
  hours: "Monday to Sunday, 9:00 AM – 7:00 PM",
};

// Google reviews.
// Get all four values from the client's Google Business Profile:
//   rating / count   → the REAL numbers shown on his profile. Do not invent these.
//   profileUrl       → his Google Maps listing (Maps → search the business → copy URL)
//   writeReviewUrl   → Business Profile → "Ask for reviews" → copy link
//                      (a short link, usually https://g.page/r/XXXXXXXX/review)
export const GOOGLE_REVIEWS = {
  rating: 4.9,
  count: 170,
  // Works as-is (deep-links to the Maps listing). Swap for the exact listing URL
  // from the Business Profile if you want it cleaner.
  profileUrl:
    "https://www.google.com/maps/search/?api=1&query=Nazrul%20Accounting%20and%20Tax%20Professional%20Corporation%2C%202390%20Eglinton%20Ave%20E%20%23227%2C%20Scarborough%2C%20ON%20M1K%202P5",
  // TODO: replace with the real short link from Google Business Profile
  // ("Ask for reviews" -> copy link, looks like https://g.page/r/XXXXXXXX/review).
  // It opens the review dialog directly instead of making people hunt for it.
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Nazrul%20Accounting%20and%20Tax%20Professional%20Corporation%2C%202390%20Eglinton%20Ave%20E%20%23227%2C%20Scarborough%2C%20ON%20M1K%202P5",
};

// Google Maps embed — works without an API key.
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=2390%20Eglinton%20Ave%20E%2C%20Scarborough%2C%20ON%20M1K%202P5&output=embed";

// CRA benefit application forms.
// Download these two PDFs from the old site and save them into /public/forms/
// so the new site never depends on the old one staying online:
//   https://nazrulaccounting.ca/wp-content/uploads/2023/05/rc151-fill-22e.pdf  -> public/forms/rc151.pdf
//   https://nazrulaccounting.ca/wp-content/uploads/2023/05/rc66-fill-22e.pdf   -> public/forms/rc66.pdf
export const FORMS = {
  // Official CRA pages — always serve the CURRENT year's version. Nothing to host,
  // nothing to go stale, no dependency on the old WordPress site.
  rc151Page: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc151.html",
  rc151Online: "https://apps.cra-arc.gc.ca/ebci/uisp/rc151/en.html",
  rc66Page: "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc66.html",
  rc66Online:
    "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/how-apply.html",
};

export const CRA_PHONE = "1-800-959-8281";
export const CRA_PHONE_HREF = "tel:+18009598281";