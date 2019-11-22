"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dron_1 = require("./lib/dron");
const managerfile_1 = require("./lib/managerfile");
var objFile = new managerfile_1.MyFile();
objFile.createFile("out.txt", "== Reporte de entregas ==\n");
var ObjDron = new dron_1.Dron('I', 'D', 'A', '', "out.txt", "in.txt", 3, [0, 0, 0], [0, 0, 0], 10);
let arrlines = objFile.ReadLines(ObjDron.strNameFileInput);
var intCounter = 0;
let strtext;
arrlines.forEach(function (strlineRead) {
    intCounter++;
    if (intCounter <= ObjDron.intMaxRoutes) {
        let chaLetter;
        chaLetter = Array.from(strlineRead.toUpperCase());
        chaLetter.forEach(function (character) {
            ObjDron.Movement(character);
            strtext = "(" + ObjDron.arriPosition[0] + ", " + ObjDron.arriPosition[1] + ')' + " dirección " + ObjDron.arrsNamePosition[ObjDron.arriPosition[2]];
        });
        objFile.WriteLines(ObjDron.strNameFileOutput, strtext);
    }
    else {
        ObjDron.GoBack();
        objFile.WriteLines(ObjDron.strNameFileOutput, "Se supero el numero maximo de envios (" + ObjDron.intMaxRoutes + ") el Dron a sido enviado al puesto de control");
    }
    if (ObjDron.arriPosition[0] > ObjDron.arriInitialPosition[0] || ObjDron.arriPosition[0] < ObjDron.arriInitialPosition[0] - ObjDron.intRange
        || ObjDron.arriPosition[1] < ObjDron.arriInitialPosition[1] || ObjDron.arriPosition[1] > ObjDron.arriInitialPosition[1] + ObjDron.intRange) {
        ObjDron.GoBack();
        objFile.WriteLines(ObjDron.strNameFileOutput, "Se supero el rango en la ruta de envios (" + ObjDron.intRange + ") por seguridad el Dron a sido enviado al puesto de control");
    }
});
//# sourceMappingURL=main.js.map