export interface KitchenLocation {
  /** The map-pin label used on the live idfreshfood.com/foodmap page (not sequential — some letters are skipped). */
  label: string;
  region: string;
  company: string;
  address: string;
  fssai: string;
}

// Real manufacturing/kitchen locations, transcribed verbatim (company name,
// address, FSSAI license number) from the live idfreshfood.com/foodmap page
// (2026-09-21) — this is regulatory/legal information, so it's copied exactly
// rather than paraphrased. This page is intentionally unlinked from site nav;
// see src/app/foodmap/page.tsx.
export const KITCHEN_LOCATIONS: KitchenLocation[] = [
  {
    label: "A",
    region: "Bengaluru",
    company: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Sy. Nos. 515/2, 515/3, 515/4, 516/2, 516/3, 516/4, 533, Madivala Village, Kasaba Hobli, Attibele, Anekal Taluk, Bengaluru (Karnataka) - 562107.",
    fssai: "10021043000120",
  },
  {
    label: "B",
    region: "Hyderabad",
    company: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Plot No 42, Survey No 150, Cooperative Industrial Estate, (CIE, Gandhinagar IALA) of Gandhinagar, Qutubullapur (Except GHMC Area), Medchal-Malkajgiri, Telangana, 500037.",
    fssai: "13616013000374",
  },
  {
    label: "C",
    region: "Maharashtra",
    company: "iD Fresh Food (India) Pvt. Ltd.",
    address:
      "Building No. B/6, Shree Rajlaxmi Textiles & Industrial Park, Pogaon, Bhiwandi Tahashil, Bhiwandi, Municipal Corporation (Thane Zone-5) (Maharastra) - 421302.",
    fssai: "11518018000620",
  },
  {
    label: "D",
    region: "Haryana",
    company: "iD Fresh Food (India) Private Limited",
    address: "Plot no: 481, Sector 38, Phase-1, Food Park, Rai Industrial Area, HSIIDC, Sonipat, Sonipat, Haryana-131029.",
    fssai: "10825999000708",
  },
  {
    label: "E",
    region: "West Bengal",
    company: "Arman Foodtech Private Limited",
    address: "No. 224, (224) West Chowbaga (Tiljala) - Kolkata, India, Kolkata Municipal Corporation, Kolkata, West Bengal - 700105.",
    fssai: "12824999000997",
  },
  {
    label: "F",
    region: "Vizag",
    company: "Swarnambika Foods",
    address:
      "P. No. A11, 3rd Floor (East Part), Block-B, Industrial Estate, Marripalem Visakhapatnam (Urban), Visakhapatnam, Andhra Pradesh - 530007.",
    fssai: "101124999000419",
  },
  {
    label: "G",
    region: "Ahmedabad",
    company: "Arman Foodtech Private Limited",
    address:
      "Shops No. 7, 8 and 108, Sy. No. 352, F.P. No 142, NH-08, Near Nirgun Warehouse, Aslali, DasKroi, Ahmedabad, Gujarat – 382427.",
    fssai: "10726994000251",
  },
  {
    label: "N",
    region: "Uttar Pradesh",
    company: "Madd Foods",
    address: "C 76, Hosiery Complex, Phase 2, Noida, Dadri Tehsil-1, Gautam Buddha Nagar, Uttar Pradesh - 201305.",
    fssai: "10013051000642",
  },
  {
    label: "I",
    region: "Karnataka",
    company: "Arman Foodtech Private Limited",
    address: "No 11, 12, Off Hosur Road, Singasandra, Bommanahalli, B.B.M.P. South, Bengaluru, Karnataka - 560068.",
    fssai: "11221334002413",
  },
  {
    label: "J",
    region: "Telangana",
    company: "Swarnambika Foods",
    address:
      "1st Floor, Plot No. D-73 & D-74/Phase-1, IDA Jeedimetla, Hyderabad, Quthbullapur Circle No. 25, Hyderabad, Telangana - 500055.",
    fssai: "13619014000715",
  },
  {
    label: "K",
    region: "Karnataka",
    company: "Matzah Foods Private Limited",
    address: "Sy No. 20/1, 1st Floor, Virgo Nagar Post, Rampura, Bengaluru, Bangalore North, Bangalore Urban, Karnataka - 560049.",
    fssai: "11222999000586",
  },
  {
    label: "L",
    region: "Karnataka",
    company: "Bhaskar's Mane Holige and Khuruk Thindi",
    address: "No 74/5, DVG Road, Near Upahara Darshini, Netkalappa Circle, Basavanagudi, Bangalore Urban, Karnataka - 560004.",
    fssai: "11224999000554",
  },
  {
    label: "V",
    region: "Chennai",
    company: "Sridhi Ventures",
    address: "No: 17/48, Agragaram Annai Nagar, Korattur, Chennai, Thiruvallur, Tamil Nadu - 600076.",
    fssai: "12424999000342",
  },
  {
    label: "P",
    region: "Mumbai",
    company: "Pooja Beverages and Food Pvt Ltd",
    address:
      "Plot No 142, Gr Floor, 1st Floor, Second Floor Marol Co-operative Society Marol, Andheri East Mumbai 400059, Greater Mumbai Ward-K/E, Greater Mumbai, Maharashtra - 400059.",
    fssai: "115517005000240",
  },
  {
    label: "O",
    region: "Madhya Pradesh",
    company: "Arman Foodtech Private Limited",
    address: "Plot No. 15 and 16 Namo Industrial Park, Sector-E Sanwer Road, Indore, Madhya Pradesh - 453555.",
    fssai: "11425999000340",
  },
];
