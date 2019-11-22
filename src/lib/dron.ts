import { IDron } from './idron'
class Dron implements IDron {
     readonly chaRotateLeft: string ;
     readonly chaRotateRigth: string;
     readonly chaAdvance: string;
     readonly strMainPath: string;
     readonly strNameFileOutput: string;
     readonly strNameFileInput: string;
     readonly intMaxRoutes: number;
     readonly arriPosition: Array<number>;
     readonly arrsNamePosition: Array<string>;
     readonly arriInitialPosition: Array<number>;
     readonly intRange: number;

    public constructor(
        chaRotateLeft: string , chaRotateRigth: string , chaAdvance: string ,
        strMainPath: string, strNameFileOutput: string, strNameFileInput: string, intMaxRoutes: number, 
        arriPosition: Array<number>, arriInitialPosition: Array<number>, intRange: number) {
        this.strMainPath        = strMainPath;
        this.strNameFileOutput  = (strMainPath + strNameFileOutput);
        this.strNameFileInput   = (strMainPath + strNameFileInput);
        this.intMaxRoutes       = intMaxRoutes;
        this.arriPosition       = arriPosition;
        this.arrsNamePosition   = ["Norte", "Oriente", "Sur", "Occidente"];
        this.chaRotateLeft      = chaRotateLeft;
        this.chaRotateRigth     = chaRotateRigth;
        this.chaAdvance         = chaAdvance;
        this.arriInitialPosition = arriInitialPosition;
        this.intRange           = intRange;
    }


}
export { Dron }