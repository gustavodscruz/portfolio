// const typeProject = ["Java", "Typescript", "React"]


export type Project = {
    illustration : {
        url : string,
        height? : number, 
        width? : number
    };
    id : number | string;
    title : string;
    description : string;
    githubLink : string;
    projectDemo : string;
    demo? : {
        projectType : string
    } []
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
    demo : {
        projectType : string
    } []
}

export type CertificateCardType = Omit<Certificate, 'description' | 'linkCertificate' | 'issuer'>

export type Tag = {
    id : string
    projectType : string
}


export type ProjectCardType = Omit<Project, 'description' | 'githubLink' | 'projectDemo'>

export type ProjectsTagsType = {
    _allReferencingProjects: ProjectCardType[]
}

