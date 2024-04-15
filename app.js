const tmi = require("tmi.js");
const mysql = require("mysql2");
const request = require('request');
const rp = require('request-promise-native');
const webapp = require('request');
var keys = require('./keys.js');
var token = "Bearer " + keys.seSecret;

var requestOptions = {
    url: "",
    headers: {
        "Authorization": token,
        "Client-ID": keys.clientid,
        "Content-Type": "application/json"
    }
};

const con = mysql.createConnection({
    host: keys.host,
    user: keys.username,
    password: keys.password,
    database: keys.database,
    port: keys.port
});

const options = {
    options: {
        debug: true

    },
    connection: {
        reconnect: true
    },
    identity: {
        username: keys.botName,
        password: keys.botPassword
    },
    channels: [keys.twitchName],
};