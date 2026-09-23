export interface VideoCampaign {
  title: string;
  description: string;
  youtubeUrl: string;
}

export interface PressMention {
  title: string;
  source: string;
  url: string;
}

export interface Award {
  title: string;
  year: string;
  badge: string;
  description: string;
}

// Real content supplied by the user (2026-09-23) for the /corporate/media page.
export const VIDEO_CAMPAIGNS: VideoCampaign[] = [
  {
    title: "iD in the spotlight",
    description:
      "The best meals are those #MadeWithLove, with premium ingredients and without preservatives. Bring home love with India's No.1 Idli-Dosa Batter.",
    youtubeUrl: "https://www.youtube.com/watch?v=XsXQsBpDr7c",
  },
  {
    title: "Campaigns we cooked up",
    description:
      "We take the opportunity to celebrate every occasion with a home-made feast and share the joy with you through media.",
    youtubeUrl: "https://www.youtube.com/watch?v=aglMtj_VQVQ&t=1s",
  },
  {
    title: "iD Parota Yum Up Anything",
    description:
      "iD parota/paratha se chutakiyon mein banayein Svaadishth khaana. Bilkul tajaa, bina preservatives aur dher saara pyar. YUM UP ANYTHINHG!",
    youtubeUrl: "https://www.youtube.com/watch?v=cri7iLoBlg0",
  },
  {
    title: "iD presents Little Big Heroes",
    description:
      "On Children's Day, iD shines a spotlight on the little people in our homes, who've quietly been doing big new things.",
    youtubeUrl: "https://www.youtube.com/watch?v=SKB-mheQpZY",
  },
  {
    title: "iD Factory Live with PC Musthafa, CEO iD Fresh Food",
    description:
      "A tour of our grand home kitchen, where we take the finest ingredients to be washed, soaked, ground, and mixed to create the batter you love so much.",
    youtubeUrl: "https://www.youtube.com/watch?v=CmUi7vqp4d8",
  },
  {
    title: "Khaana Khaaya 3 - Mother's Day",
    description:
      "Mother's Day is not just on 10th May. It's today and every other day. #ShareTheLove and #ShowYouCare with the same love & affection as that of a mother. #KhaanaKhaaya #KhaanaKhaaya2020",
    youtubeUrl: "https://www.youtube.com/watch?v=zYY1kJCOXW0",
  },
  {
    title: "iD Smart Sip Tender Coconut",
    description:
      "You may not know what life has in store for you, but with iD Smart Sip Tender Coconut, you'll always know exactly what you're getting. Each coconut tells you how much pulp and water is in there, and even how sweet it is.",
    youtubeUrl: "https://www.youtube.com/watch?v=qcbxuEBHeF4",
  },
  {
    title: "iD Grated Coconut In A Coconut",
    description:
      "We've taken one of nature's freshest foods and kept it fresh, naturally! Presenting iD Grated Coconut in a Coconut. It's Nature's Own Packaging.",
    youtubeUrl: "https://www.youtube.com/watch?v=TeBJ-k1tqJo&t=5s",
  },
  {
    title: "Their Love Mixed With Ours",
    description: "She's always there to listen. All you have to do is talk to her. Even better, over a cup of filter coffee.",
    youtubeUrl: "https://www.youtube.com/watch?v=69BfdBD427I",
  },
  {
    title: "Their Love Mixed With Ours",
    description: "There's comfort in every cup. So make every bittersweet goodbye a little bit sweeter.",
    youtubeUrl: "https://www.youtube.com/watch?v=rbvnpzza7Dw",
  },
  {
    title: "Their Love Mixed With Ours",
    description:
      "No matter how old you get, you'll always be the little one in your parent's eyes. So make sure you share the love with your parents over some delicious Filter Coffee.",
    youtubeUrl: "https://www.youtube.com/watch?v=Jc0AcuXJgnc",
  },
  {
    title: "World Idly Day",
    description:
      "Folklore is at the heart of tradition and culture, and a little fiction goes a long way in entertaining people. Communities are built on tradition and culture. We took this understanding and retold the story of the origin of Idly to celebrate the spirit of World Idly Day.",
    youtubeUrl: "https://www.youtube.com/watch?v=gGbDnNdtJuo",
  },
  {
    title: "Unite India",
    description:
      "What's the one thing that truly has the power to unite people across all differences? Food, of course! We decided to encourage people to open their hearts and homes to their neighbours, friends and fellow countrymen. All it took was a homecooked meal and true patriotic spirit to turn Independence Day 2018 into a real celebration.",
    youtubeUrl: "https://www.youtube.com/watch?v=gXh6qI4tJZ4",
  },
  {
    title: "Meet Your Neighbour",
    description:
      "Most of us lead such busy lives, our neighbours tend to become just door numbers or nameplates. We decided to make a difference and ensure a more tightly-knit community. So we asked people to throw their hearts and doors open to new friends over a home-cooked meal we provided - free of cost!",
    youtubeUrl: "https://www.youtube.com/watch?v=ZAUmhIWmcjM",
  },
  {
    title: "Khaana Khaaya 2",
    description:
      "A mother's love is so strong, pure and irreplaceable. Every little thing she does makes a lot of difference in our lives. In fact, this Mother's Day, we simply couldn't resist asking our mothers once again - Maa, Khaana Khaaya?",
    youtubeUrl: "https://www.youtube.com/watch?v=rDIvAFIsCk4",
  },
  {
    title: "#KhaanaKhaaya on Mother's Day",
    description:
      "Can two words hold a thousand emotions? The words “Khaana Khaaya” sure can. They indicate a mother's concern, love and worry all at once. So, this Mother's Day, we turned the tables and asked mothers, “Khaana Khaaya?”",
    youtubeUrl: "https://www.youtube.com/watch?v=qVPReTYAlkE",
  },
  {
    title: "Taking the #iDPledge on Independence Day",
    description:
      "Not all sacrifices make the news. On independence day, we celebrated our little heroes whose sacrifices otherwise go unnoticed. With the DIAV, we helped children of army martyrs get a little more help towards their education. We also got a lot of help from everyone who took the #iDPledge to do more and bring the little heroes' dreams to life.",
    youtubeUrl: "https://www.youtube.com/watch?v=eUqZCPPLSZI",
  },
  {
    title: "iD Trust Shop",
    description:
      "Picture coming across a fridge full of iD products. It's simply standing unguarded in your locality or workplace. The catch? None. Take what you want and pay what you have or come back later and pay the full amount. These fridges ran entirely on trust and nothing else. Because we believe trust works both ways.",
    youtubeUrl: "https://www.youtube.com/watch?v=AY1Vv8x_KUc",
  },
  {
    title: "Hungry For Literature",
    description:
      "We were the official food sponsors of the Times Lit Fest 2017 that was held in Bangalore. Our stall fed the hungry literati as we served up crisp dosas and the softest idlis and parotas. The end of the fest saw all the visitors full of food and smiles.",
    youtubeUrl: "https://www.youtube.com/watch?v=07b5kwuZc70",
  },
];

// "In the news" — press mentions, most recent first, exactly as supplied.
export const PRESS_MENTIONS: PressMention[] = [
  { title: "The Times of India - PE firm buys over 35% of iD Fresh Food - Jan 26", source: "The Times of India", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Times-of-India-PE-firm-buys-over-35-of-iD-Fresh-Food.jpg" },
  { title: "The Hindu Business Line - Apax acquires minority stake in iD Fresh Food - Jan 26", source: "The Hindu Business Line", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Hindu-Business-Line-Apax-acquires-minority-stake-in-iD-Fresh-Food.jpeg" },
  { title: "The Hindu - Apax to pick up minority stake in iD Fresh Food - Jan 26", source: "The Hindu", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Hindu-Apax-to-pick-up-minority-stake-in-iD-Fresh-Food.jpg" },
  { title: "The Free Press Journal - Apax partners invests over Rs 1,500 cr in id fresh food - Jan 26", source: "The Free Press Journal", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Free-Press-Journal-Apax-partners-invests-over-Rs-1500-cr-in-id-fresh-food.jpg" },
  { title: "The Economic Times - Apax to Get a Taste of iDli, Dosa and More - Jan 26", source: "The Economic Times", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Economic-Times-Apax-to-Get-a-Taste-of-iDli-Dosa-and-More.png" },
  { title: "Mint - Apax Funds picks small stake in dosa, foods co iD Fresh - Jan 26", source: "Mint", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/Mint-Apax-Funds-picks-small-stake-in-dosa-foods-co-iD-Fresh.jpg" },
  { title: "Hindustan Times - Apax Funds buys minority stake in iD Fresh Food - Jan 26", source: "Hindustan Times", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/Hindustan-Times-Apax-Funds-buys-minority-stake-in-iD-Fresh-Food.jpg" },
  { title: "Apax Partners Invests in iD Fresh Food: The Future of Ready-to-Cook Indian Cuisine - Jan 26", source: "ETBrandEquity", url: "https://brandequity.economictimes.indiatimes.com/amp/news/business-of-brands/apax-to-get-a-taste-of-idli-dosa-and-more/126373572" },
  { title: "Business Standard - Dec 25", source: "Business Standard", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/Business-Standard-Dec-25.jpeg" },
  { title: "From A Small Bengaluru Kitchen To A Global Fresh Food Brand: The iD Fresh Food Story | YTR - Dec 25", source: "CNBC TV18", url: "https://youtube.com/watch?si=gb8BHxr1E3PquaU7&v=CfWc3UFMTy0&feature=youtu.be" },
  { title: "How iD Fresh Is Turning South Indian Staples into a Global Fresh Food Brand - Dec 25", source: "FE Retail: Where Retail Leaders Connect, Learn, and Lead", url: "https://www.financialexpressb2b.com/insiderinsights" },
  { title: "The Financial Express - iD Fresh bets big on global expansion after Apax deal - Nov 25", source: "The Financial Express", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/The-Financial-Express-iD-Fresh-bets-big-on-global-expansion-after-Apax-deal.jpg" },
  { title: "Decoding iD Fresh Food's INR 1,100 Cr High-Stakes Growth Story - Nov 25", source: "Inc42", url: "https://inc42.com/startups/from-batter-to-billion-decoding-id-fresh-foods-inr-1100-cr-high-stakes-growth-story/" },
  { title: "iD Fresh Food profit rises fivefold to about ₹26 crore in FY25; revenue up 22% - Oct 25", source: "ETRetail", url: "https://retail.economictimes.indiatimes.com/news/food-entertainment/personal-care-pet-supplies-liquor/id-fresh-food-profit-rises-fivefold-to-about-26-crore-in-fy25-revenue-up-22/124938918" },
  { title: "ID Dainik Daitva - Aug 25", source: "ID Dainik Daitva", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/ID_Dainik-Daitva-August.png" },
  { title: "iD Fresh Food launches preservative-free ready mixes for tiffins - Aug 25", source: "Afaqs", url: "https://www.afaqs.com/news/mktg/id-fresh-food-launches-preservative-free-ready-mixes-for-tiffins-9639965" },
  { title: "Mint - July 25", source: "Mint", url: "https://www.idfreshfood.com/wp-content/uploads/2026/01/Mint-July.jpeg" },
  { title: "From Batter to Billion: P.C. Musthafa on Building iD Fresh & India's Trust Economy - July 25", source: "ET Retail", url: "https://retail.economictimes.indiatimes.com/videos/from-batter-to-billion-p-c-musthafa-on-building-id-fresh-indias-trust-economy/122218581" },
  { title: "iD Fresh launches flavoured parotas - June 25", source: "Afaqs", url: "https://www.afaqs.com/news/brands/id-fresh-launches-flavoured-parotas-9376400" },
  { title: "iD Fresh appoints Malhotra as CEO of its international biz - 2025", source: "iD Fresh", url: "https://www.idfreshfood.com/wp-content/uploads/2025/04/iD-Fresh-appoints-Malhotra-as-CEO-of-its-international-biz.jpeg" },
  { title: "Premji-backed iD Fresh appoints Shobhit Malhotra as CEO for global biz - Apr 24, 2025", source: "Economic Times India Times", url: "https://economictimes.indiatimes.com/industry/cons-products/food/premji-backed-id-fresh-appoints-shobhit-malhotra-as-ceo-for-global-biz/articleshow/120577489.cms?from=mdr" },
  { title: "iD Fresh Food appoints Shobhit Malhotra as CEO for International Business - Apr 24, 2025", source: "Gulf News", url: "https://gulfnews.com/business/corporate-news/id-fresh-food-appoints-shobhit-malhotra-as-ceo-for-international-business-1.500104129" },
  { title: "iD Fresh Food appoints Shobhit Malhotra as CEO - 23 Apr 2025", source: "Peoplematters", url: "https://www.peoplematters.in/news/appointments/id-fresh-food-appoints-shobhit-malhotra-as-ceo-45290" },
  { title: "iD Fresh Food appoints Shobhit Malhotra as CEO – International Business - 23 Apr 2025", source: "Afaqs", url: "https://www.afaqs.com/people-spotting/id-fresh-food-appoints-shobhit-malhotra-as-ceo-international-business-8992090" },
  { title: "iD Fresh Food appoints Shobhit Malhotra as CEO - International Business - Apr 23, 2025", source: "Retail Economic Times India Times", url: "https://retail.economictimes.indiatimes.com/news/food-entertainment/grocery/id-fresh-food-appoints-shobhit-malhotra-as-ceo-international-business/120542616" },
  { title: "iD Fresh announces Rajat Diwaker as India CEO, Mustafa becomes Global CEO - 5th Jan, 2024", source: "The Economic Times", url: "https://economictimes.indiatimes.com/industry/cons-products/fmcg/id-fresh-announces-rajat-diwaker-as-india-ceo-mustafa-becomes-global-ceo/articleshow/106580216.cms?from=mdr" },
  { title: "iD Fresh Food unveils four variants of Chutney on World Dosa Day - March 4th, 2024", source: "Afaqs", url: "https://www.afaqs.com/news/brands/id-fresh-food-unveils-four-variants-of-chutney-on-world-dosa-day" },
  { title: "iD Fresh partners with Tata Motors; inducts the first batch of zero-emission Ace EVs - March 20th, 2024", source: "YourStory", url: "https://yourstory.com/2024/03/startup-news-and-updates-daily-roundup-march-20-2024-kiya-zeeve" },
  { title: "Authenticity first: Why iD Fresh Food is seeking grandmas' approval for its 'TransparenSee' - 22nd April, 2024", source: "Afaqs", url: "https://yourstory.com/2024/03/startup-news-and-updates-daily-roundup-march-20-2024-kiya-zeeve" },
  { title: "How to build an FMCG brand? - 24th Sept, 2023", source: "Melt TV", url: "https://www.youtube.com/watch?v=07b5kwuZc70" },
  { title: "iD Fresh Food secures a third of its revenue from UAE market in just six months - 25th Oct, 2023", source: "CNBC TV18", url: "https://www.cnbctv18.com/startup/id-fresh-food-a-journey-of-freshness-innovation-and-growth-without-bank-loans-18150171.htm" },
  { title: "iD Fresh Food introduces glue stick design inspired butterstick - 6th Oct, 2023", source: "The Hindu Business Line", url: "https://www.thehindubusinessline.com/companies/id-fresh-food-introduces-glue-stick-design-inspired-butterstick/article67387783.ece" },
  { title: "'My father earned 10 rupees a day.': iD Fresh Food CEO Musthafa reveals how he helped family during poverty - 17th December, 2023", source: "Business Today", url: "https://www.businesstoday.in/latest/corporate/story/my-father-earned-10-rupees-a-day-id-fresh-food-ceo-musthafa-reveals-how-he-helped-family-during-poverty-409636-2023-12-15" },
  { title: "iD Fresh Food: Inside PC Musthafa's dosa-idli batter empire - 8th December, 2023", source: "Forbes", url: "https://www.forbesindia.com/article/startups/id-fresh-food-inside-pc-musthafas-dosaidli-batter-empire/90211/1" },
  { title: "iD Fresh launches innovative pour-to-perfection Coffee Liquid Bottle - 8th August, 2023", source: "Afaqs", url: "https://www.afaqs.com/news/mktg/id-fresh-launches-innovative-pour-to-perfection-coffee-liquid-bottle" },
  { title: "Brand Equity | Amazing Food Journey Of ID Fresh Food! | Sonali Krishna Interviews P C Musthafa - 2nd August, 2023", source: "ET Now Brand Equity", url: "https://www.youtube.com/watch?v=Ks3GAM4Rk9w" },
  { title: "India's Breakfast King - ₹3,000 Crore Business from Idli, Dosa Batter & More | PC Musthafa - 24th Nov, 2023", source: "The Neon Show", url: "https://www.youtube.com/watch?v=qBtVKwgAdVQ" },
  { title: "iD Runs on IT and lots of engineering - 5th Nov, 2023", source: "The Times Of India", url: "https://timesofindia.indiatimes.com/business/india-business/id-runs-on-it-and-lots-of-engineering/articleshow/104983075.cms?from=mdr&utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" },
  { title: "Idlis & innovation with iD Fresh Food - 3rd Nov, 2023", source: "The Economic Times", url: "https://economictimes.indiatimes.com/news/morning-brief-podcast/morning-brief-podcast-idlis-innovation-with-id-fresh-food/podcast/104929372.cms?from=mdr" },
  { title: "iD Fresh Food forays into frozen fruit blends - 29th May 2023", source: "Afaqs", url: "https://www.afaqs.com/news/brands/id-fresh-forays-into-frozen-fruit-blends" },
  { title: "After witnessing hyper-growth online, iD Fresh Food is now focusing on a hybrid business model - 21st April 2023", source: "Business Today", url: "https://www.businesstoday.in/entrepreneurship/story/after-witnessing-hyper-growth-online-id-fresh-food-is-now-focusing-on-a-hybrid-business-model-378310-2023-04-21" },
  { title: "Interview: PC Musthafa, CEO and co-founder, iD Fresh Food - 5th Oct 2022", source: "Financial Express – Brand Wagon", url: "https://www.financialexpress.com/business/brandwagon-span-stylecolor-rgb34-34-34-font-family-quotdefault-sans-serifquot-verdana-arial-helvetica-sans-serif-font-size-small-font-weight-400-white-space-normalinterview-pc-musthafa-ceo-and-co-founder-id-fres-2700851/" },
  { title: "iD Fresh Food opens 5th manufacturing unit with investment of ₹20 crore - 17th Oct 2022", source: "The Hindu Business Line", url: "https://www.thehindubusinessline.com/companies/id-fresh-food-opens-5th-manufacturing-unit-with-investment-of-20-crore/article66021646.ece" },
  { title: "iD Fresh Food expands to North India - 17th Oct 2022", source: "The Times of India", url: "https://timesofindia.indiatimes.com/city/chennai/id-fresh-food-expands-to-north-india/articleshow/94929452.cms" },
  { title: "iD Fresh Food enters the ghee market - 3rd August 2022", source: "Mint", url: "https://www.livemint.com/companies/news/id-fresh-food-enters-the-ghee-market-11659522569739.html" },
  { title: "Bread to batter maker, iD food eyes Rs 600 crore revenue in FY23 - 4th August 2022", source: "Financial Express", url: "https://www.financialexpress.com/business/industry-bread-to-batter-maker-id-food-eyes-rs-600-crore-revenue-in-fy23-2616652/" },
  { title: "iD Fresh Food expects Rs 700 crore revenue in the current fiscal; plans to expand its manufacturing facilities - 25th June 2022", source: "ET Retail", url: "https://retail.economictimes.indiatimes.com/news/food-entertainment/food-services/id-fresh-food-expects-rs-700-crore-revenue-in-the-current-fiscal-plans-to-expand-its-manufacturing-facilities/92447343" },
  { title: "For perfectly-shaped vadas, this company ditched Pepsi bottles. CEO shares 'jugaad' idea - 8th Nov 2022", source: "MoneyControl", url: "https://www.moneycontrol.com/news/trends/to-create-perfectly-shaped-vadas-this-food-companys-ceo-ditched-pepsi-bottles-and-opted-for-umbrellas-9468001.html" },
  { title: "Mother's Day 2022: iD Fresh's campaign connects food to a mother's love - 7th May 2022", source: "ET Brand Equity", url: "https://brandequity.economictimes.indiatimes.com/news/advertising/mothers-day-2022-id-freshs-campaign-connects-food-to-a-mothers-love/91398702" },
  { title: "iD Fresh opens factory for a peek into its batter making - 30th March 2022", source: "The Economic Times", url: "https://economictimes.indiatimes.com/industry/cons-products/food/world-idly-day-id-fresh-opens-factory-for-a-peek-into-its-batter-making/articleshow/90536640.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" },
  { title: "iD Fresh launches livestreaming from its Giant Home Kitchen - 30th March 2022", source: "Times of India", url: "https://timesofindia.indiatimes.com/articleshow/90534355.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst" },
  { title: "World Idli Day: 'World's biggest batter factory' live-streams this week - 30th March 2022", source: "Moneycontrol", url: "https://www.moneycontrol.com/news/trends/world-idli-day-id-fresh-food-worlds-biggest-batter-factory-in-bengaluru-live-streaming-8294291.html" },
  { title: "iD Fresh Food Launches Homestyle Whole Wheat Triangular Parathas - January 20th 2022", source: "Indian Retailer", url: "https://www.indianretailer.com/news/id-fresh-food-launches-homestyle-whole-wheat-triangular-parathas.n12546" },
  { title: "iD Fresh Raises ₹500 Cr+ In Recent Funding, Plans To Open New Plant In New Jersey - January 18th 2022", source: "ET Now", url: "https://www.timesnownews.com/videos/et-now/shows/id-fresh-raises-500-cr-in-recent-funding-plans-to-open-new-plant-in-new-jersey-startup-central/118945" },
  { title: "Why ID's PC Musthafa Blindly Trusts His Customers And Countrymen - January 11th 2022", source: "Bloomberg Quint", url: "https://www.bloombergquint.com/opinion/why-ids-pc-musthafa-blindly-trusts-his-customers-and-countrymen" },
  { title: "Food co iD Fresh raises 507 crore - January 4th 2022", source: "The Times of India", url: "https://timesofindia.indiatimes.com/business/india-business/food-co-id-fresh-raises-507-crore/articleshow/88701415.cms" },
  { title: "NewQuest, Premji invest Rs 507 crore in startup iD Fresh Food - January 4th 2022", source: "The Economic Times", url: "https://economictimes.indiatimes.com/tech/startups/newquest-premji-invest-rs507-crore-in-startup-id-fresh-food/articleshow/88690449.cms" },
  { title: "iD Fresh Food gets Rs 507 cr & CASHe raises Rs 140 cr - January 4th 2022", source: "CNBC TV18", url: "https://www.cnbctv18.com/startup/funding-rundown-exotel-secures-40-mn-sbi-invests-20-mn-in-pine-labs-id-fresh-food-gets-rs-507-cr--cashe-raises-rs-140-cr-12014532.htm/amp" },
  { title: "Meet PC Musthafa, the mind behind food brand iD Fresh Food - December 14th 2021", source: "The New Indian Express", url: "https://www.newindianexpress.com/cities/kochi/2021/Dec/15/interview-meet-pc-musthafathe-mind-behind-food-brand-id-fresh-food-2395575.html" },
  { title: "iD Fresh Food: From batter to bread - November 1st 2021", source: "Financial Express", url: "https://www.financialexpress.com/business/brandwagon-id-fresh-food-from-batter-to-bread-2360758/" },
  { title: "iD Fresh Food launches bread; to take on branded players, local bakeries - September 28th 2021", source: "Afaqs", url: "https://www.afaqs.com/news/mktg/id-fresh-food-launches-bread-to-take-on-branded-players-local-bakeries" },
  { title: "iD fresh foods founder calls out fake WhatsApp propaganda - September 7th 2021", source: "Moneycontrol", url: "https://www.moneycontrol.com/news/business/id-fresh-foods-founder-calls-out-fake-whatsapp-propaganda-7442201.html" },
  { title: "This CEO Built $100 Mn Company By Selling Idli-Dosa Batter - August 30th 2021", source: "NDTV", url: "https://www.ndtv.com/offbeat/musthafa-pc-went-from-living-on-rs-10-to-building-id-fresh-food-2524954" },
  { title: "iD Fresh expands global footprint - July 27th 2021", source: "ET Hospitality", url: "https://hospitality.economictimes.indiatimes.com/news/operations/food-and-beverages/id-fresh-expands-global-footprint/84791070" },
  { title: "Meet PC Musthafa, A Coolie's Son Who Raised A ₹294 Crore Company By Selling Idli & Dosa Batter! - July 18th 2021", source: "Whatshot", url: "https://www.whatshot.in/delhi-ncr/meet-pc-musthafa-a-coolies-son-who-raised-a-100-crore-company-by-selling-idli-dosa-batter-c-30835" },
  { title: "iD Fresh Food to expand India & GCC operations, to hire over 500 employees - June 28th 2021", source: "The Times of India", url: "https://timesofindia.indiatimes.com/business/india-business/id-fresh-food-to-expand-india-gcc-operations-to-hire-over-500-employees/articleshow/83916821.cms" },
  { title: "Blow by blow account of how a daily wager's son built a Rs 294 crore turnover company - May 31st 2021", source: "The Weekend Leader", url: "https://www.theweekendleader.com/Success/2555/getting-batter-daily.html" },
  { title: "BigBasket, iD launch 'iD Fresho' - May 26th 2021", source: "The Hindu Business Line", url: "https://www.thehindubusinessline.com/news/bigbasket-id-launch-id-fresho/article34650938.ece/amp/" },
  { title: "Bigbasket and iD Fresh Food join hands to launch ready-to-cook brand iD Fresho - May 26th 2021", source: "The Economic Times", url: "https://economictimes.indiatimes.com/industry/services/retail/bigbasket-and-id-fresh-food-join-hands-to-launch-ready-to-cook-brand-id-fresho/articleshow/82967064.cms" },
  { title: "iD Fresh Food revenue up 23.5% at ₹294 crore in FY21 - April 5th 2021", source: "Hindu Business Line", url: "https://www.thehindubusinessline.com/companies/id-fresh-food-revenue-up-235-at-294-crore-in-fy21/article34245452.ece" },
  { title: "iD Fresh Food launches idly, dosa batter factory - April 3rd 2021", source: "The Print week", url: "https://www.printweek.in/article/id-fresh-food-launches-idly-dosa-batter-factory/4e87g092jk1t7sykvybfwsccdf" },
  { title: "iD Fresh co-founder PC Musthafa takes you inside the world's largest idli dosa batter factory - March 31st 2021", source: "Money Control", url: "https://www.moneycontrol.com/news/eye-on-india/videos/id-fresh-co-founder-pc-musthafa-takes-you-inside-the-worlds-largest-idli-dosa-batter-factory-6707831.html" },
  { title: "How iD Fresh Food found opportunity in Covid-19 crisis - March 22nd 2021", source: "Business Today", url: "https://www.businesstoday.in/latest/corporate/story/how-id-fresh-food-found-opportunity-in-covid-19-crisis-291265-2021-03-19" },
  { title: "iD Fresh Food launches online store driven by demand surge for its filter coffee post-pandemic - March 12th 2021", source: "Economic Times", url: "https://economictimes.indiatimes.com/industry/cons-products/food/id-fresh-food-launches-online-store-driven-by-demand-surge-for-its-filter-coffee-post-pandemic/articleshow/81461200.cms?from=mdr" },
  { title: "ID Fresh Food launches online store - March 12th 2021", source: "The Hindu Business Line", url: "https://www.thehindubusinessline.com/companies/id-fresh-food-launches-online-store/article34050976.ece" },
  { title: "iD Fresh Food invests ₹40 crore to launch new plant - March 31st 2021", source: "Mint", url: "https://www.livemint.com/companies/news/id-fresh-food-invests-rs-40-crore-to-launch-new-plant-11617207162970.html" },
  { title: "The iD brand grows stronger - 22nd March, 2021", source: "ET Hospitality World", url: "https://hospitality.economictimes.indiatimes.com/news/operations/food-and-beverages/the-id-brand-grows-stronger/81630071" },
  { title: "Here's how iD Fresh Food is bringing the power of batters, decoction, parotas to a competitive ready-to-cook market - 22nd March, 2021", source: "AFAQS", url: "https://www.afaqs.com/news/mktg/heres-how-id-fresh-food-is-bringing-the-power-of-batters-decoction-parotas-to-a-competitive-ready-to-cook-market" },
  { title: "How iD Fresh Food found opportunity in Covid-19 crisis - 21st March, 2021", source: "Business Today", url: "https://www.businesstoday.in/latest/corporate/story/how-id-fresh-food-found-opportunity-in-covid-19-crisis-291265-2021-03-19" },
  { title: "How work from home taught iD Fresh CEO PC Musthafa to do more with less - 16th March, 2021", source: "Financial Express", url: "https://www.financialexpress.com/business/industry-how-work-from-home-taught-id-fresh-ceo-pc-musthafa-to-do-more-with-less-2213580/" },
  { title: "iD Fresh Food to set up new plants, scale up supply network - 15th March, 2021", source: "Mint", url: "https://www.idfreshfood.com/wp-content/uploads/2021/03/iD-Fresh-Mint-National-Coverage-16th-March-2021.jpeg" },
  { title: "iD Fresh Food launches ecommerce platform - 12th March, 2021", source: "Times of India", url: "https://www.idfreshfood.com/wp-content/uploads/2021/03/iD-Fresh-Mint-National-Coverage-16th-March-2021.jpeg" },
  { title: "iD's new ad film acknowledges the role of coffee in our lives - 25th February, 2021", source: "ET Brand Equity", url: "https://www.idfreshfood.com/media/" },
  { title: "iD Fresh Food launches Instant Filter Coffee Liquid - 10th January, 2021", source: "ET Hospitality", url: "https://hospitality.economictimes.indiatimes.com/news/operations/food-and-beverages/id-fresh-food-launches-instant-filter-coffee-liquid/80186784" },
  { title: "iD Fresh Food expands instant coffee portfolio as demand rises due to work from home - 7th January, 2021", source: "ET Retail", url: "https://retail.economictimes.indiatimes.com/news/food-entertainment/grocery/id-fresh-food-expands-instant-coffee-portfolio-as-demand-rises-due-to-work-from-home/80148962" },
  { title: "iD Fresh Food expands instant coffee portfolio as demand rises due to work from home - 7th January, 2021", source: "Economic Times", url: "https://economictimes.indiatimes.com/tech/startups/id-fresh-food-expands-instant-coffee-portfolio-as-demand-rises-due-to-work-from-home/articleshow/80149546.cms?from=mdr" },
  { title: "How did ID Fresh Foods perform in 2020? - 27th December, 2020", source: "ET Now StartUp Central", url: "https://www.youtube.com/watch?v=WkwtuCyr78s" },
  { title: "iD Fresh wants to build the world's largest idli factory in Bengaluru! - 27th December, 2020", source: "Times Now", url: "https://www.timesnownews.com/business-economy/article/id-fresh-wants-to-build-the-worlds-largest-idli-factory-in-bengaluru/698649" },
  { title: "What the iD Fresh founder learnt from a case of exploding batter - 6th December, 2020", source: "CNBC TV18", url: "https://www.cnbctv18.com/business/backstory-what-the-id-fresh-founder-learnt-from-a-case-of-exploding-batter-7651521.htm" },
  { title: "Four simple rules of innovation by iD Fresh Food's PC Musthafa; How to win over investors - 5th November, 2020", source: "Yourstory", url: "https://yourstory.com/2020/11/innovation-startup-investors-crises-techsparks-2020-licious" },
  { title: "iD Fresh Food salutes the spirit of Covid-19 warriors - 4th November, 2020", source: "ET Brand Equity", url: "https://brandequity.economictimes.indiatimes.com/news/research/advertising/id-fresh-food-salutes-the-spirit-of-covid-19-warriors/79041337" },
  { title: "Can trust be the new currency for iD Fresh Food? - 28th October, 2020", source: "Forbes", url: "https://www.forbesindia.com/article/take-one-big-story-of-the-day/can-trust-be-the-new-currency-for-id-fresh-food/63785/1" },
  { title: "Batter banter - 14th October, 2020", source: "New Indian Express", url: "https://www.idfreshfood.com/wp-content/uploads/2021/03/iD-Fresh-New-Indian-Express-Idli-debate-15.10.2020.jpeg" },
  { title: "'Rejoicing with you as a family member', says iD Fresh's campaign - 27th September, 2020", source: "ET Brand Equity", url: "https://brandequity.economictimes.indiatimes.com/amp/news/research/advertising/rejoicing-with-you-as-a-family-member-says-id-freshs-campaign/78333512" },
  { title: "India's packaged food market is poised to double - 16th August, 2020", source: "CNBC TV18", url: "https://www.cnbctv18.com/business/ready-in-a-jiffy-heres-why-indias-ready-to-eat-market-is-set-to-double-yoy-6640171.htm" },
  { title: "Why now is the time to prioritize your retention - 30th July, 2020", source: "People matter", url: "https://www.peoplematters.in/article/employee-relations/why-now-is-the-time-to-prioritize-your-retention-26512" },
  { title: "iD Fresh sees demand for whole wheat parota apart from signature idly-dosa batter in lockdown - 16th July, 2020", source: "Moneycontrol", url: "https://www.moneycontrol.com/news/business/id-fresh-sees-demand-for-whole-wheat-parota-apart-from-signature-idly-dosa-batter-in-lockdown-co-founder-pc-musthafa-5554251.html" },
  { title: "iD Fresh Food delivers fresh food to your doorstep during the lockdown - 2nd July, 2020", source: "Maharashtra Times", url: "https://maharashtratimes.com/business/business-news/id-trust-shop-delivered-fresh-food-to-doorstep/articleshow/76748059.cms" },
  { title: "Start up central - Leaders of Tomorrow - 22nd June, 2020", source: "Times Now News", url: "https://www.timesnownews.com/videos/et-now/shows/leaders-of-tomorrow-id-fresh-vianaar-homes-niti-aayog/64792" },
  { title: "'Parota is an emotion': iD Fresh to appeal against 18% GST ruling - 13th June, 2020", source: "CNBC TV", url: "https://www.cnbctv18.com/retail/parota-is-an-emotion-id-fresh-to-appeal-against-18-gst-ruling-6128141.htm" },
  { title: "Parota manufacturer says he will challenge the new GST regime - 12th June, 2020", source: "Times of India", url: "https://www.idfreshfood.com/wp-content/uploads/2021/03/iD-Fresh-Food-_The-Times-Of-India.jpeg" },
  { title: "Think local go global - 9th June, 2020", source: "ET now", url: "https://www.timesnownews.com/business-economy/economy/article/think-local-go-global-watch-et-now-live-webinar-at-5pm-thursday-11-june/603892" },
  { title: "Different strokes - 2nd June, 2020", source: "Business India", url: "https://www.idfreshfood.com/wp-content/uploads/2021/03/iD-Fresh-Food-Business-India-June-2020.png" },
  { title: "Amid layoffs across industries, an Indian food brand is sticking to increments and upskilling - 29th May, 2020", source: "Quartz India", url: "https://qz.com/india/1861770/indias-id-fresh-is-using-covid-19-as-a-chance-to-upskill-staff" },
  { title: "iD Fresh Food launches 'Store Finder' feature to ease customer stress during lockdown - 5th April, 2020", source: "The Hindu BusinessLine", url: "https://www.thehindubusinessline.com/companies/id-fresh-food-launches-store-finder-feature-to-ease-customer-stress-during-lockdown/article31262638.ece" },
  { title: "'When common sense meets science, innovation happens', says iD Fresh Food CEO and co-founder Musthafa PC - 29th February, 2020", source: "Bangalore Mirror", url: "https://bangaloremirror.indiatimes.com/bangalore/others/when-common-sense-meets-science-innovation-happens-says-id-fresh-food-ceo-and-co-founder-musthafa-pc/articleshow/74408780.cms" },
  { title: "iD Fresh Food's Know Your Coconut Campaign - 25th February, 2020", source: "Outlook Business", url: "https://www.outlookbusiness.com/ad-break/id-fresh-foods-know-your-coconut-ad-campaign-5693" },
  { title: "iD Fresh reinvents coconut, targets ₹150-cr biz - 17th February, 2020", source: "The Hindu BusinessLine", url: "https://www.thehindubusinessline.com/companies/id-fresh-reinvents-coconut-targets-150-cr-biz/article30842607.ece" },
  { title: "Dosa idli batter maker iD Fresh enters coconut business - 14th February, 2020", source: "The Economic Times", url: "https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/dosa-idli-batter-maker-id-fresh-enters-coconut-business/articleshow/74101492.cms?from=mdr" },
  { title: "iD Fresh: Upping the ante on innovation - 12th February, 2020", source: "Live Mint", url: "https://www.livemint.com/brand-post/id-fresh-upping-the-ante-on-innovation-11581508714547.html" },
  { title: "When a 'Batter Blast' Led iD Fresh to Find a Way to Make Rs 210 Crores a Year - 26th January, 2020", source: "YourStory", url: "https://yourstory.com/2020/01/turning-point-id-fresh-entrepreneur-startup-success" },
  { title: "NewsX coverage of iD Fresh Food - 1st December, 2019", source: "NewsX", url: "https://www.youtube.com/watch?v=DDotYmxkbWY&t=430s" },
  { title: "Meet Eight Entrepreneurs Who Defied All Odds and Rose to the Top - 27th October, 2019", source: "The Economic Times", url: "https://economictimes.indiatimes.com/small-biz/startups/features/meet-eight-entrepreneurs-who-defied-all-odds-and-rose-to-the-top/articleshow/71779574.cms" },
  { title: "Hall of Fame - 9th October, 2019", source: "Outlook Business", url: "https://www.outlookbusiness.com/perspective/hall-of-fame-5417" },
  { title: "iD Fresh gets ₹50 lakhs per month in revenue from Bigbasket: CEO - 23rd September, 2019", source: "Live Mint", url: "https://www.livemint.com/companies/start-ups/id-fresh-gets-rs-50-lakhs-per-month-in-revenue-from-bigbasket-ceo-1569235597630.html" },
  { title: "Affordability is one of the main challenges in organic food market: Musthafa P C - 21nd September, 2019", source: "The Economic Times", url: "https://health.economictimes.indiatimes.com/news/industry/affordability-is-one-of-the-main-challenges-in-organic-food-market-musthafa-p-c/71228331" },
  { title: "iD Fresh eyeing massive market share in GCC - 5th November, 2018", source: "Gulf Today", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/GulfToday-BizPg2-Nov052018-IDFresh.jpg" },
  { title: "Better batter, better business - 22nd August, 2018", source: "Brand Equity", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-Brand-Equity-_-22nd-Aug-2018.png" },
  { title: "Breakfast with iD - 5th October, 2018", source: "Brand Standard", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-Business-Standard-_-Pg-2.jpeg" },
  { title: "iD Fresh Food eyes Rs 50cr in revenue", source: "Deccan Chronical", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-Deccan-Chronicle-_-Filter-Coffee-Launch.jpeg" },
  { title: "iD aims to break Rs 1,000 Cr mark in revenue in 4 years", source: "Dina Thanthi", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-Dina-Thanthi-_-Filter-Coffee-Launch.png" },
  { title: "iD Fresh Food enters filter coffee decoction business", source: "The Economic Times", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-The-Economic-Times-_-Filter-Coffee-Launch.png" },
  { title: "Food business draws on grandma recipes - 6th November, 2018", source: "Khaleej Times", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Fresh-_-The-Economic-Times-_-Filter-Coffee-Launch.png" },
  { title: "iD Fresh shifts focus to organic products - 28th March, 2018", source: "Business Standard", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Organic-coverage-_-Business-Standard.jpeg" },
  { title: "Suvarna Times: Organic avatars of iD Food's idli, dosa batter coming soon - 28th March, 2018", source: "Hindu Business Line", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Organic-coverage-_-Business-Standard.jpeg" },
  { title: "Organic coverage", source: "Prajawani", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Organic-coverage-_-Prajawani.jpeg" },
  { title: "Organic coverage", source: "Suvarna Times", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Organic-coverage-_-Suvarna-Times.jpeg" },
  { title: "Premji backed iD Fresh Food to go all organic", source: "Times of India", url: "https://www.idfreshfood.com/wp-content/uploads/2019/06/iD-Organic-coverage-_-The-Times-of-India.jpeg" },
  { title: "Indian food products company iD Fresh plans to go all-organic - 30th March, 2019", source: "L2Food", url: "https://l2food.com/indian-food-products-company-id-fresh-plans-go-organic/" },
  { title: "Fresh Food Innovator, iD Fresh, Takes the Organic Leap - 28th March, 2019", source: "Businesswire", url: "https://www.businesswireindia.com/fresh-food-innovator-id-fresh--62596.html" },
  { title: "Azim Premji Backed iD Fresh Enters into the Organic Food Market - 28th March, 2019", source: "BW Disrupt", url: "https://www.bwdisrupt.com/article/azim-premji-backed-id-fresh-enters-into-the-organic-food-market-168584" },
  { title: "iD Fresh takes the organic leap - 29th March, 2019", source: "ANI", url: "https://www.aninews.in/news/business/id-fresh-takes-the-organic-leap20190329084747/" },
  { title: "Fresh food innovator, iD Fresh, takes the organic leap - 29th March, 2019", source: "India Retailing", url: "https://www.indiaretailing.com/2019/03/29/food/food-grocery/fresh-food-innovator-id-fresh-takes-the-organic-leap" },
  { title: "iD Fresh to offer organic range 25% cheaper than processed organic foods - 29th March, 2019", source: "FnB News", url: "https://www.fnbnews.com/Top-News/id-fresh-to-offer-organic-range-25-cheaper-than-processed-organic-foods-47215" },
  { title: "iD Fresh to go fully organic in a phased manner - 28th March, 2019", source: "Business Today", url: "https://www.businesstoday.in/latest/corporate/story/id-fresh-to-go-fully-organic-in-a-phased-manner-180202-2019-03-28" },
  { title: "Organic avatars of iD's idli, dosa batter coming soon - 28th March, 2019", source: "Hindu Business Line", url: "https://www.thehindubusinessline.com/companies/organic-avatars-of-ids-idli-dosa-batter-coming-soon/article26666507.ece" },
  { title: "Premji-backed iD Fresh Food plans to sell only organic food products - 29th March, 2019", source: "Business Standard", url: "https://www.business-standard.com/article/companies/premji-backed-id-fresh-food-plans-to-sell-only-organic-food-products-119032801027_1.html" },
  { title: "iD Fresh 2.0: turning organic, targeting a revenue of Rs 350 Cr in FY20 - 28th March, 2019", source: "YourStory", url: "https://yourstory.com/2019/03/fmcg-id-fresh-organic-idli-dosa-e9gv0qe8q8" },
  { title: "Premji-backed iD Fresh Food goes organic - 28th March, 2019", source: "ET Retail", url: "https://tech.economictimes.indiatimes.com/news/corporate/premji-backed-id-fresh-food-goes-organic/68617118" },
  { title: "Fresh Food innovator iD Fresh takes the organic leap - 29th March, 2019", source: "Nuf foods spectrum", url: "https://nuffoodsspectrum.asia/digizine-september2026" },
  { title: "iD Fresh to sell organic packaged food - 28th March, 2019", source: "Live mint", url: "https://www.livemint.com/companies/start-ups/id-fresh-to-sell-organic-packaged-food-1553776507695.html" },
  { title: "India's largest morning meal maker iD Fresh cooks up more products for UAE market - 31th October, 2018", source: "Go Dubai", url: "http://www.godubai.com/citylife/Press_Release_page.asp?Pr=134182&Sname" },
  { title: "India's largest morning meal maker iD Fresh cooks up more products for UAE market - 31th October, 2018", source: "Dubai PR Networks", url: "https://www.dubaiprnetwork.com/food-industry-news/134182-india-s-largest-morning-meal-maker-id-fresh-cooks-up-more-products-for-uae-marke" },
  { title: "India's largest morning meal maker iD Fresh cooks up more products for UAE market - 30th October, 2018", source: "Thomson Reuters Zawya", url: "https://www.zawya.com/en/" },
  { title: "Musthafa P C: The founder of iD Fresh Food has a rags-to-riches story - 5th October, 2018", source: "Business Standard", url: "https://www.business-standard.com/article/companies/here-s-the-rags-to-riches-story-of-id-fresh-food-s-founder-musthafa-p-c-118100501232_1.html" },
  { title: "iD's coffee decoction hopes to take on Nestle, Bru - 29th September, 2018", source: "The Times of India", url: "https://timesofindia.indiatimes.com/business/india-business/ids-coffee-decoction-hopes-to-take-on-nestle-bru/articleshow/66004561.cms" },
  { title: "iD Fresh Food rolls out authentic filter coffee decoction - 4th October, 2018", source: "Business Standard", url: "https://www.business-standard.com/article/news-ani/id-fresh-food-rolls-out-authentic-filter-coffee-decoction-118100400674_1.html" },
  { title: "iD Fresh Food enters filter coffee decoction biz: eyes Rs 50Cr - 4th October, 2018", source: "Business Standard", url: "https://www.business-standard.com/article/pti-stories/id-fresh-food-enters-filter-coffee-decoction-biz-eyes-rs-50cr-118100400586_1.html" },
  { title: "Authentic decoction for the coffee lover in you - 6th October, 2018", source: "The New Indian Express", url: "https://www.newindianexpress.com/cities/chennai/2018/Oct/06/authentic-decoction-for-the-coffee-lover-in-you-1881603.html" },
  { title: "iD Fresh food aims to breach Rs 1,000 cr mark in revenue in 4 years - 5th October, 2018", source: "Dina Thanthi", url: "https://www.dtnext.in/News" },
  { title: "iD Fresh Food rolls out authentic filter coffee decoction - 4th October, 2018", source: "ANI", url: "https://www.aninews.in/news/business/business/id-fresh-food-rolls-out-authentic-filter-coffee-decoction201810041609040002/" },
  { title: "iD Fresh Food enters filter coffee decoction biz: eyes Rs 50Cr - 4th October, 2018", source: "Devdiscourse", url: "https://www.devdiscourse.com/article/headlines/206018-id-fresh-food-enters-filter-coffee-decoction-biz-eyes-rs-50cr" },
  { title: "iD Fresh Food enters filter coffee decoction biz: eyes Rs 50Cr - 4th October, 2018", source: "India.com", url: "https://india.com/news/id-fresh-food-enters-filter-coffee-decoction-biz-eyes-rs-50cr-3362929/" },
  { title: "After The Success Of Their Ready To Cook Indian Food iD Fresh Food Launches A Filter Coffee Decoction - 6th October, 2018", source: "Hungry Forever", url: "https://hungryforever.net/after-the-success-of-their-ready-to-cook-indian-food-id-fresh-food-launches-a-filter-coffee-decoction/" },
  { title: "iD Fresh Food Enters Filter Coffee Decoction Segment - 6th October, 2018", source: "Franchise India", url: "https://news.franchiseindia.com/restaurant/id-fresh-food-enters-filter-coffee-decoction-segment.n16790" },
  { title: "iD's coffee decoction hopes to take on Nestle, Bru - 1st October, 2018", source: "Hospibuz", url: "https://hospibuz.com/ids-coffee-decoction-hopes-to-take-on-nestle-bru/" },
  { title: "How iD Fresh grew from a 50 sq ft store into a Rs 182 crore brand - 12th September, 2018", source: "YourStory", url: "https://yourstory.com/2018/09/id-fresh-grew-50-sq-ft-store-rs-182-crore-brand" },
  { title: "Premji backed iD Fresh Food plans to foray into North Indian market - September 8, 2018", source: "Business Standard", url: "https://www.business-standard.com/article/companies/premji-backed-id-fresh-food-plans-to-foray-into-north-indian-market-118090800460_1.html" },
  { title: "Better batter, better business - August 22, 2018", source: "BrandEquity", url: "https://brandequity.economictimes.indiatimes.com/news/business-of-brands/better-batter-better-business/65496156" },
  { title: "iD Fresh Food launches Independence Day campaign with a Clarion Call to unite India - 13th Aug 2018", source: "Business Standard", url: "https://www.business-standard.com/article/news-ani/id-fresh-food-launches-independence-day-campaign-with-a-clarion-call-to-unite-india-118081300972_1.html" },
  { title: "'Hi-tech' solutions for food biz - 17th July 2018", source: "Deccan Chronicle", url: "https://www.deccanchronicle.com/business/companies/170718/hi-tech-solutions-for-food-biz.html" },
  { title: "iD Fresh food's vada maker looks to be a game-changer - 6th July 2018", source: "The Times of India", url: "https://timesofindia.indiatimes.com/companies/id-fresh-foods-vada-maker-looks-to-be-a-game-changer/articleshow/64882279.cms" },
  { title: "iD Fresh Food Independence Day campaign makes a special request - 14th August 2017", source: "Brand Equity", url: "https://brandequity.economictimes.indiatimes.com/news/research/advertising/watch-id-fresh-foods-independence-day-campaign-makes-a-special-request/60057354" },
  { title: "iD Fresh special edition packs - 8th August 2017", source: "Prajavani", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/Prajavani-8-Aug-2017-Page-2.jpg" },
  { title: "iD Fresh introduces special edition packs - 8th August 2017", source: "Deccan Herald", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/Deccan-Chronicle-8-Aug-2017-Page-10.png" },
  { title: "iD Fresh Food in talks with PE funds to raise Rs100 crore - 28th June 2017", source: "Live Mint", url: "https://www.livemint.com/Companies/U1KIEjQaTya0AGQGuhUr6H/iD-Fresh-Food-in-talks-with-PE-funds-to-raise-Rs100-crore.html" },
  { title: "iD's Magic - 23rd June 2017", source: "Outlook business", url: "https://www.outlookbusiness.com/specials/the-power-of-i-2017/ids-magic-3617" },
  { title: "iD Fresh Food has built a brand out of ready-made idli-dosa batter - 22nd April 2017", source: "Forbes", url: "https://www.forbesindia.com/article/work-in-progress/id-fresh-food-has-built-a-brand-out-of-readymade-idlidosa-batter/46717/1" },
  { title: "iD Fresh Food raises $25M from Premji Invest, aims for Rs 250cr revenue in the coming year - 9th March 2017", source: "Yourstory", url: "https://yourstory.com/2017/03/id-fresh-food-premji-invest" },
  { title: "With Rs 150 crore from PremjiInvest, iD Fresh Food to enter US, UK and Singapore - 9th March 2017", source: "Economic times", url: "https://economictimes.indiatimes.com/small-biz/money/with-rs-150-crore-from-premjiinvest-id-fresh-food-to-enter-us-uk-and-singapore/articleshow/57548473.cms" },
  { title: "Ready-to-cook food firm ID gets $25m from Premji - 17th Jan 2017", source: "Times of India", url: "https://timesofindia.indiatimes.com/venture-capital/ready-to-cook-food-firm-id-gets-25m-from-premji/articleshow/56613057.cms" },
  { title: "iD Fresh Foods partners with Nilgiris Dairy Farm to produce dairy products - 5th August 2016", source: "Economic Times", url: "https://economictimes.indiatimes.com/industry/cons-products/food/id-fresh-foods-partners-with-nilgiri-dairy-farm-to-produce-dairy-products/articleshow/53549973.cms" },
  { title: "Ready to cook firm iD all set to launch new products like vada, paneer - 21st Jan 2016", source: "Economic Times", url: "https://economictimes.indiatimes.com/small-biz/startups/ready-to-cook-food-firm-id-all-set-to-launch-new-products-like-vada-paneer/articleshow/50661656.cms" },
  { title: "This farmer's son wants to be the iD of Rava Idli - 21st January 2016", source: "Economic Times", url: "https://www.idfreshfood.com/wp-content/uploads/2019/07/et-jan-16-id-fresh-food-news.pdf" },
  { title: "Emerging India Awards 2015 - 16th January 2016", source: "CNBC TV 18", url: "https://www.youtube.com/watch?v=ZpBR_6askps" },
  { title: "Triumph of sheer grit and hard work - 16th January 2016", source: "Gulf News", url: "https://www.idfreshfood.com/wp-content/uploads/2019/07/gulfnews-article.pdf" },
  { title: "How a coolie's son set up a Rs 100 crore company - 17th December 2015", source: "Logical Indian", url: "https://thelogicalindian.com/story-feed/get-inspired/how-a-coolies-son-set-up-a-rs-100-crore-company" },
  { title: "How a coolie's son set up a Rs 100 crore company - 16th December 2015", source: "Rediff.com", url: "https://www.rediff.com/getahead/report/how-a-coolies-son-set-up-a-rs-100-crore-company/20151216.htm" },
  { title: "How iD Fresh manages to supply a million idlis every day - 4th November 2015", source: "Your story", url: "https://yourstory.com/2015/11/id-fresh" },
  { title: "How a school dropout founded a multi-crore firm on idli, dosa - 2nd November 2015", source: "Deccan Herald", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/id.png" },
  { title: "Recipe for Freshness - 2nd July 2015", source: "Bengaluru Chronicle", url: "https://www.idfreshfood.com/wp-content/uploads/2019/07/02-July-2015-Deccan-Chronicle-Bengaluru-Chronicle-Page-17-iD-Fresh.pdf" },
  { title: "This market is new, poised for exponential growth - 16th May 2015", source: "Food Beverage News", url: "https://www.idfreshfood.com/wp-content/uploads/2019/07/id-fresh-food-news.pdf" },
  { title: "Journey from IT to iD - 7th May 2015", source: "Prajvani", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_3.jpg" },
  { title: "An MBA graduate into idly-dosa batter business - 13th April 2015", source: "Varatha Bharati", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_2-1.jpg" },
  { title: "Batter on a platter - 24th March 2015", source: "Deccan Herald", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_5.jpg" },
  { title: "60 seconds with a CEO - 7th March 2015", source: "Bangalore Mirror", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_4.jpg" },
  { title: "Heat and eat nourishing Whole Wheat Chapati - 27th February 2015", source: "The Hindu", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_1.jpg" },
  { title: "Taking dosas and idlies to every home - 19th January 2015", source: "The New Indian Express", url: "https://www.idfreshfood.com/wp-content/uploads/2017/10/ID-Fresh_6.jpg" },
];

// "Awards, Acknowledgement and Appreciation" — each badge graphic (laurel wreath
// icon) was matched by eye to its award title, since the source doc only lists
// award names as bullets with separate explanatory paragraphs below (not
// paired 1:1 by position) — the badge artwork itself carries the authoritative
// name + year for a couple of these.
export const AWARDS: Award[] = [
  {
    title: "Brand Leadership Award",
    year: "2018",
    badge: "/brand/media/award-brand-leadership-2018.png",
    description: "iD won an award in the 13th Employer Branding Awards endorsed by the World Federation of Marketing.",
  },
  {
    title: "Best Food Marketing Idea",
    year: "2016",
    badge: "/brand/media/award-best-food-marketing-2016.png",
    description: "Impeccable Innovations awarded the best food marketing idea for the iD TrustShop concept.",
  },
  {
    title: "Vocational Excellence Award",
    year: "2016",
    badge: "/brand/media/award-vocational-excellence-2016.png",
    description:
      "The president and the members of Rotary Club Vijaynagar, Bangalore awarded the Vocational Excellence Award 2016 to Mr. Musthafa PC and his team for excellence in Food Processing Industry.",
  },
  {
    title: "India SME Forum Award (India's Small Giants Season II)",
    year: "2016",
    badge: "/brand/media/award-india-sme-forum-2016.png",
    description:
      "India SME forum in association with Micro, Small & Medium Enterprises (MSME) Government of India, awarded iD Fresh Food as one of the top 100 SME companies in the overall evaluation of financial and non-financial parameters amongst 49023 nominations.",
  },
  {
    title: "Indiastar Award (Best Packaging Design)",
    year: "2015",
    badge: "/brand/media/award-indiastar-2015.png",
    description:
      "Indian Institute of Packaging (IIP) presented the Indiastar 2015 award to iD Fresh Food for its innovative packaging of its iD Idli and Dosa 1 kg Batter.",
  },
  {
    title: "Entrepreneur India Awards – FMCG",
    year: "2015",
    badge: "/brand/media/award-entrepreneur-india-2015.png",
    description: "This award is the 5th edition of Entrepreneur India Awards 2015, organized by US-based, Entrepreneur Magazine in media partnership with TIMES NOW.",
  },
  {
    title: "Big Bang Awards – Best Packaging Design",
    year: "2014",
    badge: "/brand/media/award-big-bang-2014.png",
    description:
      "In a market segment identified by the commodity itself more than the brands, iD's patented batter package design clearly stood out for its ergonomy, convenience and attention to aesthetic balance. Noticed & appreciated by consumers across India, the design has spawned several imitations. And indeed, we are thankful for the flattery.",
  },
  {
    title: "Indian Achievers Award",
    year: "2012",
    badge: "/brand/media/award-indian-achievers-2012.png",
    description:
      "This award was presented by Indian Economic Development and Research Association (IEDRA) on the occasion of national seminar on 'National Economic Development & Social Responsibility' held on 9th August 2012 at New Delhi.",
  },
];
