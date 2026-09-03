export interface StoryMilestone {
  year: number;
  title: string;
  description: string;
  image?: string;
}

// The Our Story timeline slider (OurStory.tsx) shows the most recent milestone
// at or before whatever year the slider is dragged to. Full real copy + photos
// supplied by the user (2026-09-03) — every year 2005-2025 that has real iD
// history now has its own entry; descriptions are the real supplied text
// verbatim, titles are short extractive labels pulled from that same text.
export const STORY_MILESTONES: StoryMilestone[] = [
  {
    year: 2005,
    title: "Five cousins, one small kitchen",
    description:
      "In 2005, PC Musthafa and his four cousins Abdul Nazer, Shamsudeen TK, Jafar TK and Noushad TA set up iD in a small kitchen in Bangalore. Initial trials were done, with batches of batter being made in this 50 sq ft kitchen, from Tippasandra.",
    image: "/brand/misc/timeline/2005.jpg",
  },
  {
    year: 2006,
    title: "Our first-ever sale",
    description:
      "Our team was excited by the first ever sale that happened in 2006. And from then on, there's been no stopping us! Our brand promise of fresh and good food has gotten us enough love to help us grow exponentially.",
    image: "/brand/misc/timeline/2006.jpg",
  },
  {
    year: 2007,
    title: "The Hoskote plant opens",
    description:
      "The pride of our Idli Dosa batter production, the Hoskote plant, was set up in Bangalore. With ultra-clean premises, protective gear and sanitizing facilities at every doorway, we're obsessed with bringing you the freshest food.",
    image: "/brand/misc/timeline/2007.jpg",
  },
  {
    year: 2008,
    title: "PC Musthafa becomes CEO",
    description:
      "Our founder, PC Musthafa, officially moved over to the CEO position. From then on, his efforts have all gone into ensuring that iD maintains the quality of the products being sent out to millions of households every day.",
    image: "/brand/misc/timeline/2008.jpg",
  },
  {
    year: 2010,
    title: "Malabar Parotas launch",
    description:
      "We began production of our Malabar Parotas, a favourite across the country. These parotas are hand rolled, machine pressed and lightly cooked to keep fresh till they reach you. Every parota packet goes through quality checks at every step, making the parota a success year after year.",
    image: "/brand/misc/timeline/2010.jpg",
  },
  {
    year: 2012,
    title: "Expanding to Mumbai & Hyderabad",
    description:
      "Handcrafted for perfection and freshness, the Mumbai and Hyderabad operations were set up. The iD products that hit the shelves became instant favourites.",
    image: "/brand/misc/timeline/2012.jpg",
  },
  {
    year: 2013,
    title: "First steps into Dubai",
    description:
      "We took Kerala to Dubai, by launching our Malabar Parotas there. Our first operations set up in Dubai, the products were well received and well loved. A truly heartwarming welcome.",
    image: "/brand/misc/timeline/2013.jpg",
  },
  {
    year: 2014,
    title: "₹35 crore in first funding",
    description:
      "We raised 35 crores from the first round of funding that we received from Helion Venture Partners. This was possible because of all the love we received from the people who truly enjoy fresh, authentic and Indian home-made food.",
    image: "/brand/misc/timeline/2014.jpg",
  },
  {
    year: 2015,
    title: "Our first media campaigns",
    description:
      "We took the first steps to tell everyone about our entrepreneurial journey and the small business that had gotten a lot bigger. Our mainstream media campaigns kicked off with print, OOH and radio advertisements. Now we've even gone digital!",
    image: "/brand/misc/timeline/2015.jpg",
  },
  {
    year: 2016,
    title: "Cochin, Coimbatore & new products",
    description:
      "The year we introduced ourselves to Cochin and Coimbatore was also the year we brought you Udupi-style Idli Batter, curd and paneer. All our products carry the same promise of freshness and goodness.",
    image: "/brand/misc/timeline/2016.jpg",
  },
  {
    year: 2017,
    title: "Superfood range & $25M raised",
    description:
      "We gave the year a health kick with our Ragi Idli & Dosa batter - officially launching our Superfood range. And now with the Premji investment, we've raised $25 million! Our focus has been constant as the love we received which made this possible.",
    image: "/brand/misc/timeline/2017.jpg",
  },
  {
    year: 2018,
    title: "Vada Batter & Filter Coffee launch",
    description:
      "2018 saw the launch of the delicious and innovative Vada Batter and Traditional Filter Coffee Decoction packs. Ready to cook and enjoy, the two products are a testament to our constant research and development.",
    image: "/brand/misc/timeline/2018.jpg",
  },
  {
    year: 2020,
    title: "Eco-friendly packaging & Store Finder",
    description:
      "In 2020, iD came one step closer to its goal of sustainability. With the launch of Smart Sip Tender Coconut and Grated Coconut in a Coconut, we created our first eco-friendly packaging. iD also launched the Store Finder & Notify Me feature. This empowered customers with information on iD product availability in their neighbourhood stores. It ensured that people didn't need to get out of their homes during the lockdown in search of their favourite iD products.",
    image: "/brand/misc/timeline/2020.jpg",
  },
  {
    year: 2021,
    title: "World's largest batter factory",
    description:
      "In 2021, we unveiled the world's largest state-of-the-art batter factory in Anekal. We also set a new benchmark in the category by launching our clean label breads, with zero preservatives, emulsifiers and flour treatment agents.",
    image: "/brand/misc/timeline/2021.jpg",
  },
  {
    year: 2022,
    title: "₹507 crore funding & UK/US launch",
    description:
      "Invigorating opportunities unfolded by the year 2022. There was a new round of funding by NewQuest of ₹507 crores, and we expanded our horizon further across borders. We launched a new factory in North India. Our delectable iD Parotas hit the shelves in the United Kingdom and the United States. This was followed by the launch of iD Ghee, Homestyle Parathas and Coffee Powder in India as well.",
    image: "/brand/misc/timeline/2022.jpg",
  },
  {
    year: 2023,
    title: "Frozen Fruit Pulp & Vada 2.0",
    description:
      "Started the year with the grand launch of 6 variants of Freshly Frozen Fruit Pulp, followed by the better way to butter - iD butterstick, the Pour To Perfection Filter Coffee that lets you measure the decoction, and to top it all, Vada 2.0, where you can add your spices and vada your way-deli!",
    image: "/brand/misc/timeline/2023.jpg",
  },
  {
    year: 2024,
    title: "iD Chutneys & 11 new cities",
    description:
      "This year we launched the most-awaited of all our products, the #BatterHalf to our batter, iD Chutneys. In 4 different flavours - Peanut, Coconut, Coriander and Tomato! And expanded our territory across 11 new cities - Goa, Indore, Ahmedabad, Surat, Vadodara, Dehradun, Panchkula, Chandigarh, Jaipur, Lucknow and Bhopal.",
    image: "/brand/misc/timeline/2024.jpg",
  },
  {
    year: 2025,
    title: "iD Sambar & Flavoured Parotas",
    description:
      "This year, we took our mission of completing the South Indian breakfast a step further. Following our chutneys, we launched iD Sambar! A homestyle, authentic recipe made with fresh, handpicked ingredients. We also introduced a first-of-its-kind, flavourful twist to a classic with our Flavoured Parotas, featuring Peri-Peri, Italian Herbs & Chilli variants, which pair great with your favourite curries!",
    image: "/brand/misc/timeline/2025.jpg",
  },
];

export const STORY_TIMELINE_START = 2005;
export const STORY_TIMELINE_END = 2025;

// The full "About Us" intro paragraph, used on the real /corporate/about-us page.
export const ABOUT_US_INTRO =
  "iD was founded in 2005, by 5 cousins, with a 50sqft store & 1 big dream - to ensure that people around the world gets access to fresh, nutritious & delicious Indian food. With an unwavering vision to preserve traditional, home-made cuisine & a focus on making the process of cooking fun & effortless, iD today serves homes across India, UAE, US, UK, Oman and Saudi. Come, join us for a meal, made with love.";
