//Require axios to make POST Requests to API
const axios = require('axios');

//Require .env to be able to use Environment Variables
const dotenv = require('dotenv')

//Settings Object with a specified path route has to be added,
//otherwise CLIENTID and SECRET will be undefined/not found
dotenv.config({ path: '../.env'})

//ClientID and Secret have to be encoded (seperately!) to base64 for Auth
//Then concat the two strings with '+'
const base64EncodedAuth = (Buffer.from(`${process.env.CLIENTID}`).toString('base64'))+(Buffer.from(`${process.env.SECRET}`).toString('base64'));


async function getBearerToken(){
  //Config that is required for the API Call to be successfull
  const config = {
    method: 'post',
    url: 'https://api.paypal.com/v1/oauth2/token',
    headers: { 
      'Authorization': `Basic ${base64EncodedAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : "grant_type=client_credentials"
  };

  //Make the API call and safe it in response
  const response = await axios(config);

  //Only returns the access_token from the response object
  return response.data.access_token;
};

module.exports = {getBearerToken};