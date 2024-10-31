function GetApi(id){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("Got the API for: ", id)
            resolve(200)

        },2000)
    })
}