import { Dron } from './dron';
import { MyFile } from './managerfile';

class Route {
    /**
     * Async Method to execute the route the Drone from the text File 
     * @param ObjDron Objected created with the class dron
     */
    public asyncStart(ObjDron: Dron) {
        var promise = new Promise(() => {
            var BreakException = {};
            try {
                var intCounter: number = 0;
                var objFile = new MyFile();
                objFile.createFile(ObjDron.strNameFileOutput, "== Reporte de entregas ==\n");

                if (objFile.FileExist(ObjDron.strNameFileInput)) {
                    let arrlines: Array<string> = objFile.ReadLines(ObjDron.strNameFileInput);
                    arrlines.forEach(function (strlineRead) {
                        if (intCounter + 1 <= ObjDron.intMaxRoutes) {
                            let chaLetter: Array<string>;
                            chaLetter = Array.from(strlineRead.toUpperCase());
                            chaLetter.forEach(function (character) {
                                ObjDron.Movement(character);
                            });
                            ObjDron.arrsDeliveries[intCounter] = "(" + ObjDron.arriPosition[0] + ", " + ObjDron.arriPosition[1] + ')' + " dirección " + ObjDron.arrsNamePosition[ObjDron.arriPosition[2]];
                        }
                        else {
                            ObjDron.GoBack();
                            ObjDron.arrsDeliveries[intCounter] = "Se supero el numero maximo de envios (" + ObjDron.intMaxRoutes + ") el Dron a sido enviado al puesto de control";
                            throw BreakException;
                        }
                        if (ObjDron.arriPosition[0] < ObjDron.arriInitialPosition[0] || ObjDron.arriPosition[0] >  ObjDron.arriInitialPosition[0]+ ObjDron.intRange
                            || ObjDron.arriPosition[1] < ObjDron.arriInitialPosition[1] || ObjDron.arriPosition[1] > ObjDron.arriInitialPosition[1] + ObjDron.intRange) {
                            ObjDron.GoBack();
                            ObjDron.arrsDeliveries[intCounter] = "Se supero el rango en la ruta de envios (" + ObjDron.intRange + ") por seguridad el Dron a sido enviado al puesto de control";
                            throw BreakException;
                        }
                        intCounter++;
                    });
                }
                else {
                    ObjDron.arrsDeliveries[intCounter] = "No se pudo encontrar el archivo en la ruta " + ObjDron.strNameFileInput
                    throw BreakException;
                }

                objFile.WriteLines(ObjDron.strNameFileOutput, this.Message(ObjDron.arrsDeliveries));
            } catch (e) {
                if (e !== BreakException) throw e
                objFile.WriteLines(ObjDron.strNameFileOutput, this.Message(ObjDron.arrsDeliveries));
            }
        });
        return promise;
    }
    /**
     * Method to manage the mesages to write in the output file
     * @param arrMessages Array of string with all mesages for Dron
     */
    private Message(arrMessages: Array<string>): string {
        let strDeliveries: string = '';
        arrMessages.forEach(function (strmessage) {
            strDeliveries += strmessage + '\n';
        })
        return strDeliveries;
    }
}
export { Route }


