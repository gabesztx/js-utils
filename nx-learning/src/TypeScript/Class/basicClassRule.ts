class Greeter2 {

    ujvaltozo: string; //ez defaultban public
    public name: string;
    private id: number;
    
    constructor() {
        this.name = 'Györgyi';
        this.id = 20;
        this.ujvaltozo = 'ujváltozó'
        // console.log(this.name);
        // console.log(this.id); //konstruktoron belül elérjük a prvate-t is
    }
    
    public getName(){
        return this.name;

    }
     private getId(){
        return this.id;
    }

}
let greeter2 = new Greeter2();
console.log(greeter2.ujvaltozo);
console.log(greeter2.getName());
//console.log(greeter2.getId()); //angularban nem fordul le