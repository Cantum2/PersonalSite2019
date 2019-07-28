export interface Project {
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    projectLink?: string;
    image: any;
}

export interface Person {
    name:string;
    age: number;
    dob?: string;
}