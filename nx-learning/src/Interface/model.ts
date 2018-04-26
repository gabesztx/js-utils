export interface CourseActiveView {
    title: string;
    label: string;
    id: number;
    jegyek: Jegy;
 }

 export interface Jegy {
    name: string;
    data: string;
}


interface Szendvics {
    vaj: boolean;
    szalami: boolean;
}

 interface UtMaltara {
    idopont: string;
    uticel: string;
    szallas: string;
    latniValok: Array<string>;
    szendvics: new (alapanyagok: Array<string>) => Szendvics;
    jegyvasarlas(hely: string): Jegy;
 }
