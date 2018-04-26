class Greeting {
    numberValue: number;
    constructor(numberValue_:number) {
        this.numberValue = numberValue_;
        console.log('constructor',this.numberValue)
    }
   redefineNumberValue(added: number){
    console.log('redefineNumberValue',this.numberValue)
   }
}
let greeting = new Greeting(18);
greeting.redefineNumberValue(100)