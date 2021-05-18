# Calculate total payment for hamburger sales

## Description

A vendor offers single, double, and triple hamburgers, which cost USD  2, USD 3, and USD 4 respectively. The company accepts credit cards with a 5% charge on the purchase. Assuming that customers buy N hamburgers, which can be of different types, calculate how much they must pay

## Usage

```Javascript

let  calcular_total_pay_hamburgers=require("./calcular_total_pay_hamburgers").calcular_total_pay_hamburgers;
let Burger=require("./burger").Burger;

 let arrayburger=[];

 arrayburger.push(new Burger("Basic"));
 arrayburger.push(new Burger("Double"));
 arrayburger.push(new Burger("Triple"));


const show_hamburgers_total_pay=(burgers,payment_method)=>
{
    let calc=calcular_total_pay_hamburgers(burgers,payment_method);
    console.log("----------------------------------------------------");
    console.log("                       ");
    console.log("The total to pay is: "+calc);
  
    
    
}
const show_hamburgers_details=(burgers)=>
{
    console.log("------------YOUR PURCHASE--------------")
    console.log("                                          ")
    burgers.map(
      bur=>  {
        if(bur.type==="Basic")
        {
         console.log("Basic Burguer: USD "+2);
         console.log("                       ");
        }
        if(bur.type==="Double")
        {
            console.log("Double Burguer: USD "+3);
            console.log("                       ");
        }
        if(bur.type==="Triple")
        {
            console.log("Triple Burguer: USD "+4);
            console.log("                      ");
        }
        }
    )
}
show_hamburgers_details(arrayburger);
show_hamburgers_total_pay(arrayburger,"Cash");

```