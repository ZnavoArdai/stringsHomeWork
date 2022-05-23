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

// longValue([{name:"booda",city:"rishon lezion",gender:women"}])



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
7//     return !char1;
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

// function howManyChars(){
//     var name=prompt("enter name");
//     var temp=false;
//     var holder="";
//     var holder2="";

// for(var i=0;i<name.length;i++){

//     if(name[i]==" "){
//         temp=true;
        
//     }

//    holder=name.substring(0,name.indexOf(" "))
//    holder2=name.substring(name.indexOf(" "))

// }
// if(temp==true){
//     console.log("yes there is gap "+name.length+holder+holder2)

// }
// }
// howManyChars();

//21

// function twoStrings(one="",two=""){

//    one=one.toLowerCase();
//    two=two.toLowerCase();

//    if(one==two){
//        console.log("equal")
//    }
// }
// twoStrings("one","one");

//22
// function twoStrings(one="",two=""){

//        one=one.toUpperCase();
//        two=two.toUpperCase();
    
//        if(one==two){
//            console.log("equal")
//        }
//     }
//     twoStrings("oNe","one");

//23
// function fullName(){
// var fname=prompt("enter first name");
// var lname=prompt("enater last name");
// if(fname.length>lname.length){
//     console.log9(fname)
// }
// else if(fname.length<lname.length){
//     console.log(lname)

// }
// else
// console.log("equal")

// }
// fullName();

//24
// function fullName(){
// var fname=prompt("enter first name");
// var lname=prompt("enater last name");
// if(fname.includes("a")){
//     console.log("yes")
// }
// if(fname.includes("a"+"p"+"i")){
//     console.log("ye s")
// }
// }
// fullName();
//25
// function lengthOfWord(x=""){
// if(x.length>5){
//     return "to long"
// }
// else
// return "to short"
// }
//26
// function lengthOfCuntry(x=""){
// if(x.length==3){
//     return "yes"
// }
// else
// return "no"
// }
//27
// function lengthOfString(x="",y=""){
//     if(x.length>6){
//         return x;
//     }
//     else
//     return x.indexOf(y)
//     }

//28

// function indexOfChar(x="",y=""){
//         if(x.includes(y)){
//             return x.indexOf(y);
//         }
//         else
//         return x;
//         }

//29
// function fullName(){
// var fname=prompt("enter first name");
// var lname=prompt("enater last name");

// return fname.substr(0,1)+". "+lname.toUpperCase();
// }

//30
// function findchar(name="",ch=""){
//     if(name.includes(ch)){
//         return name;
//     }
//     else
//     return "not exsit"
// }

//31
























