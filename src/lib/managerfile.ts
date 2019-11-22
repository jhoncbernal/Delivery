
class MyFile {

    // Here we import the File System module of node
    private fs = require('fs');
    private lineByLine = require('n-readlines');
    constructor() { }
    WriteLines(strPath:string,strtext:string) {

        this.fs.appendFile(strPath, strtext + '\n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    createFile(strFileName: string, strtext: string = '') {

        this.fs.writeFile(strFileName, strtext, function (err) {
            if (err) {
                return console.error(err);
            }
        });
    }


    ReadLines(strFileName: string) : Array < string > {

                const liner = new this.lineByLine(strFileName);

                let line;
                let arrsLine=new Array<string>();
                let counter: number = 0;
                while(line = liner.next()) {

                    arrsLine[counter] = String(line).replace('\r', '');
                    counter++;
                }

return arrsLine;
            }
}
export { MyFile }