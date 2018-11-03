import { ProjectContainerStyles, ProjectData } from "./interfaces";

export const mobileResolution = 480;
export const tabletResolution = 768;
export const name = "Mariana Naidenova";
export const email = "mariana.naidenova.naidenova@gmail.com";
export const socialMediaLinks = {
  facebook: "https://www.facebook.com/mariana.naidenova",
  twitter: "https://twitter.com/mariana_mnn",
  linkedIn: "https://www.linkedin.com/in/mariana-naidenova-89486a43/",
};
export const projectContainersCss: ReadonlyArray<ProjectContainerStyles> = [
  {
    width: "calc(40% - 20px)",
    height: "calc(400px - 10px)",
    color: "#333333",
    background: "#ffffff",
    marginTop: "0",
  },
  {
    width: "calc(30% - 20px)",
    height: "calc(300px - 10px)",
    color: "black",
    background: "#eaeaea",
    marginTop: "0",
  },
  {
    width: "calc(40% - 20px)",
    height: "calc(400px - 10px)",
    color: "#ffffff",
    background: "#697b86",
    marginTop: "0",
  },
  {
    width: "calc(30% - 20px)",
    height: "calc(400px - 10px)",
    color: "black",
    background: "#dfe0d9",
    marginTop: "0",
  },
  {
    width: "calc(30% - 20px)",
    height: "calc(500px - 10px)",
    color: "black",
    background: "#f7f7f3",
    marginTop: "-100px",
  },
];

export const menuItems: ReadonlyArray<string> = ["Projects", "Biography", "Interests"];
export const projects: ReadonlyArray<ProjectData> = [
  {
    id: "1",
    name: "Toro Workman GTX",
    technologies: "JavaScript, Gulp",
    description:
      "The Workman® GTX Series is a grounds and turf crossover vehicle that boasts an unequalled combination of comfort, utility and control, making it simply superior to the competition. Its increased power, improved steering and exclusive suspension and braking systems make the Workman GTX the most versatile, practical and comfortable utility vehicle in its class. Available in gas or electric options, the Workman GTX features hundreds of configurable options that include front and rear attachments, a flat bed and four-seat option, to name a few. So whether you are running to different jobs around the property, moving people or materials, or transporting tools to crews that need them, the Workman GTX has the power and versatility to get the job done right. ",
    tags: ["JavaScript", "sass", "configurator", "gulp"],
    images: [
      "assets/images/projects/toro/toro.png",
      "assets/images/projects/toro/toro-1.png",
      "assets/images/projects/toro/toro-2.png",
      "assets/images/projects/toro/toro-3.png",
      "assets/images/projects/toro/toro-4.png",
    ],
    period: "2017",
    url:
      "https://sites.toro.com/workman-gtx-configurator/?utm_source=toro-com&utm_medium=cta-button&utm_content=golf",
  },
  {
    id: "2",
    name: "Personal Portfolio",
    technologies: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: [""],
    images: ["assets/images/projects/portfolio/portfolio.png"],
    period: "2018",
  },
  {
    id: "3",
    name: "DTN Instant market",
    technologies: "Angular, JavaScript, Web Sockets, sass",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["Angular", "JavaScript", "Web Sockets", "sass"],
    images: [
      "assets/images/projects/instant-market/im.png",
      "assets/images/projects/instant-market/im-1.png",
      "assets/images/projects/instant-market/im-2.png",
      "assets/images/projects/instant-market/im-3.png",
      "assets/images/projects/instant-market/im-4.png",
      "assets/images/projects/instant-market/im-5.png",
      "assets/images/projects/instant-market/im-6.png",
    ],
    period: "2018",
  },
  {
    id: "4",
    name: "DTN composable widgets",
    technologies: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: [""],
    images: [
      "assets/images/projects/widgets/widgets.PNG",
      "assets/images/projects/widgets/widgets-1.PNG",
      "assets/images/projects/widgets/widgets-2.PNG",
    ],
    period: "2018/2019",
  },
  {
    id: "5",
    name: "Enjoy Copenhagen",
    technologies: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: [""],
    images: [
      "assets/images/projects/ec/ec.PNG",
      "assets/images/projects/ec/ec-1.PNG",
      "assets/images/projects/ec/ec-2.PNG",
      "assets/images/projects/ec/ec-3.PNG",
    ],
    period: "2018",
  },
];
