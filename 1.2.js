function transferToSimpleArray(arrayOfNum) {
    let tempArray = [];
    for (let i = 0; i < arrayOfNum.length; i++) {
        if (Array.isArray(arrayOfNum[i])) {
            tempArray = tempArray.concat(transferToSimpleArray(arrayOfNum[i]));
        } else {
            tempArray.push(arrayOfNum[i]);
        }
    }
    return tempArray;
}

console.log(transferToSimpleArray([1, [2, [3, 4], 6]]))
