
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
}