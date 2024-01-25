// var array =  [2, 3, 4, 5,8,10,12,13,14,15,16,17,18];

// var min = (array[0])


// for (var i = 0; i < array.length; i++)

// {
//     if (min > array[i])


//      min = array[i];

//     }
//     console.log(min);




// var sum = 0
// var avg = 0
// var i = 0
// while (i < 5) {
//   var input=+prompt("0-100 reqem daxil ediniz")
//   if (input < 0 || input > 100) {
//     console.log("0-100 eded daxil ed!!!")
//   }
//   else  {
//     sum += input
//     i++
//   }
// }
//   avg = sum/5
// if(avg>90){
//   console.log("Qiymet A",avg)
// }
// else if (avg>81) {
//    console.log("Qiymet B",avg)
// }
// else if (avg>71) {
//    console.log("Qiymet C",avg)
// }
// else if (avg>61) {
//    console.log("Qiymet D",avg)
// }
// else if (avg>51) {
//    console.log("Qiymet E",avg)
// }
// else {
//    console.log("KESILMISIZ")
// }






// input ile daxil edilen 10 ededin cemi

// var cem = 0

// for (let index = 0; index < 10; index++) {
//     var a =+prompt('Eded daxil ed')
//         cem += a
//     }
//     console.log(cem)






// musbet ededlerin cemi

// var cem = 0

// for (let i = 0; i < 10; i++) {
//     var a=+prompt('Eded Daxil et')
//     if (a>0) {
//         cem += a
//     } 
// }

// console.log(cem);










// input ile daxil olunan ededin 0 musbet veya menfi oldugu de
    
// var a =+prompt("eded daxil ed")
// var result 
//  if(a>0){
//     result = 'musbet'
//  }
//  else if(a==0){
//     result = '0'
//  }
//  else{
//     result ='menfi'
//  }
// console.log(result);









// input ile daxil edilen ededin 5 we tam bolunub bolunmemeyini tap
// var a =+prompt("eded daxil ed")
// var result 

// if(a%5==0){
//     result = 'bolunur'
// }
// else{
//     result = 'bolunmur'
// }
// console.log(result)




// ededin diskkriminantin tap 
// var a=+prompt('Eded Daxil et')
// var b=+prompt('Eded Daxil et')
// var c=+prompt('Eded Daxil et')

// var d = 0

// d = b*b-4*a*c

// console.log(d);






// ededden reqemlerinin cemin cix
// var a=+prompt('Eded Daxil et')

// var cem = 0 

// var b = a

// while (a !== 0) {
//     var qaliq = a%10
//     a = Math.floor(a / 10)
//     cem += qaliq
// }
// console.log(b - cem);








//1)erreyin ici dolu olsa  axrincini ici bos olsa -1
// function sonElemaniGetir(arr) {
//     if (arr.length > 0) {
//         return arr[arr.length - 1];
//     } else {
//         return -1;
//     }
// }
//var myArray = [1, 2, 3, 4, 5];
// var result = sonElemaniGetir(myArray);
// console.log(result);  

// var emptyArray = [];

// var resultEmpty = sonElemaniGetir(emptyArray);
// console.log(resultEmpty);








// 2) Bir mix array’iniz var 30’dan boyuk ededleri artan sıra ile ekranda göstermek     
// let arr = [20,30,66,50,32,90];
// let number = 30;
// let arr2 = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > number) {
//         arr2.push(arr[i])
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = i; j < arr2.length; j++) {
//         if (arr2[i] > arr2[j]) {
//             let temp = arr2[i];
//             arr2[i] = arr2[j];
//             arr2[j] = temp;
//         }
//     }
// }
// console.log(arr2);









//3) isdifadeci reqem daxil edir 4reqemli  ve reqemlerinin icinde 2 ve 3’cu reqemler eger cutduse  ekrana her ikisi cutdur cixacaq eğer biri tek biri cutdurse ekrana biri tek biri cutdur cixacaq eks halda her ikisi tekdise ekrana her ikisi tekdir cixacaq
// let n = +prompt("Dörtrəqəmli bir ədəd daxil edin:");


//     let a = Math.floor((n/10) %10);
//     let b = n / 100;
//     let cavab;

//     if (a % 2 === 0 && b % 2 === 0) {
//         cavab = "Hər ikisi cutdur.";
//     } else if (a % 2 !== 0 && b % 2 === 0) {
//         cavab = "Biri təkdir, biri cutdur.";
//     } else if (a % 2 === 0 && b % 2 !== 0) {
//         cavab = "Biri cutdur, biri təkdir.";
//     } else {
//         cavab = "Hər ikisi də təkdir.";
//     }

//     console.log(cavab);








//4)  Daxil olan ededden sonraki ilk n sade ededi tap?????????????????????????????????????????????????????????
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// let userInput = prompt("Bir ədəd daxil edin:");
// let startingNumber = parseInt(userInput);

// if (isNaN(startingNumber)) {
//     console.log("Düzgün ədəd daxil etməmisiniz.");
// } else {
//     let n = prompt("N-i daxil edin:");
//     let count = 0;
//     let currentNumber = startingNumber + 1;

//     while (count < n) {
//         if (isPrime(currentNumber)) {
//             count++;
//         }
//         currentNumber++;
//     }

//     console.log("Daxil edilmiş ədəddən sonraki ilk " + n + " sadə ədəd: " + (currentNumber - 1));
// }



// 5)  n=7
// 1
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
//   var string = ''

//   for (let i = 1; i<=n; i++) {
    
    //     for (let j = 1; j <= i; j++) {
        //       j += string + ' ' 
        //     }
        //     string += '\n'  
        //   }
        //   return string  
        // }
        // console.log(drawPyramid(7))
        
        
        







        
        // 6)  a = 4,b = 5
        // ****
        // ****
        // ****
        // ****
        // ****
        
        // var a = 4;
        // var b = 5;
        // var star = "";
        
        // for (var i = 0; i < b; i++) {
        //     for (var j = 0; j < a; j++) {
        //         star += "* ";
        //     }
        //     star += "\n";
        // }
        // console.log(star);
        










// 7)  mix array verilib icinde stringleri ekrana cixardın
//         var arr = [1, 'alma', 4, 'heyva', 5, 'armud'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }
// }

   





// 8)  mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın 

// var arr = [1, 'alma', 4, 'heyva', 5, 'armud'];
// for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             console.log(arr[i]);
//         }
//     }
        
        
        
        






// 9)  bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var
//     let myArray = [22, 19, 69, 79, 0, 2, 56, 89, 119, 149];

// let j = 1;

// for (let i = 0; i < myArray.length-1; i++) {
//     if (myArray[i] % 10 === 9) {
//         j++;
//     }
// }

// console.log("9la bitenler :" + j);





//10)  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin

// var  n=+prompt("eded daxil")
// var say=0
// for (let i=0;i<=n;i++){
//  if( n%i==0){
//     say=say+1
//  }
// }
// if(say>=3){
//   console.log("murekeb")
// }
// else{
//   console.log("sade")
// }




//11)  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin

// let n = +prompt("Bir ədəd daxil edin:");

//     let r = -1;
//     while (n > 0) {
//         let temp = n % 10;
//         if (temp > r) {
//             r = temp;
//         }
//         n = Math.floor(n / 10);
//     }

//     console.log("Ən böyük rəqəm: " + r);

