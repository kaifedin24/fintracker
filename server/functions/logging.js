const fetchLog = require('../models/fetchLogSchema');


async function logDate(date) {
    console.log("TRY TO LOG")
    // CHECK IF FUNCTION SHOULD BE ASYNC
    //console.log(fetchlog.find.....)
    console.log("TEST find fetchlogs & print")
    let query = await fetchLog.find({source: 'paypal'}).exec();

    if(query.length != 0){

            console.log("FOUND?!")
            await fetchLog.updateOne({source: 'paypal'},{timeISO: date}, (err,result) =>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                }
            });
    }else{

        console.log("TRY TO LOG 2")



        const curFetch = new fetchLog({
            source: 'paypal',
            timeISO: date
        })
    
        await curFetch.save()
            .then((result) => console.log(result))
            .catch(error => console.log(error))
    }

}

module.exports = logDate;