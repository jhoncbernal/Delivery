import { IDron } from './idron'
class Dron implements IDron {
    readonly chaRotateLeft: string;
    readonly chaRotateRigth: string;
    readonly chaAdvance: string;
    readonly strMainPath: string;
    readonly strNameFileOutput: string;
    readonly strNameFileInput: string;
    readonly intMaxRoutes: number;
    arriPosition: Array<number>;
    readonly arrsNamePosition: Array<string>;
    readonly arriInitialPosition: Array<number>;
    readonly intRange: number;

    public constructor(
        chaRotateLeft: string, chaRotateRigth: string, chaAdvance: string,
        strMainPath: string, strNameFileOutput: string, strNameFileInput: string, intMaxRoutes: number,
        arriPosition: Array<number>, arriInitialPosition: Array<number>, intRange: number) {
        this.strMainPath = strMainPath;
        this.strNameFileOutput = (strMainPath + strNameFileOutput);
        this.strNameFileInput = (strMainPath + strNameFileInput);
        this.intMaxRoutes = intMaxRoutes;
        this.arriPosition = arriPosition;
        this.arrsNamePosition = ["Norte", "Oriente", "Sur", "Occidente"];
        this.chaRotateLeft = chaRotateLeft;
        this.chaRotateRigth = chaRotateRigth;
        this.chaAdvance = chaAdvance;
        this.arriInitialPosition = arriInitialPosition;
        this.intRange = intRange;
    }
    private MovementinZ(intMin: number, intMax: number, blnRigth: boolean) {
        if (this.arriPosition[2] == intMax) {
            this.arriPosition[2] = intMin;
        }
        else if (blnRigth) {
            this.arriPosition[2]++;
        }
        else if (!blnRigth) {
            this.arriPosition[2]--;
        }
    }
    private MovementinXY() {
        if (this.arriPosition[2] == 0) {
            this.arriPosition[1]++;
        }
        else if (this.arriPosition[2] == 1) {
            this.arriPosition[0]++;
        }
        else if (this.arriPosition[2] == 2) {
            this.arriPosition[1]--;
        }
        else if (this.arriPosition[2] == 3) {
            this.arriPosition[0]--;
        }
    }
    public Movement(character: string) {
        if (character == this.chaRotateLeft) {
            this.MovementinZ(3, 0, false);
        }
        else if (character == this.chaRotateRigth) {
            this.MovementinZ(0, 3, true);
        }
        else if (character == this.chaAdvance) {
            this.MovementinXY()
        }
    }
    public GoBack(){
        this.arriPosition=this.arriInitialPosition;
    }



}
export { Dron }