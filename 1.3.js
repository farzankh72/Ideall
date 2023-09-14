function promiseBase() {
    // I dont understand the real meaning of question but here is a promise with 2 state
    const promise = new Promise(((resolve, reject) => {
        reject('This promise Rejected')
    }))

    const promise2 = new Promise(((resolve, reject) => {
        resolve('this promise resolved')
    }))

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('resolved after a while')
        },5000)
    })

    promise3.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('here we can for example false the loading, because promise is done!')
    })
}

promiseBase()