import { faPeopleGroup, faTrophy, faChalkboard, faCalendar } from "@fortawesome/free-solid-svg-icons";

const CPPTheme = {
  lightblue: "#649bd3",
  blue: "#00599d",
  darkblue: "#014284",
  lightgreen: "#3ec757",
  green: "#136e01"
};

const email = "cpp@umn.edu"; // not an actual email... yet
const githubOrg = "https://github.com/cppumn";
const discordInvite = "https://discord.gg/6Cyr7K9Sfk";
const logo = require("img/logos/ClubLogo.png");

const CPPCalendarConfig = {
  clientId: "c_04skom520lh4t0kium9qg1r1vg@group.calendar.google.com",
  apiKey: "AIzaSyAASW9GZYCIxKLVjS8wEJ1tP-oNW3028eE",
}

const CPPMainCards = [
  {
    title: "Collaboration",
    desc: `
        We provide sessions for members to help each other progress
        through the toughest problems they are confronted with.
      `,
    icon: faPeopleGroup
  },
  {
    title: "Lectures",
    desc: `
        Lectures are ran by experienced competitive programmers
        where we dive into challenging computer science topics.
      `,
    icon: faChalkboard
  },
  {
    title: "Contests",
    desc: `
        We host practice contests where beginning programmers
        to top competitors can compete at differently levels.
      `,
    icon: faTrophy
  },
  {
    title: "Events",
    desc: `
        Seminars, conferences, and meetups are scheduled to 
        interact with the broader computer science.
      `,
    icon: faCalendar
  }
]

export {CPPTheme, email, githubOrg, discordInvite, logo, CPPCalendarConfig, CPPMainCards};
