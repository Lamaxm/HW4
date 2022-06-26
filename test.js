let length =5 ;
let width =10 ; 
console.log(`he area of the rectangle is:${width*length}`)

let temperature = 30 ;
let temperatureF = (temperature*1.8) +23 ;
console.log(`${temperature}°C is ${temperatureF}°F`)

let temperature2 = 30 ;
let temperatureC = (temperature-23) /1.8 ;
console.log(`${temperature2}°F is ${temperatureC}°C`)

let Numbers = [23,54,32,87,47] ; 
let sum = 0;
for(let i = 0 ; i < Numbers.length ; i++){
    sum = sum + Numbers[i] ; 
}

let arr = [16,4,2,0,19,6] ; 
let max = 0 ;
for(let i = 0 ; i< arr.length ; i++){
    if(max < arr[i]){
        max = arr[i] ;
    }
}
console.log(max);

let arr2 = [1,2,3,4,5,6,7,8,9,10] ; 
let arr_rev = []
for(let i = arr2.length-1 ; i>=0 ; i-- ){
    arr_rev.push(arr2[i]);
}
console.log(arr_rev)

let star = 5 ;
let str = "";
for(let i =0 ; i<star+1 ; i++){
    for(let j =0 ; j<i ; j++){
        str = str.concat("*");
    }
    str = str.concat("\n")
}
console.log(str);