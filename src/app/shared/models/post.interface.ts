export interface PostI{
    //datos alumno
    id?: string;
    nombre: string;
    codigoU:string;
    facultad:string;
    escuelaP:string;
    filial:string;
    ciclo:string;
    //imagen o pdf
    imagePost?: any;
    fileRef?: string;
    //datos de las practicas
    eNombre:string;
    eTipo:string;
    eDireccion:string;
    eTelefono?:string;
    eGerente?:string;
    eEmail?:string;
}