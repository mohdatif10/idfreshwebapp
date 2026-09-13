export interface DnaPillar {
  number: string;
  title: string;
  description: string;
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
    description:
      "At iD, opportunities aren't just given - they're created. Your ambitions are nurtured, your skills are sharpened, and your potential is limitless. Our Higher Education Policy empowers you to invest in your learning journey, our Talent Management Architecture lets you explore roles across functions and geographies, and our capability-building academy, iRISE, equips you to lead, innovate, and excel.",
  },
  {
    number: "02",
    title: "Where Every Perspective Counts",
    description:
      "At iD, we don't just embrace diversity - we elevate it into a force of boundless innovation. iD Scholars offers scholarships to employees' children, WoW (World of Women) champions gender diversity and allyship, and our inclusive hiring practices welcome talent from all walks of life, including differently-abled individuals, returning mothers, and professionals re-entering the workforce.",
  },
  {
    number: "03",
    title: "From Wellness to Wealth, We've Got You Covered",
    description:
      "At iD, we don't just offer benefits - we offer choices. Our employee insurance programs provide extensive health coverage with top-up options, our wealth creation policy lets employees grow wealth alongside the company, our Flexi Benefits build a compensation package suited to individual needs, and our Mind Mingle sessions keep employees informed on technology, financial planning, health and safety.",
  },
  {
    number: "04",
    title: "Best Work of Your Life",
    description:
      "At iD, you don't just contribute - you create. We want every employee to feel challenged, inspired, and empowered to do the best work of their life. Our culture is built on transparency, support, and celebration - wins, big or small, are recognised with shoutouts, awards, and recognition.",
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
