export interface DnaPillar {
  number: string;
  title: string;
  description: string;
  /** Teaser card photo, shown on the pillar card itself and again at the top of its "Read more" popup. */
  image: string;
  /** Full popup body, verbatim from the source doc's "POP UP CONTENT" section for this pillar — more detailed than the card's own teaser `description`. */
  popupBody: string[];
}

export interface EmployeeStory {
  name: string;
  team: string;
  quote: string;
  photo: string;
}

// Real "iD DNA" copy + employee stories supplied by the user (2026-09-13),
// shown on the /corporate/about-us page (titled "About Us & iD DNA").
export const DNA_INTRO =
  "At iD, we are guided by core values that prioritize honesty over shortcuts, people over profits, and real food over artificial alternatives. We foster an environment where employees are empowered to solve novel challenges every day, and every voice and opinion is valued. We are committed to building meaningful careers and place the highest priority on the well-being of our team.";

export const DNA_PILLARS: DnaPillar[] = [
  {
    number: "01",
    title: "One Workspace, Million Opportunities",
    description: "At iD, opportunities aren't just given - they're created. And the next one is waiting for you.",
    image: "/brand/corporate/dna/pillars/one-workspace.jpg",
    popupBody: [
      "Your ambitions are nurtured, your skills are sharpened, and your potential is limitless. Whether you're looking to climb the corporate ladder, pivot into new roles, or simply refine your expertise, we provide the platform to make it happen.",
      "Our Higher Education Policy empowers you to invest in your learning journey, ensuring that knowledge is never a barrier to success. With our Talent Management Architecture, you can explore career opportunities across functions and geographies, expanding your horizons both vertically and horizontally.",
      "Beyond structured education, we offer hands-on experiences through our capability-building academy, iRISE, designed to equip you with the skills to lead, innovate, and excel.",
    ],
  },
  {
    number: "02",
    title: "Where Every Perspective Counts",
    description: "At iD, we don't just embrace diversity - we elevate it into a force of boundless innovation.",
    image: "/brand/corporate/dna/pillars/every-perspective.png",
    popupBody: [
      "At iD, we don't just open doors – we build bridges. We don't just hear voices – we amplify them. This is where ideas thrive, where every perspective matters. Here, differences aren't just welcomed; they are celebrated as the heartbeat of our success.",
      "Our commitment to inclusivity is not just a promise – it's a living, breathing reality reflected in every initiative we drive. iD Scholars empowers the next generation by offering scholarships to the children of our employees, shaping futures with opportunity and hope. WoW (World of Women), our dynamic employee resource group, is a vibrant space where individuals connect over shared interests, champion gender diversity, and foster allyship that strengthens our culture.",
      "Our inclusive hiring practices go beyond checkboxes – we actively welcome talent from all walks of life, ensuring that differently-abled individuals, returning mothers, and professionals re-entering the workforce find not just jobs, but belonging.",
    ],
  },
  {
    number: "03",
    title: "From Wellness to Wealth, We've Got You Covered",
    description:
      "At iD, we don't just offer benefits - we offer choices. Whether it's wellness or wealth, we've got every aspect of your journey covered.",
    image: "/brand/corporate/dna/pillars/wellness-to-wealth.jpg",
    popupBody: [
      "Your health, well-being, and financial security are at the heart of everything we do. We believe that when you feel your best – physically, mentally, and financially – you can thrive both in and out of work. That's why we offer a thoughtfully designed benefits package that supports you at every stage of life.",
      "Our employee insurance programs provide extensive health coverage with a wide range of top-up options at incredibly low rates, giving you and your family the protection you deserve. We also believe in sharing success – our prolific wealth creation policy gives you the chance to grow wealth alongside the company.",
      "And when it comes to flexibility, we deliver. Our Flexi Benefits cover everything and give you the flexibility to design your compensation package best suited to your needs.",
      "Our Mind Mingle sessions on technology, financial planning, health, and safety ensure that you stay informed, empowered, and ready to navigate both professional and personal challenges.",
    ],
  },
  {
    number: "04",
    title: "Best Work of Your Life",
    description: "At iD, you don't just contribute – you create.",
    image: "/brand/corporate/dna/pillars/best-work.png",
    popupBody: [
      "We want every employee to feel challenged, inspired, and empowered. At iD, you'll have the chance to do the best work of your life – growing, innovating, and leaving a lasting impact.",
      "Every challenge is an opportunity, every idea a stepping stone to something bigger. Whether you're solving real-world problems or bringing your innovations to life, you don't just contribute – you create.",
      "Our culture is built on transparency, support, and celebration. Wins—big or small—are never overlooked, with shoutouts, awards, and recognition ensuring every achievement gets the spotlight it deserves.",
    ],
  },
];

// "Leadership Principles: The Key Ingredients to Success at iD" — 6 principles,
// matched by hand to the 6 supplied line icons (a heart for "Leading with
// Heart", a gear for "Operational Mastery", etc — the source only labels the
// icon files generically, so this pairing is a judgment call, not given data).
export const LEADERSHIP_PRINCIPLES: { title: string; icon: string }[] = [
  { title: "Creating the Future", icon: "/brand/corporate/dna/icons/principle-1.png" },
  { title: "Relentless Growth Mindset", icon: "/brand/corporate/dna/icons/principle-2.png" },
  { title: "Leading with Heart", icon: "/brand/corporate/dna/icons/principle-3.png" },
  { title: "Customer Mindset", icon: "/brand/corporate/dna/icons/principle-5.png" },
  { title: "Company First", icon: "/brand/corporate/dna/icons/principle-6.png" },
  { title: "Operational Mastery", icon: "/brand/corporate/dna/icons/principle-4.png" },
];

// "Real Faces, Real Stories" — real employee quotes + real photos, verbatim from
// the supplied content. Every name below has a matching photo file.
export const EMPLOYEE_STORIES: EmployeeStory[] = [
  {
    name: "Jaspal Khalsa",
    team: "Marketing Team",
    quote:
      "When I joined iD, I was just looking for a job. I didn't expect to find mentors who'd push me to think bigger and do better. Today, I lead a team I once dreamed of being part of.",
    photo: "/brand/corporate/dna/real-faces/jaspal-khalsa.png",
  },
  {
    name: "Chandana Jois",
    team: "NPD Team",
    quote:
      "At iD, my ideas aren't just heard — they're actually implemented. It's rare to find a workplace where your voice can shape the direction of a brand.",
    photo: "/brand/corporate/dna/real-faces/chandana-jois.png",
  },
  {
    name: "R Ganeshan",
    team: "IT Team",
    quote:
      "One of the things I love about iD is that iD doesn't expect us to choose between life and work. The work culture here gives me the freedom to be productive while also being present for my family. I feel valued not just for what I do, but for who I am — and that makes all the difference.",
    photo: "/brand/corporate/dna/real-faces/r-ganeshan.png",
  },
  {
    name: "Dashrath Poojari",
    team: "Sales & Distribution Team",
    quote:
      "The S&D Academy was a game changer for me. It helped me understand not just my role, but the business as a whole.",
    photo: "/brand/corporate/dna/real-faces/dashrath-poojari.png",
  },
  {
    name: "Abdul Nisar",
    team: "Manufacturing Team",
    quote:
      "ESOPs sounded complicated when I joined. Now, they've become my family's safety net — it feels great to grow with the company.",
    photo: "/brand/corporate/dna/real-faces/abdul-nisar.png",
  },
  {
    name: "Shameel NK",
    team: "Manufacturing",
    quote:
      "I've worked in a lot of kitchens, but none like this. Clean, transparent, and rooted in values. We make food I'm proud to feed my own kids.",
    photo: "/brand/corporate/dna/real-faces/shameel-nk.png",
  },
  {
    name: "Sandesh SR",
    team: "HR Team",
    quote:
      "Getting a shoutout for a small win made a huge difference to my confidence. That recognition gave me the courage to aim higher.",
    photo: "/brand/corporate/dna/real-faces/sandesh-sr.png",
  },
  {
    name: "Abdussalam M",
    team: "Sales & Distribution Team",
    quote:
      "The iD Scholars program helped my son get into the school he wanted. As a parent, that kind of support is everything. iD genuinely cares — not just about profit, but about people. During tough times, they stood by us.",
    photo: "/brand/corporate/dna/real-faces/abdussalam-m.png",
  },
  {
    name: "Deepika Das",
    team: "Marketing Team",
    quote: "After ten years here, it still feels fresh. The people, the culture, the growth — it all keeps evolving. And I get to evolve with it.",
    photo: "/brand/corporate/dna/real-faces/deepika-das.png",
  },
  {
    name: "Zeeshan Haris",
    team: "Sales & Distribution, Middle East Team",
    quote:
      "At iD, growth isn't just a buzzword. I started by managing one area, and today, I lead the sales for the entire UAE region. The trust, autonomy, and speed of growth here are unmatched.",
    photo: "/brand/corporate/dna/real-faces/zeeshan-haris.png",
  },
  {
    name: "Manesh UP",
    team: "Procurement Team",
    quote:
      "When you work at iD in Procurement, you're not just sourcing ingredients, you're sourcing trust. Being part of the team that ensures only the best, cleanest, and most authentic ingredients go into our products is something I take great pride in.",
    photo: "/brand/corporate/dna/real-faces/manesh-up.png",
  },
  {
    name: "Niyas K",
    team: "Finance Team",
    quote:
      "I joined as an Assistant Manager in Accounts Receivable, and today, I lead the function as a Manager. This kind of growth is possible because iD actively invests in internal talent.",
    photo: "/brand/corporate/dna/real-faces/niyas-k.png",
  },
  {
    name: "Muneer P",
    team: "Finance Team",
    quote:
      "At iD, I'm able to show up as a leader at work and a father at home. The flexibility here is real. It's a culture that respects your personal life as much as your professional one.",
    photo: "/brand/corporate/dna/real-faces/muneer-p.png",
  },
  {
    name: "Niraja Mulye",
    team: "HR Team",
    quote:
      "I joined iD because I wanted to be part of a brand that truly believes in clean, chemical-free food. What surprised me was how inclusive the workplace was. Here, every voice matters.",
    photo: "/brand/corporate/dna/real-faces/niraja-mulye.png",
  },
  {
    name: "Nithin Philip",
    team: "Sales & Distribution, Middle East Team",
    quote:
      "At iD, growth has no boundaries. I've moved across functions - from leading South India to heading Trade Marketing, then E-commerce, and now, Sales for the entire GCC.",
    photo: "/brand/corporate/dna/real-faces/nithin-philip.png",
  },
  {
    name: "Amrita Lama",
    team: "Manufacturing Team",
    quote:
      "At iD, people notice your work. Even in my first week, my supervisor thanked me for finishing a batch ahead of time. It's small, but it shows they care — and that makes me want to give my best every day.",
    photo: "/brand/corporate/dna/real-faces/amrita-lama.png",
  },
];
