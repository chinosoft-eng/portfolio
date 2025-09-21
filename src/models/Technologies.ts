import CSharpIcon from "../components/ui/icons/CSharpIcon.astro"
import NetCoreIcon from "../components/ui/icons/NetCoreIcon.astro"
import DjangoIcon from "../components/ui/icons/DjangoIcon.astro"
import DockerIcon from "../components/ui/icons/DockerIcon.astro"
import ElectronIcon from "../components/ui/icons/ElectronIcon.astro"
import ExpressIcon from "../components/ui/icons/ExpressIcon.astro"
import FlaskIcon from "../components/ui/icons/FlaskIcon.astro"
import JavaScriptIcon from "../components/ui/icons/JavaScriptIcon.astro"
import MongoIcon from "../components/ui/icons/MongoIcon.astro"
import NodeJsIcon from "../components/ui/icons/NodeJsIcon.astro"
import PostgresqlIcon from "../components/ui/icons/PostgresqlIcon.astro"
import SqlServerIcon from "../components/ui/icons/SqlServerIcon.astro"
import PythonPlainIcon from "../components/ui/icons/PythonPlainIcon.astro"
import ReactIcon from "../components/ui/icons/ReactIcon.astro"
import AngularIcon from "../components/ui/icons/AngularIcon.astro";
import TypeScriptIcon from "../components/ui/icons/TypeScriptIcon.astro"
import GitIcon from "../components/ui/icons/GitIcon.astro"
import RedisIcon from "../components/ui/icons/RedisIcon.astro"
import UmlIcon from "../components/ui/icons/UmlIcon.astro"
import AwsIcon from "../components/ui/icons/AwsIcon.astro"
import AzureIcon from "../components/ui/icons/AzureIcon.astro"

export enum Technologies {
  react,
  angular,
  typescript,
  javascript,
  python,
  django,
  flask,
  electron,
  express,
  nodejs,
  netCore,
  cSharp,
  mongodb,
  postgresql,
  sqlServer,
  docker,
  git,
  redis,
  uml,
  aws,
  azure
}

export const TECHNOLOGIES_NAME_MAPS: Record<Technologies, string> = {
  [Technologies.react]: "React",
  [Technologies.angular]: "Angular",
  [Technologies.typescript]: "TypeScript",
  [Technologies.javascript]: "JavaScript",
  [Technologies.nodejs]: "Node.js",
  [Technologies.express]: "Express",
  [Technologies.electron]: "Electron",
  [Technologies.django]: "Django",
  [Technologies.flask]: "Flask",
  [Technologies.python]: "Python",
  [Technologies.cSharp]: "C#",
  [Technologies.netCore]: ".Net Core",
  [Technologies.mongodb]: "MongoDB",
  [Technologies.docker]: "Docker",
  [Technologies.sqlServer]: "SQL Server",
  [Technologies.postgresql]: "Postgresql",
  [Technologies.git]: "Git",
  [Technologies.redis]: "Redis",
  [Technologies.uml]: "UML",
  [Technologies.aws]: "AWS",
  [Technologies.azure]: "Azure",
}

// Map of technologies to their respective icon components
export const TECHNOLOGIES_ICON_MAPS: Record<Technologies, any> = {
  [Technologies.react]: ReactIcon,
  [Technologies.angular]: AngularIcon,
  [Technologies.javascript]: JavaScriptIcon,
  [Technologies.typescript]: TypeScriptIcon,
  [Technologies.express]: ExpressIcon,
  [Technologies.nodejs]: NodeJsIcon,
  [Technologies.electron]: ElectronIcon,
  [Technologies.django]: DjangoIcon,
  [Technologies.flask]: FlaskIcon,
  [Technologies.python]: PythonPlainIcon,
  [Technologies.cSharp]: CSharpIcon,
  [Technologies.netCore]: NetCoreIcon,
  [Technologies.mongodb]: MongoIcon,
  [Technologies.docker]: DockerIcon,
  [Technologies.sqlServer]: SqlServerIcon,
  [Technologies.postgresql]: PostgresqlIcon,
  [Technologies.git]: GitIcon,
  [Technologies.redis]: RedisIcon,
  [Technologies.uml]: UmlIcon,
  [Technologies.aws]: AwsIcon,
  [Technologies.azure]: AzureIcon,
}
