export type SimpleLink = {
  label: string;
  href: string;
};

export type NestedCategory = {
  label: string;
  href?: string;
  items?: SimpleLink[];
};

export type PromoCard = {
  variant: "photo" | "gradient";
  image?: string;
  imageAlt?: string;
  heading: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
};

export type NavItem =
  | { type: "link"; label: string; href: string; active?: boolean; arrow?: "up" | "down" | "none" }
  | { type: "simple"; label: string; href: string; items: SimpleLink[]; promo?: PromoCard }
  | { type: "nested"; label: string; href: string; categories: NestedCategory[]; promo?: PromoCard };

const promoPlaceholderImage = "/images/header-promo-placeholder.jpg";

export const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/", active: true },
  { type: "link", label: "GenZGalaxy", href: "/GenZGalaxy" },
  {
    type: "simple",
    label: "NeuroLXP 2.1",
    href: "/neurolxp-2-1",
    items: [
      { label: "Digital Literacy", href: "/DigitalLiteracy" },
      { label: "Information Literacy", href: "/information-literacy" },
      { label: "Media Literacy", href: "/MediaLiteracy" },
      { label: "Financial Literacy", href: "/FinancialLitracy" },
      { label: "3Rs8Cs3Ms Literacy", href: "/literacy3rs8cs3ms" },
    ],
    promo: {
      variant: "photo",
      image: promoPlaceholderImage,
      imageAlt: "Learner exploring NeuroLXP 2.1 courses",
      heading: "Build Skills! Shape Your Future",
      buttonLabel: "Explore Courses",
      buttonHref: "#",
    },
  },
  {
    type: "simple",
    label: "Neuro Labs",
    href: "/neuro-labs",
    items: [
      { label: "Coding Lab", href: "/CodingLabs" },
      { label: "Coding Bootcamps", href: "/CodingBootCamps" },
      { label: "Coding Challenges", href: "/CodingChallenge" },
      { label: "Coding Resources", href: "/CodingResources" },
    ],
    promo: {
      variant: "gradient",
      heading: "One Intelligent Platform For Smarter Learning",
      buttonLabel: "Explore Platform",
      buttonHref: "#",
    },
  },
  {
    type: "nested",
    label: "Our Customers",
    href: "/our-customers",
    categories: [
      {
        label: "Industries We Serve",
        items: [
          { label: "University and College", href: "/University" },
          { label: "BFSI", href: "/bfsi" },
          { label: "Retail And Healthcare", href: "/retail-healthcare" },
          { label: "Government Institutions", href: "/government" },
          { label: "Nonprofit Organizations", href: "/nonprofit" },
        ],
      },
      {
        label: "Solution For",
        items: [
          { label: "Corporate Training", href: "/corporate-training" },
          { label: "E-Learning", href: "/E-Learning" },
          { label: "Training Management", href: "/training-management" },
        ],
      },
    ],
    promo: {
      variant: "photo",
      image: promoPlaceholderImage,
      imageAlt: "Team collaborating using NeuroLXP gamification",
      heading: "Make Learning More Engaging",
      buttonLabel: "Explore Gamification",
      buttonHref: "#",
    },
  },
  {
    type: "nested",
    label: "Features",
    href: "/features",
    categories: [
      {
        label: "Learning",
        items: [
          { label: "Personalized Learning Paths", href: "/personalized-learning-paths" },
          { label: "Goals and Tracking", href: "/goal-setting-planning" },
          { label: "Personalization", href: "/personalization" },
        ],
      },
      {
        label: "Augmentation",
        items: [
          { label: "Gamified Learning", href: "/gamification" },
          { label: "Content Management", href: "/content-curation" },
          { label: "Learning Community", href: "/social-learning" },
        ],
      },
      {
        label: "Learning Eco System",
        items: [
          { label: "Assessments", href: "/assessments" },
          { label: "Analytics & Reporting", href: "/analytics-reporting" },
          { label: "Career Pathways & Skilling", href: "/career-paths" },
          { label: "Compliance & Security", href: "/compliances" },
        ],
      },
      {
        label: "Add On Modules",
        items: [
          { label: "Accessibility & Inclusivity", href: "/accessibility-inclusivity" },
          { label: "Mobile Learning", href: "/mobile-learning" },
          { label: "Interconnectivity", href: "/interconnectivity" },
        ],
      },
    ],
    promo: {
      variant: "photo",
      image: promoPlaceholderImage,
      imageAlt: "Learner using NeuroLXP personalization features",
      heading: "Learn! Grow! Succeed!",
      description: "Discover how NeuroLXP transforms learning and training",
      buttonLabel: "Explore Personalization",
      buttonHref: "#",
    },
  },
  {
    type: "nested",
    label: "Resources",
    href: "/resources",
    categories: [
      {
        label: "Use Cases",
        items: [
          { label: "Blended Learning", href: "/resources/use-cases/blended-learning" },
          { label: "Customer Training", href: "/customer-training" },
          { label: "Employee Induction", href: "/resources/use-cases/employee-induction" },
          { label: "Standards Training", href: "/resources/use-cases/standards-training" },
          { label: "Extended Enterprise", href: "/resources/use-cases/extended-enterprise" },
        ],
      },
      { label: "Media Presence", href: "/resources/media-presence" },
      { label: "White Papers", href: "/white-paper" },
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Help and Support", href: "/resources/help-support-faqs" },
    ],
    promo: {
      variant: "photo",
      image: promoPlaceholderImage,
      imageAlt: "NeuroLXP platform demo",
      heading: "See NeuroLXP in Action",
      buttonLabel: "Book a Demo",
      buttonHref: "#",
    },
  },
];

export const footerAboutLinks: SimpleLink[] = [
  { label: "Our Mission", href: "/about/our-mission" },
  { label: "Our Vision", href: "/about/our-vision" },
  { label: "Our Story", href: "/about/our-story" },
  { label: "Our Team", href: "/about/our-team" },
];

export const footerQuickLinks: SimpleLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Terms of Declaration", href: "/terms-of-declaration" },
];

export const footerNeuroLxpLinks: SimpleLink[] = [
  { label: "Our Customers", href: "/our-customers" },
  { label: "Smart Learning Paths", href: "/features/learning-paths" },
  { label: "Smart Content Creation", href: "/features/content-curation" },
];




// export type SimpleLink = {
//   label: string;
//   href: string;
// };

// export type NestedCategory = {
//   label: string;
//   href?: string;
//   items?: SimpleLink[];
// };

// export type NavItem =
//   | { type: "link"; label: string; href: string; active?: boolean; arrow?: "up" | "down" | "none" }
//   | { type: "simple"; label: string; href: string; items: SimpleLink[] }
//   | { type: "nested"; label: string; href: string; categories: NestedCategory[] };

// export const navItems: NavItem[] = [
//   { type: "link", label: "Home", href: "/", active: true },
//   { type: "link", label: "GenZGalaxy", href: "/GenZGalaxy" },
//   {
//     type: "simple",
//     label: "NeuroLXP 2.1",
//     href: "/neurolxp-2-1",
//     items: [
//       { label: "Digital Literacy", href: "/DigitalLiteracy" },
//       { label: "Information Literacy", href: "/information-literacy" },
//       { label: "Media Literacy", href: "/MediaLiteracy" },
//       { label: "Financial Literacy", href: "/FinancialLitracy" },
//       { label: "3Rs8Cs3Ms Literacy", href: "/literacy3rs8cs3ms" },
//     ],
//   },
//   {
//     type: "simple",
//     label: "Neuro Labs",
//     href: "/neuro-labs",
//     items: [
//       { label: "Coding Labs", href: "/CodingLabs" },
//       { label: "Coding Bootcamps", href: "/CodingBootCamps" },
//       { label: "Coding Challenges", href: "/CodingChallenge" },
//       { label: "Coding Resources", href: "/CodingResources" },
//     ],
//   },
//   {
//     type: "nested",
//     label: "Our Customers",
//     href: "/our-customers",
//     categories: [
//       {
//         label: "Industries we Serve",
//         items: [
//           { label: "Higher Education", href: "/our-customers/higher-education" },
//           { label: "BFSI", href: "/bfsi" },
//           { label: "Retail & Healthcare", href: "/our-customers/retail-healthcare" },
//           { label: "States", href: "/our-customers/states" },
//           { label: "NonProfit", href: "/our-customers/nonprofit" },
//         ],
//       },
//       {
//         label: "Solutions for",
//         items: [
//           { label: "Corporate Training", href: "/our-customers/corporate-training" },
//           { label: "E-Learning", href: "/our-customers/e-learning" },
//           { label: "University", href: "/our-customers/University" },
//           { label: "Government", href: "/our-customers/government" },
//           { label: "Training Management", href: "/our-customers/training-management" },
//         ],
//       },
//     ],
//   },
//   {
//     type: "nested",
//     label: "Features",
//     href: "/features",
//     categories: [
//       {
//         label: "Learning",
//         items: [
//           { label: "Learning Style Analysis", href: "/features/learning-style-analysis" },
//           { label: "Goal Setting & Planning", href: "/features/goal-setting-planning" },
//           // { label: "Learning Paths", href: "/features/learning-paths" },
//           { label: "Personalization", href: "/personalized-learning-paths" },
//           { label: "Progress Tracking", href: "/features/progress-tracking" },
//         ],
//       },
//       {
//         label: "Augmentation",
//         items: [
//           { label: "Gamification", href: "/features/gamification" },
//           { label: "Interactivities", href: "/features/interactivities" },
//           { label: "Social Learning", href: "/features/social-learning" },
//           { label: "Content Curation", href: "/features/content-curation" },
//           { label: "Content Formats", href: "/features/content-formats" },
//         ],
//       },
//       {
//         label: "Learning Eco-System",
//         items: [
//           { label: "Assessments", href: "/features/assessments" },
//           { label: "Analytics & Reporting", href: "/features/analytics-reporting" },
//           { label: "Career Paths", href: "/features/career-paths" },
//           { label: "Career & Skills Development", href: "/features/career-skills-development" },
//           { label: "Compliances", href: "/features/compliances" },
//         ],
//       },
//       {
//         label: "Add-On Modules",
//         items: [
//           { label: "Content Creation & Management", href: "/features/content-creation-management" },
//           { label: "User Support & Community", href: "/features/user-support-community" },
//           { label: "Security & Compliances", href: "/features/security-compliances" },
//           { label: "Accessibility & Inclusivity", href: "/features/accessibility-inclusivity" },
//           { label: "Mobile Learning", href: "/features/mobile-learning" },
//           { label: "Interconnectivity", href: "/features/interconnectivity" },
//         ],
//       },
//     ],
//   },
//   {
//     type: "nested",
//     label: "Resources",
//     href: "/resources",
//     categories: [
//       {
//         label: "Use Cases",
//         items: [
//           { label: "Blended Learning", href: "/resources/use-cases/blended-learning" },
//           { label: "Customer Training", href: "/resources/use-cases/customer-training" },
//           { label: "Employee Induction", href: "/resources/use-cases/employee-induction" },
//           { label: "Standards Training", href: "/resources/use-cases/standards-training" },
//           { label: "Extended Enterprise", href: "/resources/use-cases/extended-enterprise" },
//         ],
//       },
//       { label: "Media Presence", href: "/resources/media-presence" },
//       { label: "White Papers", href: "/resources/white-papers" },
//       { label: "Blogs", href: "/resources/blogs" },
//       { label: "Help, Support & FAQs", href: "/resources/help-support-faqs" },
//     ],
//   },
// ];

// export const footerAboutLinks: SimpleLink[] = [
//   { label: "Our Mission", href: "/about/our-mission" },
//   { label: "Our Vision", href: "/about/our-vision" },
//   { label: "Our Story", href: "/about/our-story" },
//   { label: "Our Team", href: "/about/our-team" },
// ];

// export const footerQuickLinks: SimpleLink[] = [
//   { label: "Privacy Policy", href: "/privacy-policy" },
//   { label: "Terms of use", href: "/terms-of-use" },
//   { label: "Terms of Declaration", href: "/terms-of-declaration" },
// ];

// export const footerNeuroLxpLinks: SimpleLink[] = [
//   { label: "Our Customers", href: "/our-customers" },
//   { label: "Smart Learning Paths", href: "/features/learning-paths" },
//   { label: "Smart Content Creation", href: "/features/content-curation" },
// ];