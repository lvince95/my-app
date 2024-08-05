export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "John Doe",
    email: "JOHDO@orsted.com",
    subject: "Senior Frontend Developer",
    text: "OptiCab",
    read: true,
    labels: ["EC_ST", "MY CC Software Engineering VI"],
    chart: [
      { month: "Exception Handling", desktop: 4 },
      { month: "Async", desktop: 3 },
      { month: "Logging", desktop: 4 },
      { month: "Design Patterns", desktop: 4 },
      { month: "OOP", desktop: 3 },
      { month: "Typing", desktop: 3 },
    ],
    rating: 3.67,
    years: 1,
  },

  {
    id: "9c18fd43-44f7-11e1-b3f4-5c38d7eeaab1",
    name: "Catherine Lee",
    email: "CALEE@orsted.com",
    subject: "DevOps Engineer",
    text: "BidWiz",
    read: true,
    labels: ["EC_ST", "MY CC Software Engineering II"],
    chart: [
      { month: "Exception Handling", desktop: 3 },
      { month: "Async", desktop: 4 },
      { month: "Logging", desktop: 2 },
      { month: "Design Patterns", desktop: 1 },
      { month: "OOP", desktop: 4 },
      { month: "Typing", desktop: 3 },
    ],
    rating: 2.83,
    years: 5,
  },
  {
    id: "f27e43a9-aa3l-11e1-h9l0-bi9e3djjjkg7",
    name: "Isabella Taylor",
    email: "ISTAY@orsted.com",
    subject: "Database Administrator",
    text: "BidWiz",
    read: true,
    labels: ["EC_ST", "MY CC Software Engineering V"],
    chart: [
      { month: "Exception Handling", desktop: 3 },
      { month: "Async", desktop: 2 },
      { month: "Logging", desktop: 4 },
      { month: "Design Patterns", desktop: 1 },
      { month: "OOP", desktop: 2 },
      { month: "Typing", desktop: 2 },
    ],
    rating: 2.67,
    years: 2,
  },
  {
    id: "be3af065-66h9-11e1-d5h6-7e5af9ffgfc3",
    name: "Eva Martinez",
    email: "EVMAR@orsted.com",
    subject: "Machine Learning Engineer",
    text: "OptiSoil",
    read: true,
    labels: ["Trace", "MY CC Software Engineering I"],
    chart: [
      { month: "Exception Handling", desktop: 4 },
      { month: "Async", desktop: 3 },
      { month: "Logging", desktop: 2 },
      { month: "Design Patterns", desktop: 2 },
      { month: "OOP", desktop: 4 },
      { month: "Typing", desktop: 1 },
    ],
    rating: 2.67,
    years: 1,
  },
  {
    id: "g38f54ba-bb4m-11e1-i0m1-cjaf4ekkkhf8",
    name: "Jack Anderson",
    email: "JAAND@orsted.com",
    subject: "Software Architect",
    text: "OptiCab",
    read: true,
    labels: ["DnD", "MY CC Software Engineering VIII"],
    chart: [
      { month: "Exception Handling", desktop: 3 },
      { month: "Async", desktop: 4 },
      { month: "Logging", desktop: 2 },
      { month: "Design Patterns", desktop: 2 },
      { month: "OOP", desktop: 1 },
      { month: "Typing", desktop: 2 },
    ],
    rating: 2.33,
    years: 0,
  },
  {
    id: "ad29fe54-55g8-11e1-c4g5-6d49e8eeffb2",
    name: "Daniel Kim",
    email: "DAKIM@orsted.com",
    subject: "Data Scientist",
    text: "Metocean",
    read: true,
    labels: ["DnD", "MY CC Software Engineering IX"],
    chart: [
      { month: "Exception Handling", desktop: 2 },
      { month: "Async", desktop: 1 },
      { month: "Logging", desktop: 3 },
      { month: "Design Patterns", desktop: 4 },
      { month: "OOP", desktop: 1 },
      { month: "Typing", desktop: 2 },
    ],
    rating: 2.17,
    years: 0,
  },
  {
    id: "8b07fc32-33e6-11e1-a2f3-4b27c6ee909c",
    name: "Bob Johnson",
    email: "BOJOH@orsted.com",
    subject: "Full Stack Developer",
    text: "QCViewer",
    read: true,
    labels: ["Trace", "MY CC Software Engineering VII"],
    chart: [
      { month: "Exception Handling", desktop: 4 },
      { month: "Async", desktop: 2 },
      { month: "Logging", desktop: 2 },
      { month: "Design Patterns", desktop: 2 },
      { month: "OOP", desktop: 1 },
      { month: "Typing", desktop: 2 },
    ],
    rating: 2.17,
    years: 1,
  },
  {
    id: "cf4b1076-77i0-11e1-e6i7-8f6b0agghgd4",
    name: "Frank Brown",
    email: "FRBRO@orsted.com",
    subject: "System Administrator",
    text: "GeoThermal",
    read: true,
    labels: ["EC_ST", "MY CC Software Engineering XI"],
    chart: [
      { month: "Exception Handling", desktop: 2 },
      { month: "Async", desktop: 1 },
      { month: "Logging", desktop: 3 },
      { month: "Design Patterns", desktop: 3 },
      { month: "OOP", desktop: 2 },
      { month: "Typing", desktop: 2 },
    ],
    rating: 2.17,
    years: 2,
  },
  {
    id: "d05c2187-88j1-11e1-f7j8-9g7c1bhhihe5",
    name: "Grace Davis",
    email: "GRDAV@orsted.com",
    subject: "Network Engineer",
    text: "QCViewer",
    read: true,
    labels: ["DnD", "MY CC Software Engineering IV"],
    chart: [
      { month: "Exception Handling", desktop: 1 },
      { month: "Async", desktop: 3 },
      { month: "Logging", desktop: 4 },
      { month: "Design Patterns", desktop: 2 },
      { month: "OOP", desktop: 3 },
      { month: "Typing", desktop: 1 },
    ],
    rating: 2.17,
    years: 2,
  },
];
export type Mail = (typeof mails)[number];

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
];

export type Contact = (typeof contacts)[number];
