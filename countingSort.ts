function countingSort (arr: number[]) {
//A
    let highestNumber = Math.max(...arr); //k
    let indexArray = new Array(highestNumber + 1).fill(0); //c
    let finalArray = new Array(arr.length); //B

    for(var i = 0; i < highestNumber; i++){ 
        indexArray[i] = 0
    }

    for(var j = 0; j < arr.length; j++){ 
        indexArray[arr[j]] = indexArray[arr[j]] + 1
    }

    for(var i = 1; i < highestNumber; i++){  
        indexArray[i] = indexArray[i] + indexArray[i - 1]
    }

    for(var j = arr.length - 1; j >= 0 ; j--){ 
        finalArray[indexArray[arr[j]] - 1] = arr[j];
        indexArray[arr[j]] = indexArray[arr[j]] - 1;
    }
    console.log(highestNumber)
    return finalArray;
    
}

const try1 = countingSort([1,4,7,8,4,2,15]);
console.log(try1);
