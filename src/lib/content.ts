// Shared placeholder content for Summit STEM Tutoring.
// Swap in real copy, prices, and links before launch.

export const brand = "Summit STEM Tutoring";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/workshops", label: "Workshops" },
  { href: "/get-tutor", label: "Get a Tutor" },
  { href: "/resources", label: "Resources" },
  { href: "/become-tutor", label: "Become a Tutor" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/bursaries", label: "Bursaries" },
  { href: "/contact", label: "Contact" },
] as const;

export const subjects = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "Computer Science / IT",
  "Engineering Graphics & Design",
  "Mathematical Literacy",
];

export const stats = [
  { value: "94%", label: "students improved by 1+ grade" },
  { value: "500+", label: "STEM learners tutored" },
  { value: "38", label: "matric distinctions, 2025" },
  { value: "6", label: "STEM subjects covered" },
];

export const howItWorks = [
  {
    step: "01",
    title: "Tell us where you're stuck",
    body: "Grade, subject, and the topics costing you marks.",
  },
  {
    step: "02",
    title: "Get matched",
    body: "A tutor who's aced that subject and taught it before.",
  },
  {
    step: "03",
    title: "Book sessions",
    body: "1-on-1 or small-group, online or in person, weekly or exam-crunch.",
  },
];

export const workshops = [
  {
    title: "Matric Physics: Mechanics Bootcamp",
    subject: "Physical Sciences",
    date: "12 Jul, 09:00",
    level: "Grade 12",
    price: "R250",
    spots: "6 spots left",
  },
  {
    title: "Calculus Problem-Solving Clinic",
    subject: "Mathematics",
    date: "15 Jul, 17:00",
    level: "Grade 11–12",
    price: "R200",
    spots: "12 spots left",
  },
  {
    title: "Organic Chemistry Crash Course",
    subject: "Physical Sciences",
    date: "19 Jul, 10:00",
    level: "Grade 12",
    price: "R250",
    spots: "9 spots left",
  },
  {
    title: "Intro to Python for Grade 10s",
    subject: "Computer Science",
    date: "22 Jul, 16:00",
    level: "Grade 10",
    price: "R180",
    spots: "15 spots left",
  },
  {
    title: "Genetics & Evolution Deep Dive",
    subject: "Life Sciences",
    date: "26 Jul, 09:00",
    level: "Grade 12",
    price: "R220",
    spots: "4 spots left",
  },
  {
    title: "Trig Identities: Paper 2 Prep",
    subject: "Mathematics",
    date: "29 Jul, 17:00",
    level: "Grade 12",
    price: "R200",
    spots: "10 spots left",
  },
];

export const resources = [
  {
    type: "Recording",
    title: "Grade 12 Physics: Full Waves & Sound Series",
    subject: "Physical Sciences",
    price: "R150",
  },
  {
    type: "Recording",
    title: "Calculus Paper 1 Walkthrough (2025 exam)",
    subject: "Mathematics",
    price: "R90",
  },
  {
    type: "Notes",
    title: "Life Sciences Grade 12 Summary Pack",
    subject: "Life Sciences",
    price: "R60",
  },
  {
    type: "Past Paper",
    title: "Mathematics Nov 2025 Paper 2 + Memo",
    subject: "Mathematics",
    price: "Free",
  },
  {
    type: "Recording",
    title: "Intro to Algorithms Workshop Replay",
    subject: "Computer Science",
    price: "R110",
  },
  {
    type: "Notes",
    title: "Organic Chemistry Reactions Cheat Sheet",
    subject: "Physical Sciences",
    price: "R45",
  },
];

export const faqs = [
  {
    q: "Which grades and subjects do you cover?",
    a: "Grades 8–12, focused on Mathematics, Physical Sciences, Life Sciences, Computer Science/IT, Engineering Graphics & Design, and Maths Literacy.",
  },
  {
    q: "Are sessions online or in person?",
    a: "Both — pick what works. Most learners mix weekly online sessions with in-person workshops before exams.",
  },
  {
    q: "How are tutors selected?",
    a: "Every tutor is vetted for subject mastery and passes a teaching demo before working with students.",
  },
  {
    q: "Can I try one session before committing?",
    a: "Yes — first sessions are booked individually, no package required.",
  },
  {
    q: "Do you help with bursary or scholarship applications?",
    a: "We keep a running list of STEM bursaries for Grade 12s and can point you to application resources — see the Bursaries page.",
  },
];

export const bursaries = [
  {
    name: "Sasol Foundation Bursary",
    field: "Engineering, Science, IT",
    note: "For Grade 12s applying with Grade 11 results; strong Maths & Physical Sciences required.",
    link: "sasolbursaries.com",
  },
  {
    name: "Investec High School Bursary",
    field: "Maths, Accounting & Science",
    note: "For learners entering Grade 10–12 with strong academic potential.",
    link: "investec.com",
  },
  {
    name: "SANRAL High School Scholarship",
    field: "Engineering pathway",
    note: "Merit and financial-need based, for Grade 8–12 learners.",
    link: "sanral.co.za",
  },
  {
    name: "Allan Gray Orbis Foundation Scholarship",
    field: "Commerce, Science & Engineering",
    note: "For Grade 12s with strong results and entrepreneurial drive.",
    link: "allangrayorbis.org",
  },
  {
    name: "MTN Bursary",
    field: "STEM (Engineering, CS, IT, Maths)",
    note: "Covers tuition, accommodation, books and a living allowance.",
    link: "mtn.com",
  },
  {
    name: "NRF Undergraduate Scholarships",
    field: "Science & Engineering",
    note: "Some undergraduate funding for science-track applicants.",
    link: "nrf.ac.za",
  },
];

export const bursariesDisclaimer =
  "Deadlines and requirements change every year — always confirm details on the provider's own site before applying.";

export const tutorRequirements = [
  "Strong subject results (distinction level preferred) in the subject you'll tutor",
  "Comfortable teaching Grade 8–12 CAPS curriculum",
  "Reliable internet for online sessions, or ability to meet in person",
  "A short teaching demo as part of onboarding",
];

export const tutorBenefits = [
  { title: "Set your own hours", body: "Tutor around school, university or work." },
  {
    title: "Get matched to students",
    body: "We handle marketing and matching — you focus on teaching.",
  },
  { title: "Paid per session", body: "Transparent rates, paid out weekly." },
];
