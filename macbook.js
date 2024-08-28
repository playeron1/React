import { Computer } from "./computer.js";
class Macbook extends Computer{
    constructor(name,company){
        super(name)
        this.company = company
    }
    login(){
        console.log(" You have logged into a Macbook "+this.name)
    }
}
export default Macbook