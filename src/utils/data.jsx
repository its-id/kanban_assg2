import profilePic from "../assets/profilePic.svg";
import p1 from "../assets/people/person1.svg";
import p2 from "../assets/people/person2.svg";
import p3 from "../assets/people/person3.svg";
import p4 from "../assets/people/person4.svg";
import p5 from "../assets/people/person5.svg";
import c1 from "../assets/card/cardContent1.svg";
import c2 from "../assets/card/cardContent2.png";
import c3 from "../assets/card/cardContent3.svg";

const task1 = {
  id: "c1",
  title: "Brainstorming",
  text: "Brainstorming brings team members diverse experience into play. ",
  users: [p1, p4, p3],
  comments: 12,
  files: 0,
  priority: "Low",
  image: "",
};

const task2 = {
  id: "c2",
  title: "Research",
  text: "User research helps you to create an optimal product for users. ",
  users: [p2, p5],
  comments: 10,
  files: 3,
  priority: "High",
  image: "",
};
const task3 = {
  id: "c3",
  title: "Wireframes",
  text: "Low fidelity wireframes include the most basic content and visuals.",
  users: [p1, p5, p4],
  comments: 2,
  files: 0,
  priority: "High",
  image: "",
};

const task4 = {
  id: "c4",
  title: "Mockup",
  text: "Low fidelity mockup include the most basic content and visuals.",
  users: [profilePic, p1],
  comments: 4,
  files: 1,
  priority: "High",
  image: "",
};

const task5 = {
  id: "c5",
  title: "Onboarding Illustrations ",
  text: "",
  users: [p3, p4, p1],
  comments: 14,
  files: 15,
  priority: "Low",
  image: c1,
};

const task6 = {
  id: "c6",
  title: "Moodboard ",
  text: "",
  users: [p3],
  comments: 9,
  files: 10,
  priority: "Low",
  image: c2,
};

const task7 = {
  id: "c7",
  title: "User Journeys ",
  text: "User journeys are the step-by-step journey that a user takes to reach their goal.",
  users: [p5, p4],
  comments: 8,
  files: 20,
  priority: "Completed",
  image: "",
};

const task8 = {
  id: "c8",
  title: "Mobile App Design",
  text: "",
  users: [p5, p4],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: c3,
};

const task9 = {
  id: "c9",
  title: "Design System",
  text: "It just needs to adapt the UI from what you did before ",
  users: [p1, p3, p4],
  comments: 12,
  files: 15,
  priority: "Completed",
  image: "",
};

const sidebarClose = false;
const MobileAppData = [
  {
    id: "title1",
    title: "To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "title2",
    title: "On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "title3", title: "Done", color: "green", tasks: [task8, task9] },
];

const WebsiteRedesign = [
  {
    id: "title1",
    title: "WR To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "title2",
    title: "WR On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "title3", title: "WR Done", color: "green", tasks: [task8, task9] },
];

const DesignSystem = [
  {
    id: "title1",
    title: "DS To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "title2",
    title: "DS On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "title3", title: "DS Done", color: "green", tasks: [task8, task9] },
];

const Wireframes = [
  {
    id: "title1",
    title: "W To Do",
    color: "purple",
    tasks: [task1, task2, task3, task4],
  },
  {
    id: "title2",
    title: "W On Progress",
    color: "orange",
    tasks: [task5, task6, task7],
  },
  { id: "title3", title: "W Done", color: "green", tasks: [task8, task9] },
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
      tasksCol: MobileAppData,
    },
    {
      id: 2,
      title: "Website Redesign",
      color: "orange",
      active: false,
      tasksCol: WebsiteRedesign,
    },
    {
      id: 3,
      title: "Design System",
      color: "purple",
      active: false,
      tasksCol: DesignSystem,
    },
    {
      id: 4,
      title: "Wireframes",
      color: "blue",
      active: false,
      tasksCol: Wireframes,
    },
  ],
  sidebarClose,
};
