// Problem - 01 // 

// This function is called to use 4 different Javascript operations on a single function. At first with the input 5, it is multiply byt 3 then it did addition with 10 then did division by 2 then from the division number it was substract by 5. I have called 3 different function with 3 different inputs to understand it better from my sided. //

// Input - 1 - '5' //

// function mindGame(number){

//     const multi = number * 3;
//     const add   = multi + 10;
//     const divison = add / 2;
//     const sub     = divison - 5;
//     return sub;

// }

// const mynumber = 5;
// const finalResult = mindGame(mynumber);

// console.log(finalResult);


// Input - 2 - '50' //

// function mindGame(number){

//     const multi = number * 3;
//     const add   = multi + 10;
//     const divison = add / 2;
//     const sub     = divison - 5;
//     return sub;

// }

// const mynumber = 50;
// const finalResult = mindGame(mynumber);

// console.log(finalResult);


// Input - 3 - '33' //

// function mindGame(number){

//     const multi = number * 3;
//     const add   = multi + 10;
//     const divison = add / 2;
//     const sub     = divison - 5;
//     return sub;

// }

// const mynumber = 33;
// const finalResult = mindGame(mynumber);

// console.log(finalResult);




// Problem - 02 // 

// This function was called to find out the odd and even from the input string. As the word "Phero" have 5 index, the output will come odd and for input "Batch7" have 6 index, the output will come even. Same as  the chatgpt input. It has 7 index so odd output will come. 

// function evenOdd(words){
    

//     for (let i = 0; i < words.length; i++ ){
//         if (words[i].length % 2 === 0) {
//             console.log("even");
//         }
//         else {
//             console.log("odd");
//         }
//     }
// }

// let textOutput = ["phero", "batch7", "chatgpt"];

// evenOdd(textOutput);


// Problem - 03 // 

// Function Explains: On this function I had to substract 7 from the input numbers. If the substracted value is less than 7 then it will show the exact value after substraction. If the result come more than 7 then the amount will be 2* mulitply with the actual input. 




// function isLGSeven(numbers){

//     let result = numbers - 7;

    //  if(result < 7){
    //         console.log(result)
    //  }

    //  else{
    //         console.log(numbers*2);
    // }
// }
  
// isLGSeven(6);
// isLGSeven(-15);
// isLGSeven(15);


// Problem - 04 // 

// function Explains : This is function to find out how many negative numbers are there in the Arrya. I able to find out the total number of bad data(negative numbers) on 3 different inputs. The first input did not have any negative numbers so the output came 0. On the second input, 3 negative number came so the output is 3 and on third input, there are 5 negative numbers in total. // 

// function findingBadData(numbers){
//     let count = 0;

// for (let i = 0; i <numbers.length; i++){
//     if(numbers[i] < 0){
//         count++
//     }
// }
//     return count;
// }
// // let numbers = [1, 2, 5];
// // let numbers = [ 2, -5, -7, -13 ];
// let numbers = [ -4, -9, -5, -33, -55 ];
// let negativeCount = findingBadData(numbers);

// console.log(negativeCount);


// Problem - 05 // 

function gemsToDiamond(gems1,gems2,gems3){
    let gems1Multiply = gems1 * 21
    let gems2Multiply = gems2 * 32
    let gems3Multiply = gems3 * 43

    let allGemsCount = gems1Multiply+gems2Multiply+gems3Multiply;

    

    if(allGemsCount < 2000){
        console.log(allGemsCount);
    }
    else{
        console.log(allGemsCount - 2000);
    }

}

gemsToDiamond(1,1,1);
gemsToDiamond(20,200,50);
gemsToDiamond(100,5,1);







