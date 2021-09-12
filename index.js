// Enviroment Variables
require('dotenv').config();
const app_secret = process.env.secret

console.log(app_secret)

const { Client } = require('@automationcloud/client');

// Create Client instance
const client = new Client({
    serviceId: '26cc53af-fc37-486c-88ea-c6777b82fa9d',
    auth: app_secret
});

// Create the Job. Let's start with no input whatsoever.

(async function(){
    const job = await client.createJob();
})()

// Subscribe to Job state updates to know what's happening.
job.onStateChanged(newState => console.log(`job: ${newState}`));
