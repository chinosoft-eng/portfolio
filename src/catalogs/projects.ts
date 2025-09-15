import LaMontana from "../assets/projects/covers/laMontaña.png";
import AssetsManagementSystem from "../assets/projects/covers/assetsManagement.png";
import Retali from "../assets/projects/covers/retali.png";
import Espotifei from "../assets/projects/covers/espotifei.png";
import { Technologies } from "../models/Technologies";
import StoreIcon from "../components/ui/icons/StoreIcon.astro";
import BoxIcon from "../components/ui/icons/BoxIcon.astro";
import PencilIcon from "../components/ui/icons/PencilIcon.astro";
import MusicIcon from "../components/ui/icons/MusicIcon.astro";

import laMontaniaDescription from "./descriptions/la-montania.md";
import assetsManagementDescription from "./descriptions/assets-management.md";
import retaliDescription from "./descriptions/retali.md";

import type { Project } from "../models/Project";

// La Montaña Screen Shots
import LaMontanaScreenShot1 from "../assets/projects/screenshots/laMontana/la-montania-screen-1.png";
import LaMontanaScreenShot2 from "../assets/projects/screenshots/laMontana/la-montania-screen-2.png";
import LaMontanaScreenShot3 from "../assets/projects/screenshots/laMontana/la-montania-screen-3.png";
import LaMontanaScreenShot4 from "../assets/projects/screenshots/laMontana/la-montania-screen-4.png";
import LaMontanaScreenShot5 from "../assets/projects/screenshots/laMontana/la-montania-screen-5.png";
import LaMontanaScreenShot6 from "../assets/projects/screenshots/laMontana/la-montania-screen-6.png";
import LaMontanaScreenShot7 from "../assets/projects/screenshots/laMontana/la-montania-screen-7.png";
import LaMontanaScreenShot8 from "../assets/projects/screenshots/laMontana/la-montania-screen-8.png";
import LaMontanaScreenShot9 from "../assets/projects/screenshots/laMontana/la-montania-screen-9.png";
import LaMontanaScreenShot10 from "../assets/projects/screenshots/laMontana/la-montania-screen-10.png";

// Assets Management Screen Shots
import AssetManagementScreenShot1 from "../assets/projects/screenshots/assetManagement/assets-management-screen-1.png";
import AssetManagementScreenShot2 from "../assets/projects/screenshots/assetManagement/assets-management-screen-2.png";
import AssetManagementScreenShot3 from "../assets/projects/screenshots/assetManagement/assets-management-screen-3.png";
import AssetManagementScreenShot4 from "../assets/projects/screenshots/assetManagement/assets-management-screen-4.png";
import AssetManagementScreenShot5 from "../assets/projects/screenshots/assetManagement/assets-management-screen-5.png";
import AssetManagementScreenShot6 from "../assets/projects/screenshots/assetManagement/assets-management-screen-6.png";
import AssetManagementScreenShot7 from "../assets/projects/screenshots/assetManagement/assets-management-screen-7.png";
import AssetManagementScreenShot8 from "../assets/projects/screenshots/assetManagement/assets-management-screen-8.png";

// Retali Screen Shots
import RetaliScreenShot1 from "../assets/projects/screenshots/retali/retali-screen-1.png";
import RetaliScreenShot2 from "../assets/projects/screenshots/retali/retali-screen-2.png";
import RetaliScreenShot3 from "../assets/projects/screenshots/retali/retali-screen-3.png";
import RetaliScreenShot4 from "../assets/projects/screenshots/retali/retali-screen-4.png";
import RetaliScreenShot5 from "../assets/projects/screenshots/retali/retali-screen-5.png";
import RetaliScreenShot6 from "../assets/projects/screenshots/retali/retali-screen-6.png";
import RetaliScreenShot7 from "../assets/projects/screenshots/retali/retali-screen-7.png";
import RetaliScreenShot8 from "../assets/projects/screenshots/retali/retali-screen-8.png";
import RetaliScreenShot9 from "../assets/projects/screenshots/retali/retali-screen-9.png";
import RetaliScreenShot10 from "../assets/projects/screenshots/retali/retali-screen-10.png";
import RetaliScreenShot11 from "../assets/projects/screenshots/retali/retali-screen-11.png";


export const projects: Project[] = [
    {
        number: 1,
        icon: StoreIcon,
        idenfiticator: "_pos-la-montaña",
        name: "POS La Montaña",
        image: LaMontana,
        screenShots: [
            {image: LaMontanaScreenShot1 , alt: "Screenshot 1"}, 
            {image: LaMontanaScreenShot2 , alt: "Screenshot 2"}, 
            {image: LaMontanaScreenShot3 , alt: "Screenshot 3"}, 
            {image: LaMontanaScreenShot4 , alt: "Screenshot 4"}, 
            {image: LaMontanaScreenShot5 , alt: "Screenshot 5"}, 
            {image: LaMontanaScreenShot6 , alt: "Screenshot 6"}, 
            {image: LaMontanaScreenShot7 , alt: "Screenshot 7"}, 
            {image: LaMontanaScreenShot8 , alt: "Screenshot 8"}, 
            {image: LaMontanaScreenShot9 , alt: "Screenshot 9"}, 
            {image: LaMontanaScreenShot10 , alt: "Screenshot 10"}, 
        ],
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        description: "Point of Sale application tailored for a paper store, featuring inventory tracking, sales reports, and an intuitive interface.",
        fullDescription: laMontaniaDescription,
        type: "Desktop",
        usedOnProduction: true,
        technologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.python,
            Technologies.flask,
        ],
        fullTechnologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.python,
            Technologies.flask,
            Technologies.electron,
            Technologies.mongodb,
            Technologies.docker,
        ]
    },
    {
        number: 2,
        icon: BoxIcon,
        idenfiticator: "_assets-manangement",
        name: "Assets Manangement",
        image: AssetsManagementSystem,
        screenShots: [
            {image: AssetManagementScreenShot1 , alt: "Screenshot 1"}, 
            {image: AssetManagementScreenShot2 , alt: "Screenshot 2"}, 
            {image: AssetManagementScreenShot3 , alt: "Screenshot 3"}, 
            {image: AssetManagementScreenShot4 , alt: "Screenshot 4"}, 
            {image: AssetManagementScreenShot5 , alt: "Screenshot 5"}, 
            {image: AssetManagementScreenShot6 , alt: "Screenshot 6"}, 
            {image: AssetManagementScreenShot7 , alt: "Screenshot 7"}, 
            {image: AssetManagementScreenShot8 , alt: "Screenshot 8"}, 
        ],
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepos: [
            {title: "Backend repository", link: "https://github.com/chinosoft-eng/asset-manegement-api"},
            {title: "Frontend repository", link: "https://github.com/chinosoft-eng/asset-management-front"},
        ],
        description: "Platform to manage assets, companies, users, and transactions for logistics and fleet operations.",
        fullDescription: assetsManagementDescription,
        type: "Web",
        usedOnProduction: true,
        technologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.nodejs,
            Technologies.express,
        ],
        fullTechnologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.nodejs,
            Technologies.express
        ]
    },
    {
        number: 3,
        icon: PencilIcon,
        idenfiticator: "_retali",
        name: "RETALI",
        image: Retali,
        screenShots: [
            {image: RetaliScreenShot1 , alt: "Screenshot 1"},
            {image: RetaliScreenShot2 , alt: "Screenshot 2"},
            {image: RetaliScreenShot3 , alt: "Screenshot 3"},
            {image: RetaliScreenShot4 , alt: "Screenshot 4"},
            {image: RetaliScreenShot5 , alt: "Screenshot 5"},
            {image: RetaliScreenShot6 , alt: "Screenshot 6"},
            {image: RetaliScreenShot7 , alt: "Screenshot 7"},
            {image: RetaliScreenShot8 , alt: "Screenshot 8"},
            {image: RetaliScreenShot9 , alt: "Screenshot 9"},
            {image: RetaliScreenShot10 , alt: "Screenshot 10"},
            {image: RetaliScreenShot11 , alt: "Screenshot 11"},
        ],
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepos: [
            {title: "Project repository", link: "https://github.com/chinosoft-eng/retali"}
        ],
        description: "Collaborative web platform for academic management that connects students and teachers.",
        fullDescription: retaliDescription,
        type: "Web",
        technologies: [
            Technologies.javascript,
            Technologies.python,
            Technologies.django,
        ],
        fullTechnologies: [
            Technologies.javascript,
            Technologies.django,
            Technologies.python,
            Technologies.postgresql,
            Technologies.docker,
        ]
    },
    {
        number: 4,
        icon: MusicIcon,
        idenfiticator: "_espotifei",
        name: "Espotifei – Music Streaming Service",
        image: Espotifei,
        screenShots: [{image: Retali , alt: "Screenshot 1"}, {image: Espotifei , alt: "Screenshot 2"}, {image: LaMontana , alt: "Screenshot 3"}],
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepos: [{title: "Backend repository", link: "https://github.com/chinosoft-eng/espotifei-api"}],
        description: "Music streaming desktop platform for artists and users. It allows users to listen to their favorite songs.",
        fullDescription: laMontaniaDescription,
        type: "Desktop",
        technologies: [
            Technologies.python,
            Technologies.flask,
            Technologies.cSharp,
        ],
        fullTechnologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.python,
            Technologies.flask,
            Technologies.electron,
            Technologies.mongodb,
            Technologies.docker,
        ]
    },
];
