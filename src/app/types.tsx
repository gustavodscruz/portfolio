// const typeProject = ["Java", "Typescript", "React"]


export type Project = {
    id : number,
    name : string,
    desc : string,
    image : string,
    type : "Java" | "Typescript" | "React" 
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