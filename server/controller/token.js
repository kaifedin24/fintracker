const axios = require('axios');
var qs = require('qs');
//const fetch = require('cross-fetch');
require('dotenv').config();

/*
const getBearerToken = (req,res) =>{
    async () => {
    try {
      const { data: { access_token } } = await axios({
        url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Accept-Language': 'en_US',
          'content-type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: process.env.CLIENTID,
          password: process.env.SECRET,
        },
        params: {
          grant_type: 'client_credentials',
        },
      });
      console.log('access_token: ', access_token);
      res.status(200).json({success:true, access_token: access_token})
    } catch (e) {
      console.error(e);
      res.status(400).json({success:false, msg: e})
    }};

}
*/

var data = qs.stringify({
  'grant_type': 'client_credentials' 
});
var config = {
  method: 'post',
  url: 'https://api.paypal.com/v1/oauth2/token',
  headers: { 
    'Authorization': `Basic ${Buffer.from(`${process.env.CLIENTID}:${process.env.SECRET}`, 'utf8').toString('base64')}`, 
    'Content-Type': 'application/x-www-form-urlencoded'
  },

  data : data
};


async function getBearerToken(){
  let token = await axios(config)
  return token.data.access_token;
};


module.exports = {getBearerToken}; 