/** More details */
interface IDron {
    readonly chaRotateLeft        :string;
    readonly chaRotateRigth       :string;
    readonly chaAdvance           :string;
    readonly strMainPath          :string;
    readonly strNameFileOutput    :string;
    readonly strNameFileInput     :string;
    readonly intMaxRoutes         :number;
    readonly arriPosition         :Array<number>;
    readonly arrsNamePosition     :Array<string>;
    readonly arriInitialPosition  :Array<number>;
    readonly intRange             :number; 
    readonly arrsDeliveries: Array<string>;
}
export { IDron };