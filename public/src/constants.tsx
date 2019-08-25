import { ProjectContainerStyles, ProjectData, Biography, Interests } from "./interfaces";

// Device resolutions
export const mobileResolution = 480;
export const tabletResolution = 768;

// Personal info details
export const name = "Mariana Naidenova";
export const email = "mariana.naidenova.naidenova@gmail.com";
export const socialMediaLinks = {
  facebook: "https://www.facebook.com/mariana.naidenova",
  twitter: "https://twitter.com/mariana_mnn",
  linkedIn: "https://www.linkedin.com/in/mariana-naidenova-89486a43/",
};
export const personalImage =
  "https://res.cloudinary.com/mariana-mn/image/upload/v1546775007/portfolio/media-share-0-02-05-823ba023b60561ea119e8257719207536a2e80c67d195cc846409cac2c845085-5734c6eb-9681-42da-9979-b9c491e72c1d.jpg";

// Main Menu
export const menuItems: ReadonlyArray<string> = ["Projects", "Biography", "Interests"];

// Projects data
export const projectContainersCss: ReadonlyArray<ProjectContainerStyles> = [
  {
    width: "calc(40% - 20px)",
    height: "390px", //calc(400px - 10px)
    color: "#333333",
    background: "#ffffff",
    marginTop: "0",
  },
  {
    width: "calc(30% - 20px)",
    height: "290px", //calc(300px - 10px)
    color: "black",
    background: "#eaeaea",
    marginTop: "0",
  },
  {
    width: "calc(35% - 20px)",
    height: "390px", //calc(400px - 10px)
    color: "#ffffff",
    background: "#697b86",
    marginTop: "0",
  },
  {
    width: "calc(35% - 20px)",
    height: "390px", //calc(400px - 10px)
    color: "black",
    background: "#dfe0d9",
    marginTop: "0",
  },
  {
    width: "calc(30% - 20px)",
    height: "490px", //calc(500px - 10px)
    color: "black",
    background: "#f7f7f3",
    marginTop: "-100px",
  },
];

export const projects: ReadonlyArray<ProjectData> = [
  {
    id: "1",
    name: "Toro Workman GTX",
    technologies: "JavaScript, Gulp, Sass",
    description:
      'Toro Workman GTX was my first project as a developer. Without any frameworks or libraries, just an "old school" vanilla JavaScript. The project was for Workman GTX vehicle. The customer can configure the desired product parameters by himself. Then the required parameters can be easily sent via email to the Toro company customer representative, questions can be raised or price range can be discussed.',
    tags: ["JavaScript", "Sass", "Gulp", "Vehicle configurator"],
    images: [
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403360/portfolio/toro/toro.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403358/portfolio/toro/toro-1.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403359/portfolio/toro/toro-2.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403359/portfolio/toro/toro-3.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403363/portfolio/toro/toro-4.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403360/portfolio/toro/toro-5.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1547403361/portfolio/toro/toro-6.png",
    ],
    period: "2017",
    url:
      "https://sites.toro.com/workman-gtx-configurator/?utm_source=toro-com&utm_medium=cta-button&utm_content=golf",
  },
  {
    id: "2",
    name: "Personal Portfolio",
    technologies: "React, TypeScript, Webpack, Styled-components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["React", "TypeScript", "Webpack", "Styled-components"],
    images: [
      "assets/images/projects/portfolio/portfolio.png",
      "assets/images/projects/portfolio/portfolio-1.PNG",
    ],
    period: "2018",
  },
  {
    id: "3",
    name: "DTN Instant market",
    technologies: "Angular, Typescript, Web Sockets, Sass",
    description:
      "This project was related to an American customer who wanted to provide a service to his clients a reliable access to market data. The product delivers vital information and targeted tools for busy professionals who need high-level market awareness. This web app supports multiple, personalized workspaces for fast market access; detailed quote sheets that can be quickly linked to charts; insightful charts, tools, and studies to support decisions; scrolling news from industry leaders.",
    tags: [
      "Angular",
      "Typescript",
      "Web Sockets",
      "Sass",
      "Highcharts",
      "sortablejs",
      "Csv export",
      "Technical studies",
    ],
    images: [
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198351/portfolio/instant-market/im.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198352/portfolio/instant-market/im-1.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198352/portfolio/instant-market/im-2.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198353/portfolio/instant-market/im-3.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198353/portfolio/instant-market/im-4.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198353/portfolio/instant-market/im-5.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549198352/portfolio/instant-market/im-6.png",
    ],
    period: "2018",
  },
  {
    id: "4",
    name: "DTN Content services",
    technologies: "React, TypeScript, Redux, Rxjs, styled-components",
    description:
      "Content services project is mainly for developers who can easily integrate agriculture and weather content on their website projects. They can also customize the way they display the content. Content services further simplifies the process of adding data and insights to websites by making UI components available in the form of Composable Widgets. Composable Widgets are JavaScript API framework used to embed visualizations inside web applications. They come bundled with Content services product.",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Rxjs",
      "Monorepo",
      "Lerna",
      "react-stockcharts",
      "styled-components",
    ],
    images: [
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201191/portfolio/widgets/widgets.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201191/portfolio/widgets/widgets-1.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201191/portfolio/widgets/widgets-2.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201191/portfolio/widgets/widgets-3.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201191/portfolio/widgets/widgets-4.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201193/portfolio/widgets/widgets-5.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201192/portfolio/widgets/widgets-6.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201193/portfolio/widgets/widgets-7.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549201195/portfolio/widgets/widgets-8.png",
    ],
    period: "2018/2019",
    url: "https://cs-widget-docs.dtn.com/index.html",
  },
  {
    id: "5",
    name: "Enjoy Copenhagen",
    technologies: "React, Redux, redux-thunk, Sass, Firebase",
    description:
      "Enjoy Copenhagen is an online booking platform that makes hand-picked tours in Copenhagen easily available to visitors. All the tours were selected by locals, who know exactly how  an ultimate experience while in Copenhagen can be get and know the operators that are reliable and customer friendly. ",
    tags: ["React", "Redux", "redux-thunk", "Sass", "Firebase"],
    images: [
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202606/portfolio/enjoy-copenhagen/ec.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202608/portfolio/enjoy-copenhagen/ec-1.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202606/portfolio/enjoy-copenhagen/ec-2.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202603/portfolio/enjoy-copenhagen/ec-3.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202597/portfolio/enjoy-copenhagen/ec-4.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202605/portfolio/enjoy-copenhagen/ec-5.png",
      "https://res.cloudinary.com/mariana-mn/image/upload/v1549202768/portfolio/enjoy-copenhagen/ec-6.png",
    ],
    period: "2018",
    url: "https://www.enjoycopenhagen.dk/en",
  },
];

// Biography data
export const biography: Biography = {
  image: "assets/images/whoAmI.jpeg",
  whoAmI:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  whatAreMyProfessionalPassions:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
  professionalInterests: ["React.js", "Redux", "Node.js"],
  achievements: [
    "My persistence demonstrated through all the courses in the Academy and not giving up no matter how hard it was.",
    "Telerik Academy Ninja: Good collaboration in teamworks. New friendships built. New knowledge acquired.",
  ],
};

// Interests data
export const interests: Interests = {
  quote: {
    text:
      "As soon as something stops being fun, I think it’s time to move on. Life is too short to be unhappy. Waking up stressed and miserable is not a good way to live.",
    author: "Richard Branson",
  },
  hobbies: [
    { name: "books", image: "assets/images/book.jpeg" },
    { name: "puzzles", image: "assets/images/puzzle.jpeg" },
    { name: "origami", image: "assets/images/origami.jpeg" },
  ],
};
