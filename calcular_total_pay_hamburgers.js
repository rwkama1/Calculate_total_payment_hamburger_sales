const  calcular_total_pay_hamburgers=(burgers,payment_method)=>
{
    let total=0;
    burgers.map(
            burguer=>{

                if(burguer.type==="Basic")
                {
                    total=total+2;
                }
                if(burguer.type==="Double")
                {
                    total=total+3;
                }
                if(burguer.type==="Triple")
                {
                    total=total+4;
                }
            })
if(payment_method==="Cash")
{
    return total;
}
if(payment_method==="Card")
{
    total=total+(total*.05)
    return total;
}
}


module.exports={calcular_total_pay_hamburgers};
