import type { Technologies } from "./Technologies";

export type Project = {
    number: number;
    icon: any;
    idenfiticator: string;
    name: string;
    image: ImageMetadata;
    screenShots: {image: ImageMetadata , alt: string}[];
    linkToProject?: string;
    linkToRepos?: {title: string, link: string}[];
    description: string;
    fullDescription: any,
    technologies: Technologies[];
    fullTechnologies: Technologies[];
    usedOnProduction?: boolean;
    type: "Desktop" | "Web"
}