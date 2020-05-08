export class EditorTestRowType {
  // #region decorators editorTestID
  hello = ''
  constructor() {
    // #region ctor user-override
    // this.editorTestID = null;
    // this.date1 = null;
    // this.testElementsOfSelectType = GlobalEnums.from(TestTextFieldType, 'TestTextFieldType')[0];
    // this.textField = null;

    //sajnos hiába adom itt hozzá az ikonokat az input componens nem látja, így ott kell felvenni
    //ez azért nem jó így mert ha valaki új ikonokat szeretne azt csak a komponenesben tudja csak felvenni
    //library.add(faSmileWink, faHeartBroken, faCommentDots);

    // #endregion ctor user-override
  }

  // #region class user-implementation

  // #endregion class user-implementation
}
console.log('EditorTestRowType', [EditorTestRowType]);
