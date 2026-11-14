export const business = {
  name: "Woodlands Handyman",
  phoneDisplay: "786-327-8923",
  phoneTel: "7863278923",
  email: "jd.ed.dom@gmail.com",
  addressLine: "The Woodlands, TX 77380",
  locality: "The Woodlands",
  region: "TX",
  postalCode: "77380",
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  title: "Your Trusted Handyman Service in The Woodlands, TX",
  lead: "From power washing and fence repairs to ceiling fan replacements — fast, reliable handyman solutions for every corner of your home.",
  serving:
    "Proudly serving Cochran's Crossing, Panther Creek, Sterling Ridge, Alden Bridge, and beyond.",
  estimate: "Get Your Free Estimate",
  call: "Call Now",
  image: "/images/deck-repair.jpg",
  imageAlt: "Wooden deck repair and stain in The Woodlands",
} as const;

export const about = {
  id: "about",
  title: "Local Experts You Can Trust",
  paragraphs: [
    "Based right here in The Woodlands, TX, we provide fast, affordable, and professional handyman and home improvement services. Whether you need a ceiling fan replaced, your fence repaired, or your deck cleaned and stained, our experienced team is here to help.",
    "We take pride in quality workmanship, honest pricing, and friendly customer service. No job is too small — and every home deserves professional care.",
  ],
  satisfaction: "100% Satisfaction",
} as const;

export const servicesIntro = {
  id: "services",
  title: "Our Handyman Services Include:",
  lead: "We offer comprehensive home improvement and maintenance services to keep your property in top condition.",
} as const;

export const services = [
  {
    id: "handyman",
    title: "General Handyman Work",
    tasks: [
      "Ceiling fan installation",
      "light fixture replacement",
      "door hardware changes",
      "faucet installation",
    ],
    image: null,
    imageAlt: null,
  },
  {
    id: "power-washing",
    title: "Power Washing Services",
    tasks: [
      "House siding cleaning",
      "driveway pressure washing",
      "patio cleaning",
      "fence washing",
      "brick cleaning",
    ],
    image: "/images/power-washing.jpg",
    imageAlt: "Power Washing Services",
  },
  {
    id: "fence",
    title: "Privacy Fence Services",
    tasks: [
      "New privacy fence installations",
      "fence repairs",
      "fence staining and sealing",
    ],
    image: "/images/privacy-fence.jpg",
    imageAlt: "Privacy Fence Services",
  },
  {
    id: "deck",
    title: "Deck Services",
    tasks: [
      "Deck cleaning",
      "deck staining",
      "deck repairs",
      "deck replacements",
      "composite deck care",
    ],
    image: "/images/deck-repair.jpg",
    imageAlt: "Deck Services",
  },
] as const;

export const why = {
  id: "why-choose-us",
  title: "Why Homeowners in The Woodlands Choose Us:",
  points: [
    "Locally owned and operated — based right in The Woodlands",
    "Fully licensed and insured for your protection",
    "Fast, friendly, professional service",
    "Free estimates with transparent pricing",
    "High-quality workmanship and attention to detail",
    "Serving all villages: Cochran's Crossing, Sterling Ridge, Panther Creek, Alden Bridge, and more",
  ],
} as const;

export const testimonialsIntro = {
  id: "testimonials",
  title: "What Our Customers Say",
  lead: "Don't just take our word for it. Here's what homeowners in The Woodlands are saying about our services.",
} as const;

export const testimonials = [
  {
    name: "Jessica L.",
    location: "Sterling Ridge",
    rating: 5,
    text: "Fast, reliable, and affordable! We had our patio deck cleaned and stained and it looks brand new. Highly recommend to anyone in The Woodlands!",
  },
  {
    name: "Mark R.",
    location: "Creekside Park",
    rating: 5,
    text: "Super professional service. They repaired our fence after a storm and even stained it to match the rest perfectly. Great local handyman!",
  },
  {
    name: "Sarah T.",
    location: "Alden Bridge",
    rating: 5,
    text: "We had our driveway power washed and the results were amazing! The team was punctual, professional, and did an excellent job. Will definitely use their services again.",
  },
] as const;

export const areas = {
  id: "service-areas",
  title: "Proudly Serving All of The Woodlands",
  lead: "Our handyman services are available throughout The Woodlands and surrounding areas. No matter which village you call home, we're here to help with all your home improvement needs.",
  villages: [
    "Cochran's Crossing",
    "Panther Creek",
    "Alden Bridge",
    "Sterling Ridge",
    "Creekside Park",
    "Grogan's Mill",
    "College Park",
    "Indian Springs",
  ],
  nearby:
    "We also serve nearby areas like Shenandoah, Spring Trails, and parts of North Houston.",
  place: "The Woodlands, TX",
  placeNote: "Your local handyman service",
  image: "/images/woodlands-river.jpg",
  imageAlt: "The Woodlands, Texas neighborhood",
} as const;

export const faqsIntro = {
  id: "faqs",
  title: "Frequently Asked Questions",
  lead: "Find answers to common questions about our handyman, power washing, fence, and deck services in The Woodlands.",
} as const;

export const faqCategories = [
  {
    id: "handyman",
    title: "General Handyman Services",
    faqs: [
      {
        question: "How much does a handyman service cost in The Woodlands, TX?",
        answer:
          "Handyman services in The Woodlands typically range from $75 to $150 per hour, depending on the complexity of the job. Smaller tasks like replacing door knobs or faucets may be priced per project. We offer free estimates so you always know what to expect before we start.",
      },
      {
        question: "What types of handyman services do you offer in The Woodlands?",
        answer:
          "We handle a wide range of projects including ceiling fan installation, light fixture replacement, door knob and lock changes, faucet installations, small drywall repairs, and more. No job is too small — if it needs fixing, we're here to help.",
      },
      {
        question: "Can you replace ceiling fans and light fixtures safely?",
        answer:
          "Absolutely! Our experienced handyman team can safely remove old ceiling fans or light fixtures and install new ones quickly and professionally. We make sure all wiring connections are secure and up to code for your peace of mind.",
      },
      {
        question: "Do you offer same-day handyman services in The Woodlands?",
        answer:
          "When possible, yes! We prioritize fast, same-day handyman service for smaller tasks like fixture replacements, door hardware repairs, and minor plumbing. Contact us early in the day for best availability.",
      },
    ],
  },
  {
    id: "power-washing",
    title: "Power Washing Services",
    faqs: [
      {
        question: "How much does power washing cost in The Woodlands, TX?",
        answer:
          "The average cost for power washing services in The Woodlands ranges from $150 to $500, depending on the size of the area and surface type. We provide power washing for homes, driveways, patios, fences, and brick walls. Contact us for a free, custom estimate based on your needs.",
      },
      {
        question: "What surfaces can you safely power wash?",
        answer:
          "We specialize in safe and effective power washing for a variety of surfaces, including house siding, driveways, patios, fences, decks, sidewalks, and brick exteriors. For delicate materials, we offer soft washing to prevent surface damage while still delivering a deep clean.",
      },
      {
        question: "Is there a difference between pressure washing and soft washing?",
        answer:
          "Yes! Pressure washing uses high pressure and is best for hard surfaces like driveways, sidewalks, and brick walls. Soft washing uses lower pressure combined with eco-friendly cleaners, ideal for siding, wooden fences, and decks. We select the right method based on your property's needs.",
      },
      {
        question: "Can you remove mold, algae, and mildew from my siding, fence, or brick walls?",
        answer:
          "Absolutely! Our power washing service removes mold, algae, mildew, and dirt from house siding, fences, patios, driveways, and brick surfaces. We help restore the original appearance and extend the lifespan of your outdoor structures.",
      },
    ],
  },
  {
    id: "fence",
    title: "Privacy Fence Services",
    faqs: [
      {
        question: "How much does it cost to install a privacy fence in The Woodlands, TX?",
        answer:
          "The cost to install a privacy fence in The Woodlands typically ranges between $25 to $45 per linear foot, depending on the materials used and the size of your yard. We provide free estimates on all privacy fence installations, customized for your property.",
      },
      {
        question: "Do you repair existing fences in The Woodlands?",
        answer:
          "Yes! We offer professional fence repair services in The Woodlands, including fixing broken fence panels, replacing damaged posts, and reinforcing sagging fences. Whether your fence needs minor repairs or major restoration, we can help.",
      },
      {
        question: "Can you stain and seal wooden fences?",
        answer:
          "Absolutely. We specialize in fence staining and sealing services in The Woodlands to protect your wooden fence from weather, UV rays, and moisture damage. Staining and sealing your fence not only extends its life but also enhances your home's curb appeal.",
      },
      {
        question: "How often should I stain or seal my wood fence?",
        answer:
          "In The Woodlands' humid climate, we recommend staining or sealing your wooden fence every 2 to 3 years. Regular maintenance protects your investment from rotting, fading, and cracking caused by Texas sun and rain.",
      },
    ],
  },
  {
    id: "deck",
    title: "Deck Services",
    faqs: [
      {
        question: "How much does deck cleaning and staining cost in The Woodlands, TX?",
        answer:
          "Professional deck cleaning and staining in The Woodlands typically costs between $2 to $4 per square foot, depending on the condition and size of your deck. We offer free, detailed quotes for all deck restoration services to help you protect and beautify your outdoor space.",
      },
      {
        question: "What's the best way to clean a wood deck in humid areas like The Woodlands?",
        answer:
          "In humid environments like The Woodlands, power washing combined with gentle cleaners is the safest method for deck cleaning. We remove mold, mildew, algae, and dirt buildup without damaging the wood, preparing it for staining or sealing.",
      },
      {
        question: "Do you offer deck staining and sealing services?",
        answer:
          "Yes! We specialize in deck staining and sealing services in The Woodlands to protect your wood deck from harsh sun, humidity, and heavy rain. Proper staining enhances your deck's natural beauty and extends its life by preventing rot and UV damage.",
      },
      {
        question: "Do you repair damaged decks?",
        answer:
          "Yes, we provide deck repair services including replacing broken boards, securing loose railings, fixing structural issues, and removing rotten wood. If your deck in The Woodlands needs partial repairs or full replacement, we can recommend the best solution.",
      },
    ],
  },
] as const;

export const contactCopy = {
  id: "contact",
  title: "Request a Consultation",
  lead: "Fill out the form below to schedule your free estimate or ask us any questions about our services in The Woodlands.",
  phoneLabel: "Phone",
  emailLabel: "Email",
  addressLabel: "Address",
  nameLabel: "Name",
  serviceLabel: "Type of Service Needed",
  servicePlaceholder: "Select a service",
  messageLabel: "Message",
  privacy: "We respect your privacy. Your information is never shared.",
  browserOnly:
    "This form runs in your browser only. It does not send your message to Woodlands Handyman. Call or email for a free estimate.",
  submit: "Request Your Free Estimate",
  successTitle: "Nothing was sent",
  successBody:
    "This page kept your note in the browser and did not deliver it. Call 786-327-8923 or email jd.ed.dom@gmail.com to reach Woodlands Handyman.",
  reset: "Send another message",
  errors: {
    name: "Name is required",
    phoneRequired: "Phone number is required",
    phoneInvalid: "Please enter a valid phone number",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    service: "Please select a service",
  },
} as const;

export const serviceOptions = [
  { value: "handyman", label: "General Handyman Work" },
  { value: "power-washing", label: "Power Washing" },
  { value: "fence", label: "Privacy Fence Services" },
  { value: "deck", label: "Deck Services" },
  { value: "other", label: "Other" },
] as const;

export const closing = {
  title: "Ready to Get Started?",
  lead: "Trust the local experts for all your handyman and home improvement needs in The Woodlands, TX.",
  estimate: "Get Your Free Estimate",
} as const;

export const footer = {
  blurb:
    "Your trusted handyman service in The Woodlands, Texas. Quality work, fair prices, and professional service.",
  servicesTitle: "Our Services",
  services: [
    { id: "service-handyman", label: "General Handyman Services" },
    { id: "service-power-washing", label: "Power Washing Services" },
    { id: "service-fence", label: "Privacy Fence Services" },
    { id: "service-deck", label: "Deck Services" },
  ],
  linksTitle: "Quick Links",
  links: [
    { id: "about", label: "About Us" },
    { id: "testimonials", label: "Testimonials" },
    { id: "service-areas", label: "Service Areas" },
    { id: "faqs", label: "FAQs" },
  ],
  contactTitle: "Contact Us",
  rightsName: "Woodlands Handyman Services",
} as const;
