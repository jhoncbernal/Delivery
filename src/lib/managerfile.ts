class MyFile {
    /**
     * Import the File System module of node fs for write and read files
     * Import the File System module of node lineByline for read Line by line files
     */
    private fs = require('fs');
    private lineByLine = require('n-readlines');
    constructor() { }

    /**
     * Method to write all file this method overwrites if is necessary
     * @param strPath string with Path of File
     * @param strtext string with the text to write
     */
    WriteLines(strPath: string, strtext: string) {
        this.fs.appendFile(strPath, strtext, 'utf8',
            function (err) {
                if (err) throw err;
            });
    }
    /**
     * Method to create new File with the option of add text 
     * @param strFileName   string with the Path and Name of the File
     * @param strtext       string with the text of the file
     */
    createFile(strFileName: string, strtext: string = '') {
        this.fs.writeFile(strFileName, strtext, function (err) {
            if (err) throw err;
        });
    }

    /**
     * Method to read files line by line
     * @param strFileName string with the Path and Name of the File
     */
    ReadLines(strFileName: string): Array<string> {
        try {
            const liner = new this.lineByLine(strFileName);
            let line;
            let arrsLine = new Array<string>();
            let counter: number = 0;
            while (line = liner.next()) {
                arrsLine[counter] = String(line).replace('\r', '');
                counter++;
            }
            return arrsLine;
        }
        catch (err) {
            throw err
        }
    }

    /**
     * Method to verify if a file exist
     * @param strFileName string with the Path and Name of the File
     * @returns boolean with the validation 
     */
    FileExist(strFileName):boolean {
        if (this.fs.existsSync(strFileName)) {
            return true;
        } else {
            return false;
        }
    }
}
export { MyFile }