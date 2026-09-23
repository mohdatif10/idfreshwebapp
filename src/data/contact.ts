export interface ContactAction {
  label: string;
  href: string;
}

// Real content + hyperlinks supplied by the user (2026-09-23) for the Contact
// Us page. The docx's "Love us / Hate us?" link pointed at a javascript:void(0)
// widget on the live site (no static URL to reuse) — routed to our own
// Complaint & Feedback page instead, since that's the internal equivalent.
export const CONTACT_ACTIONS: ContactAction[] = [
  { label: "Love us / Hate us?", href: "/complaint-feedback" },
  {
    label: "Seeking Distribution Opportunities in India",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSddVVr-6OljVqxgOJHTPbb7KmYzSVHh83JS2TzAG9LOSIjzKA/viewform",
  },
  {
    label: "Seeking Overseas Distribution Opportunities",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSexTqsvsUJwqA4mpNJsX0tNCX0xq3iqB1OsqDFhxK-n2JSvhw/viewform",
  },
];

export const HEAD_OFFICE = {
  name: "iD Fresh Food (India) Pvt. Ltd.",
  address:
    "Sy. Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala village, Kasaba Hobli, Attibele, Anekal Taluk, Bangalore -562107, Karnataka",
  mapsUrl:
    "https://www.google.com/maps/search/91Springboard++5th+floor,+Trifecta+Adatto,+21,+ITPL+Main+Rd,+Garudachar+Palya,+Mahadevapura,+Bengaluru,+Karnataka+560048/@12.993868,77.699633,14z?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D",
  phone: "+91 9739910521",
  email: "customercare@idfreshfood.com",
};

export interface ContactLocation {
  name: string;
  address: string;
}

// A shorter location list than the full /foodmap kitchen roster — this is
// what the Contact Us page itself shows, including two international
// locations that /foodmap (India-only, FSSAI-licensed kitchens) doesn't cover.
export const CONTACT_LOCATIONS: ContactLocation[] = [
  {
    name: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Sy. Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala village, Kasaba Hobli, Attibele, Anekal Taluk, Bangalore -562107, Karnataka. FSSAI Lic No. 10021043000120",
  },
  {
    name: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Plot No 42, Survey No 150, Cooperative Industrial Estate, (CIE, Gandhinagar IALA) Of Gandhinagar, Qutubullapur (except GHMC Area), Medchal-Malkajgiri, Telangana, 500037. FSSAI Lic. No. 13616013000374",
  },
  {
    name: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "No. B/6 Shree Rajlaxmi Textiles & Industrial Park, Pogaon, Bhiwandi Municipal Corporation (Thane Zone-5), Bhiwandi - 421302. FSSAI No. 11518018000620",
  },
  {
    name: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Plot no: 481, Sector 38, Phase-1, Food Park, Rai Industrial Area, HSIIDC, Sonipat, Sonipat, Haryana-131029. FSSAI Lic. No. 10825999000708",
  },
  {
    name: "iD Fresh Food FZE",
    address: "E2-107F-40, Hamriya Free Zone - Sharjah, UAE. Tel: 067481524, Mob: 0501572031, Fax: 067481534.",
  },
  {
    name: "iD Fresh Trading Company",
    address:
      "No: 2050145968, Al Kamil Al Muhammadiyah, 7085, Unit No. 10, Dammam, 3242-4815, Kingdom of Saudi Arabia. Contact No.: +966557358851. Email: customercare@idfreshfood.com",
  },
];
