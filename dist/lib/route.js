"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
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
}
exports.Route = Route;
//# sourceMappingURL=route.js.map