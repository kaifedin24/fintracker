function currentTimezoneISO8601 (){

    const date_ob = new Date();
    const tz = date_ob.getTimezoneOffset();
    const tzVz = tz.toString().at(0);
    const tzOhneVz = tz.toString().slice(1);
    const tzStunden = ("0" + ~~(tzOhneVz / 60)).slice(-2)
    const tzMinuten = ("0" + tzOhneVz % 60).slice(-2)

    const tzISO = tzVz + tzStunden + tzMinuten;
    return tzISO;

}


function currentDateISO8601 (){
    const date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);
    let timezone = currentTimezoneISO8601();

    const dateISO = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}${timezone}`;
    return dateISO
}

//022-02-17T00:00:00-0100
module.exports = currentDateISO8601;