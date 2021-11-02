const balance = 1000 ;
if (balance <= 0 ){
console.log('Please deposit some money!')
}else if( balance>0 && balance <= 1000){
    console.log('Your balance is looking okay')
}else if(balance>1000 && balance<=3000){
    console.log('Your balance is looking good')
}else if(balance>3000 && balance<=10000){
    console.log('Your balance is fantastic')
}else if(balance>10000){
console.log('Your balance is AMAZING!')
}


// second ex 

for (let i = 10; i >= 0; i--) {

if (i == 10)  {
    console.log ("it started");
    continue;
     
} else if (i == 0) {
    console.log ("happy new year");
    break;
} 
else 
console.log (i) 
}






