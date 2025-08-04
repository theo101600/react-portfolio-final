import {
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiSass,
  DiSqllite,
  DiVisualstudio,
} from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiArduino,
  SiBlender,
  SiExpress,
  SiKicad,
  SiLeaflet,
  SiMapbox,
  SiMongoose,
  SiPostman,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";
import SolidWorksIcon from "../assets/SolidWorksIcon";
import { BiLogoVisualStudio } from "react-icons/bi";
import FreeCadIcon from "../assets/FreeCadIcon";

const ICON_SIZE = 25;

const techStackIcons = {
  React: <FaReact size={ICON_SIZE} />,
  StyledComponents: <SiStyledcomponents size={ICON_SIZE} />,
  Supabase: <RiSupabaseFill size={ICON_SIZE} />,
  TailwindCSS: <RiTailwindCssFill size={ICON_SIZE} />,
  MongoDB: <DiMongodb size={ICON_SIZE} />,
  JavaScript: <FaJs size={ICON_SIZE} />,
  NodeJs: <FaNodeJs size={ICON_SIZE} />,
  NextJs: <RiNextjsFill size={ICON_SIZE} />,
  Redux: <SiRedux size={ICON_SIZE} />,
  ReduxToolkit: <SiRedux size={ICON_SIZE} />,
  ReactQuery: <SiReactquery size={ICON_SIZE} />,
  ReactRouter: <SiReactrouter size={ICON_SIZE} />,
  HTML5: <FaHtml5 size={ICON_SIZE} />,
  CSS3: <FaCss3Alt size={ICON_SIZE} />,
  KiCad: <SiKicad size={ICON_SIZE} />,
  Leaflet: <SiLeaflet size={ICON_SIZE} />,
  npm: <FaNpm size={ICON_SIZE} />,
  git: <FaGitAlt size={ICON_SIZE} />,
  github: <FaGithub size={ICON_SIZE} />,
  Figma: <IoLogoFigma size={ICON_SIZE} />,
  Postman: <SiPostman size={ICON_SIZE} />,
  Bootstrap: <FaBootstrap size={ICON_SIZE} />,
  SolidWorks: <SolidWorksIcon size={ICON_SIZE} />,
  VisualStudioCode: <BiLogoVisualStudio size={ICON_SIZE} />,
  VisualStudio: <DiVisualstudio size={ICON_SIZE} />,
  AndroidStudio: <SiAndroidstudio size={ICON_SIZE} />,
  Blender: <SiBlender size={ICON_SIZE} />,
  Photoshop: <SiAdobephotoshop size={ICON_SIZE} />,
  Illustrator: <SiAdobeillustrator size={ICON_SIZE} />,
  FreeCad: <FreeCadIcon size={ICON_SIZE} />,
  Express: <SiExpress size={ICON_SIZE} />,
  Vite: <SiVite size={ICON_SIZE} />,
  Python: <DiPython size={ICON_SIZE} />,
  Postgresql: <DiPostgresql size={ICON_SIZE} />,
  MySql: <DiMysql size={ICON_SIZE} />,
  Sqllite: <DiSqllite size={ICON_SIZE} />,
  Sass: <DiSass size={ICON_SIZE} />,
  Arduino: <SiArduino size={ICON_SIZE} />,
  Mongoose: <SiMongoose size={ICON_SIZE} />,
  Mapbox: <SiMapbox size={ICON_SIZE} />,
};

export { techStackIcons };
