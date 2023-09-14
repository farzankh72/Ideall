function j1(arrayONum, type) {
    const tempArr = []
    if (type == 'dev') {
        arrayONum.map((item) => {
            tempArr.push(item)
        })
    } else {
        for (let i = 0; i < arrayONum.length; i++) {
            tempArr.push(arrayONum[i])
        }
    }

    return tempArr
}

j1([1, 2, 3, 4, 6], 'dev')