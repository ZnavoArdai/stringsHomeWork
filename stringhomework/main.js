// function bigWords(x){
// x=x.toUpperCase();

// return console.log(x);
// }

// bigWords("babsd");

//2

// function newOrder(y){
//     var x=[];
//    for(var i=0;i<y.length;i++){
//        console.log(y[i]);

//        if(y[i]!=","){
//         x.push(y[i]);
//        }
//    } 
//    return console.log(x);
// }
// newOrder("1,2,3,55");

// //3
// function longValue(x=[]){
// var j=[];
//     for(var i=0;i<x.length;i++){

// if(x[i].length){
//     j[0]=x[i]
// }
//     }

//     console.log(j)
// }

// longValue([{name:"booda",city:"rishon lezion",gender:"gay"}])



//7


// function longOrShort(x=[]){
//     if(x.length>5){
//     return console.log("long")
//     }
//     else
//     return console.log("short")

// }

// longOrShort([1,2,3,45])

//8
// function exsistchar(x){
//     if(x.includes("a")){
// return console.log(x.indexOf("a"))
//     }

//     else
//     return console.log("not fund")
// }
// exsistchar("rddd")

//9

// function exsistchar1(x){
//     var char1=true;

//     if(x.includes("r")){
//         return char1;
//     }
//     else
//     return !char1;
// }
// exsistchar1("xsadsad")
//10

// function charExsist(x,j){
// var char1=true;
//     if(x.includes(j)){
//         return char1;

//     }
//     else
//     return !char1;
// }

//11

// function charExsist(x,j){
//     if(x.includes(j)){
//         return x.lastIndexOf(j);

//     }
//     else
//     return "not exist";
// }

//12
// function threeChars(x){

//     var tempp=x.substr(0,3)
//     return console.log(tempp);

// }

// threeChars("sayonara")

//13

// function fromToEnd(x){

//    for(var i=0;i<x.length;i++){
//     if(x[i]=="o"){
//         x=x.substr(i);
//     }
//    }

//    console.log(x);
// }
// fromToEnd("sayonara")

//14

// function indexAndLength(x,y){
//     var temp;
//     if(x>y.length){
//         return console.log("to big");

//     }

//     else{
//         temp=y.substr(x);
//         return console.log(temp)
//     }

// }

// indexAndLength(7,"bavna")

//15
// function indexAndLength(x,y){
//     var temp;
//     if(x>y.length){
//         return console.log("to big");

//     }

//     else{
//         temp=y.substr(x,3);
//         return console.log(temp)
//     }

// }

// indexAndLength(0,"bavna")

//16


// function twoNumbersBorder(x,num1,num2){
// var temp;
// if(num1>x.length||num2>x.length){
//     console.log("one of the number is to big");
// }
// else
// {
//    x=x.substr(num1,num2);

//    return console.log(x);
// }


// }

// twoNumbersBorder("znavo",1,4)

//17
// function firstThreeCharcts(x){
// x=x.substr(0,3)

// return console.log(x) ;

// }
// firstThreeCharcts("sayonara")

//18
// function formYtoEnd(x){
//     var temp;

// temp=x.indexOf("y");
// x=x.substr(temp,4)

// return console.log(x) ;

// }
// formYtoEnd("sayonara")

//19
// function formYtoEnd(x){
//     var temp;

// temp=x.indexOf("o");
// x=x.substr(temp)

// return console.log(x) ;

// }
// formYtoEnd("sayonara")

//20








