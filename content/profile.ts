import type { Profile } from "./types";

export const profile: Profile = {
  name: "Sumit Verma",
  title: "Student",
  headline: "I'm learning by building — here's what I've made so far.",
  email: "",
  cta: {
    label: "Contact me",
    href: "#contact",
  },
  about: [
    "I'm studying and spending my spare time on projects that teach me something new.",
    "I'm looking for internships and chances to learn from experienced teams.",
  ],
  stats: [
    {
      label: "Projects",
      value: "1",
    },
    {
      label: "Hackathons",
      value: "2",
    },
    {
      label: "Courses completed",
      value: "12",
    },
  ],
  socials: [],
  contactNote: "Open to internships, hackathons and study groups.",
};
