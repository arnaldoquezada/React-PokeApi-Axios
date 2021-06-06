const noMondays = new Promise( (resolve, reject) =>{
    if(new Date().getDay() !==1){
        resolve("Good, It's not Monday");
    }else {
        reject("Someone has a case of the Mondays!")
    }
});
console.log(noMondays)


function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}



function fiveHeads() {
    return new Promise( (resolve, reject) => {
       
        
        });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );