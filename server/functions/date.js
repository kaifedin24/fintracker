const fetchLog = require('../models/fetchLogSchema')

/*
function currentTimezoneISO8601 (date_ob){

    const tz = date_ob.getTimezoneOffset();
    const tzVz = tz.toString().at(0);
    const tzOhneVz = tz.toString().slice(1);
    const tzStunden = ("0" + ~~(tzOhneVz / 60)).slice(-2)
    const tzMinuten = ("0" + tzOhneVz % 60).slice(-2)

    const tzISO = tzVz + tzStunden + tzMinuten;
    console.log("timezone: " + tzISO);
    return tzISO;

}

function convertDateISO8601UTC(date_ob){

    let res = date_ob.toISOString();
    console.log("test1234")
    console.log(res);
    return res;
    return res.slice(0, -1);


}

function convertDateISO8601 (date_ob){

    console.log(date_ob);
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);
    let timezone = currentTimezoneISO8601(date_ob);

    const dateISO = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}${timezone}`;
    return dateISO;
}
*/

async function getLastPPFetchDate(){

    let query = await fetchLog.find({source: 'paypal'}).select('timeISO -_id').exec();
    console.log(query);

    if(query.length == 0){
        return false;
    }
    query = query[query.length - 1];
    return query.timeISO;
}


const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}



//022-02-17T00:00:00-0100
module.exports = {convertDateISO8601, getLastPPFetchDate, dateDiffInDays,convertDateISO8601UTC};