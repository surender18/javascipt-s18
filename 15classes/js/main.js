//classes
// class pizza{
//     constructor(pizzatype,pizzasize){
//         this.type = pizzatype;
//         this.size = pizzasize;
//         this.crust = "original"

//     }
    // getCrust(){
    //     return this.crust;
    // }
    // setCrust(pizzaCrust){
    //     this.crust = pizzaCrust;
    // }
//     bake(){
//         console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);

//     }
// }
// const mypizza = new pizza("cheese","large");
// mypizza.setCrust("thin");
// mypizza.bake();
// console.log(mypizza.getCrust());

// class pizza{
//     constructor(pizzatype,pizzasize){
//         this.type = pizzatype;
//         this.size = pizzasize;
//         this.crust = "original"

//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
// }
// class specialtypizza extends pizza{
//     constructor(pizzasize){
//         super(pizzasize);
//         this.type ="the works";

//     }
//     slice(){
//         console.log(`our ${this.type} ${this.size} pizza has 6 slices.`);

//     }
// }
// const myspecialty = new specialtypizza("medium");
// myspecialty.slice();

//factory function
// function pizzafactory(pizzaSize){
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake:()=> console.log(`baking a ${size} ${crust } crust pizza.`)
//     };
// }
// const mypizza = pizzafactory("medium");
// mypizza.bake();

class pizza{
    crust = "original";
    #sauce = "red";
    #size;
    constructor(pizzasize){
        this.#size = pizzasize;
    }
    getcrust(){
        return this.crust;

    }
    SpeechRecognitionResultList(pizzacrust){
        this.crust = pizzacrust;
    }
    hereyougo(){
        console.log(`here 's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}
const mypizza = new pizza("medium");
mypizza.hereyougo();
console.log(mypizza.getcrust());