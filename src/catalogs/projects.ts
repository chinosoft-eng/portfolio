import LaMontana from "../assets/projects/covers/laMontaña.png";
import AssetsManagementSystem from "../assets/projects/covers/assetsManagement.png";
import Retali from "../assets/projects/covers/retali.png";
import Espotifei from "../assets/projects/covers/espotifei.png";
import { Technologies } from "../models/Technologies";

export const projects = [
    {
        number: 1,
        idenfiticator: "_pos-la-montaña",
        name: "POS La Montaña",
        image: LaMontana,
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepo: "github.com",
        description: "Point of Sale application tailored for a paper store, featuring inventory tracking, sales reports, and an intuitive interface.",
        technologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.python,
            Technologies.flask,
        ]
    },
    {
        number: 2,
        idenfiticator: "_assets-manangement-system",
        name: "Assets Manangement System",
        image: AssetsManagementSystem,
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepo: "github.com",
        description: "Platform to manage assets, companies, users, and transactions for logistics and fleet operations.",
        technologies: [
            Technologies.react,
            Technologies.typescript,
            Technologies.nodejs,
            Technologies.express,
        ]
    },
    {
        number: 3,
        idenfiticator: "_retali",
        name: "RETALI – Online Task Repository",
        image: Retali,
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepo: "github.com",
        description: "Collaborative web platform for academic management that connects students and teachers.",
        technologies: [
            Technologies.javascript,
            Technologies.python,
            Technologies.django,
        ]
    },
    {
        number: 4,
        idenfiticator: "_espotifei",
        name: "Espotifei – Music Streaming Service",
        image: Espotifei,
        linkToProject: "https://la-montania-web.vercel.app/#/home",
        linkToRepo: "github.com",
        description: "Music streaming desktop platform for artists and users. It allows users to listen to their favorite songs.",
        technologies: [
            Technologies.python,
            Technologies.flask,
            Technologies.cSharp,
        ]
    },
];
