import CSharpIcon from "../components/ui/icons/CSharpIcon.astro"
import DjangoIcon from "../components/ui/icons/DjangoIcon.astro"
import DockerIcon from "../components/ui/icons/DockerIcon.astro"
import ElectronIcon from "../components/ui/icons/ElectronIcon.astro"
import ExpressIcon from "../components/ui/icons/ExpressIcon.astro"
import FlaskIcon from "../components/ui/icons/FlaskIcon.astro"
import JavaScriptIcon from "../components/ui/icons/JavaScriptIcon.astro"
import MongoIcon from "../components/ui/icons/MongoIcon.astro"
import NodeJsIcon from "../components/ui/icons/NodeJsIcon.astro"
import PostgresqlIcon from "../components/ui/icons/PostgresqlIcon.astro"
import PythonPlainIcon from "../components/ui/icons/PythonPlainIcon.astro"
import ReactIcon from "../components/ui/icons/ReactIcon.astro"
import TypeScriptIcon from "../components/ui/icons/TypeScriptIcon.astro"

export enum Technologies {
  react,
  typescript,
  javascript,
  python,
  django,
  flask,
  electron,
  express,
  nodejs,
  cSharp,
  mongodb,
  postgresql,
  docker
}

export const TECHNOLOGIES_NAME_MAPS: Record<Technologies, string> = {
  [Technologies.react]: "React",
  [Technologies.typescript]: "TypeScript",
  [Technologies.javascript]: "JavaScript",
  [Technologies.nodejs]: "Node.js",
  [Technologies.express]: "Express",
  [Technologies.electron]: "Electron",
  [Technologies.django]: "Django",
  [Technologies.flask]: "Flask",
  [Technologies.python]: "Python",
  [Technologies.cSharp]: "C#",
  [Technologies.mongodb]: "MongoDB",
  [Technologies.docker]: "Docker",
  [Technologies.postgresql]: "Postgresql"
}

// Map of technologies to their respective icon components
export const TECHNOLOGIES_ICON_MAPS: Record<Technologies, any> = {
  [Technologies.react]: ReactIcon,
  [Technologies.javascript]: JavaScriptIcon,
  [Technologies.typescript]: TypeScriptIcon,
  [Technologies.express]: ExpressIcon,
  [Technologies.nodejs]: NodeJsIcon,
  [Technologies.electron]: ElectronIcon,
  [Technologies.django]: DjangoIcon,
  [Technologies.flask]: FlaskIcon,
  [Technologies.python]: PythonPlainIcon,
  [Technologies.cSharp]: CSharpIcon,
  [Technologies.mongodb]: MongoIcon,
  [Technologies.docker]: DockerIcon,
  [Technologies.postgresql]: PostgresqlIcon
}
