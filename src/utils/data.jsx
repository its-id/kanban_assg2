import profilePic from "../assets/profilePic.svg";
import p1 from "../assets/people/person1.svg";
import p2 from "../assets/people/person2.svg";
import p3 from "../assets/people/person3.svg";
import p4 from "../assets/people/person4.svg";
import p5 from "../assets/people/person5.svg";
import c1 from "../assets/card/cardContent1.svg";
import c2 from "../assets/card/cardContent2.png";
import c3 from "../assets/card/cardContent3.svg";

const todo1 = {
  id: "d1",
  title: "Brainstorming",
  text: "Brainstorming brings team members diverse experience into play. ",
  users: [p1, p4, p3],
  comments: 12,
  files: 0,
  priority: "Low",
  image: "",
};

const todo2 = {
  id: "d2",
  title: "Research",
  text: "User research helps you to create an optimal product for users. ",
  users: [p2, p5],
  comments: 10,
  files: 3,
  priority: "High",
  image: "",
};
const todo3 = {
  id: "d3",
  title: "Wireframes",
  text: "Low fidelity wireframes include the most basic content and visuals.",
  users: [p1, p5, p4],
  comments: 2,
  files: 0,
  priority: "High",
  image: "",
};

const todo4 = {
  id: "d4",
  title: "Mockup",
  text: "Low fidelity mockup include the most basic content and visuals.",
  users: [profilePic, p1],
  comments: 4,
  files: 1,
  priority: "High",
  image: "",
};

const todo5 = {
  id: "d5",
  title: "Onboarding Illustrations ",
  text: "",
  users: [p3, p4, p1],
  comments: 14,
  files: 15,
  priority: "Low",
  image: c1,
};

const todo6 = {
  id: "d6",
  title: "Moodboard ",
  text: "",
  users: [p3],
  comments: 9,
  files: 10,
  priority: "Low",
  image: c2,
};

const todo7 = {
  id: "d7",
  title: "User Journeys ",
  text: "User journeys are the step-by-step journey that a user takes to reach their goal.",
  users: [p5, p4],
  comments: 8,
  files: 20,
  priority: "Completed",
  image: "",
};

const todo8 = {
  id: "d8",
  title: "Mobile App Design",
  text: "",
  users: [p5, p4],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: c3,
};

const todo9 = {
  id: "d9",
  title: "Design System",
  text: "It just needs to adapt the UI from what you did before ",
  users: [p1, p3, p4],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: "",
};

const toggleSidebar = false;

const MobileAppData = [
  {
    id: "title1",
    title: "To Do",
    color: "purple",
    todos: [todo1, todo2, todo3, todo4],
  },
  {
    id: "title2",
    title: "On Progress",
    color: "orange",
    todos: [todo5, todo6, todo7],
  },
  { id: "title3", title: "Done", color: "green", todos: [todo8, todo9] },
];

const WebsiteRedesign = [
  {
    id: "title1",
    title: "WR To Do",
    color: "purple",
    todos: [todo1, todo2, todo3, todo4],
  },
  {
    id: "title2",
    title: "WR On Progress",
    color: "orange",
    todos: [todo5, todo6, todo7],
  },
  { id: "title3", title: "WR Done", color: "green", todos: [todo8, todo9] },
];

const DesignSystem = [
  {
    id: "title1",
    title: "DS To Do",
    color: "purple",
    todos: [todo1, todo2, todo3, todo4],
  },
  {
    id: "title2",
    title: "DS On Progress",
    color: "orange",
    todos: [todo5, todo6, todo7],
  },
  { id: "title3", title: "DS Done", color: "green", todos: [todo8, todo9] },
];

const Wireframes = [
  {
    id: "title1",
    title: "W To Do",
    color: "purple",
    todos: [todo1, todo2, todo3, todo4],
  },
  {
    id: "title2",
    title: "W On Progress",
    color: "orange",
    todos: [todo5, todo6, todo7],
  },
  { id: "title3", title: "W Done", color: "green", todos: [todo8, todo9] },
];

export const appData = {
  menu: [
    { id: 1, icon: "heroicons:squares-2x2", title: "Home" },
    { id: 2, icon: "tabler:message-2", title: "Messages" },
    { id: 3, icon: "solar:checklist-minimalistic-linear", title: "Tasks" },
    { id: 4, icon: "fluent:people-24-regular", title: "Members" },
    { id: 5, icon: "ph:gear", title: "Settings" },
  ],
  projects: [
    {
      id: 1,
      title: "Mobile App",
      color: "green",
      active: true,
      todosTab: MobileAppData,
    },
    {
      id: 2,
      title: "Website Redesign",
      color: "orange",
      active: false,
      todosTab: WebsiteRedesign,
    },
    {
      id: 3,
      title: "Design System",
      color: "purple",
      active: false,
      todosTab: DesignSystem,
    },
    {
      id: 4,
      title: "Wireframes",
      color: "blue",
      active: false,
      todosTab: Wireframes,
    },
  ],
  toggleSidebar,
};
