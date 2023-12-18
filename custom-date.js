
function getDate(){
    let date = new Date()
    return {
        "hour": date.getHours(),
        "minute":date.getMinutes(),
        "second":date.getSeconds()
    }
}

const getUnixTimestamp = () => {
    return {"unixtime": Date.now()}
} 


module.exports={ getUnixTimestamp, getDate}



