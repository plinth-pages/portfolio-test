import type { Degree, Milestone, Role } from "./types";

export const experience: Role[] = [
  {
    company: "Northwind Payments",
    role: "Senior Backend Engineer",
    start: "2023",
    description:
      "Moved the settlement pipeline from nightly batch to streaming, cutting reconciliation lag from 14 hours to under 5 minutes.",
  },
  {
    company: "Parcelly",
    role: "Backend Engineer",
    start: "2021",
    end: "2023",
    description:
      "Owned the logistics integration layer across seven carrier APIs, and built the retry tooling support still uses daily.",
  },
  {
    company: "Freelance",
    role: "Contract Developer",
    start: "2020",
    end: "2021",
    description: "Backend and infrastructure work for early-stage startups, mostly Django and Postgres.",
  },
];

export const education: Degree[] = [
  {
    institution: "National Institute of Technology, Calicut",
    degree: "B.Tech",
    field: "Computer Science",
    start: "2016",
    end: "2020",
  },
];

export const milestones: Milestone[] = [
  {
    date: "March 2026",
    title: "Spoke at GopherCon India",
    description: "Boring by design: settlement pipelines that don't page you.",
  },
  {
    date: "November 2025",
    title: "ledger-kit reached 1.0",
    description: "After eighteen months and a lot of opinions about idempotency keys.",
  },
];
