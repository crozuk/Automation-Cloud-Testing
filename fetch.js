// Enviroment Variables
require('dotenv').config();
const app_secret = process.env.secret;
//Log App Secret Key
console.log(app_secret);
//Automation Cloud Client
const { Client } = require('@automationcloud/client');

const fs = require('fs');

// Create Client instance
const client = new Client({
    serviceId: '26cc53af-fc37-486c-88ea-c6777b82fa9d',
    auth: app_secret
});

// Create and follow job

(async function(){
    //Creat job
    const job = await client.createJob();
    job.onStateChanged(newState => console.log(`job: ${newState}`));
    
  //Log on output
  //job.onOutput('Premier League Table', table=> console.log('output: Premier League Table', table));
    
    //Wait for completion
    await job.waitForCompletion();
    
    //Log on completion
    const output = await job.getOutput('Premier League Table');
    console.log('output: Premier League Table', output);

    //Write response to file
    fs.writeFileSync('response.json', JSON.stringify(output));

})();
