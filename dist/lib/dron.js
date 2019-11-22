"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dron {
    constructor(chaRotateLeft, chaRotateRigth, chaAdvance, strMainPath, strNameFileOutput, strNameFileInput, intMaxRoutes, arriPosition, arriInitialPosition, intRange) {
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
    MovementinZ(intMin, intMax, blnRigth) {
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
    MovementinXY() {
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
    Movement(character) {
        if (character == this.chaRotateLeft) {
            this.MovementinZ(3, 0, false);
        }
        else if (character == this.chaRotateRigth) {
            this.MovementinZ(0, 3, true);
        }
        else if (character == this.chaAdvance) {
            this.MovementinXY();
        }
    }
    GoBack() {
        this.arriPosition = this.arriInitialPosition;
    }
}
exports.Dron = Dron;
//# sourceMappingURL=dron.js.map