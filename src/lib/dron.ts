import { IDron } from './idron'
/**
 * See the [[IDron]] interface for more details.
 */
class Dron implements IDron {
    readonly chaRotateLeft      :string;
    readonly chaRotateRigth     :string;
    readonly chaAdvance         :string;
    readonly strMainPath        :string;
    readonly strNameFileOutput  :string;
    readonly strNameFileInput   :string;
    readonly intMaxRoutes       :number;
    arriPosition                :Array<number>;
    readonly arrsNamePosition   :Array<string>;
    readonly arriInitialPosition:Array<number>;
    readonly intRange           :number;
    readonly arrsDeliveries     :Array<string>;
/**Create of Objects Dron 
 * @param chaRotateLeft         Character that activates rotation engine Left.    
 * @param chaRotateRigth        Character that activates rotation engine Rigth.
 * @param chaAdvance            Character that activates Advance to front
 * @param strMainPath           String with Path where found the Files txt (in and out)
 * @param strNameFileOutput     String with Name of File output
 * @param strNameFileInput      String with Name of File input
 * @param intMaxRoutes          Number maximum of stops that it can do
 * @param arriPosition          Array of numbers (X,Y,Z) whith the actual position of the Dron
 * @param arrsNamePosition      Array of strings with the Name of orientations that it can do like (North, East, West, South)
 * @param arriInitialPosition   An array of numbers with the position of Control Panel (Start of Drone) ubicated for default in Left Bottom
 * @param intRange              Number of neiborhoods before Control panel 
 * @param arrsDeliveries        An array of strings with the message to coordinates or error message when arrived 
 */
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
        this.arrsDeliveries=new Array<string>();
    }
    /**
     * this method allow the movements in Z (North, East, West, South) for the Drone
     * @param intMin Number of Minimum position (0=North) this with the end of avoiding confusions in the rotate of the Drone
     * @param intMax Number of Maximum position (4 change to 0=North)
     * @param blnRigth Boolean if is true the engine right turn if is false the engine left turn on 
     */
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
    /**
     * This method read de actual position of the Drone before that evaluate the character increased in the route for takeoff decision if go to (Left, Right,Up, Down) in X Y
     *      */
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
    /**
     * This method decides from the character in which direction rotate and after advance
     * @param character string with one character define like A= advance, I= left, D=Rigth
     */
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
    /**
     * this method returns the default position of the Drone (Control Panel)
     */
    public GoBack(){
        this.arriPosition=this.arriInitialPosition;
    }
}
export { Dron }