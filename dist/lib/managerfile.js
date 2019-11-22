"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyFile {
    constructor() {
        // Here we import the File System module of node
        this.fs = require('fs');
        this.lineByLine = require('n-readlines');
    }
    WriteLines(strPath, strtext) {
        this.fs.appendFile(strPath, strtext + '\n', function (err) {
            if (err)
                throw err;
            console.log('Saved!');
        });
    }
    createFile(strFileName, strtext = '') {
        this.fs.writeFile(strFileName, strtext, function (err) {
            if (err) {
                return console.error(err);
            }
        });
    }
    ReadLines(strFileName) {
        const liner = new this.lineByLine(strFileName);
        let line;
        let arrsLine = new Array();
        let counter = 0;
        while (line = liner.next()) {
            arrsLine[counter] = String(line).replace('\r', '');
            counter++;
        }
        return arrsLine;
    }
}
exports.MyFile = MyFile;
//# sourceMappingURL=managerfile.js.map