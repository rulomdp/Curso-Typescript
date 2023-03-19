interface Curso{
    nombre: string;
    duracion: number;
}

interface Gentlemanprograming {
    nombre:string;
    edad: number;
    cursos: Curso[];
}

const function loger (variable: string) => {
    console.log(variable);
}