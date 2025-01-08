// const typeProject = ["Java", "Typescript", "React"]


export type Project = {
    illustration : {
        url : string,
        height : number, 
        width : number
    };
    id : number;
    title : string;
    description : string;
    githubLink : string;
    projectDemo : string;
}

export type Certificate = {
    id : string;
    title : string;
    description : string;
    issuer : string;
    linkCertificate : string;
    illustration : {
        url : string,
        height : number, 
        width : number
    },
}

export type Tag = {
    id : string
    projectType : string
}