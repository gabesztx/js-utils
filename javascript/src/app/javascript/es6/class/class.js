class BasicClass1 {
  constructor() {
    console.log('BasicClass1 Constructor');
    this.id = 0;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }
}

export default BasicClass1;