const express = require('express')
const app = express()
const PORT = 8000

const kingsPlayers = {
    'deaaron fox': {
        'ppg': 26.6,
        'apg': 5.6        ,
        'rpg': 4.6,
        'recordWhenPlayed': '42-32'
    },
    'domantas sabonis':{
        'ppg': 19.4,
        'apg': 8.2,
        'rpg': 13.7,
        'recordWhenPlayed': '46-36'
    },
    'keegan murray': {
        'ppg': 15.2,
        'apg': 1.7,
        'rpg': 5.5,
        'recordWhenPlayed': '43-34'
    },
    'keon ellis': {
        'ppg': 5.4,
        'apg': 1.6,
        'rpg': 2.2,
        'recordWhenPlayed': '33-24'
    },
    'malik monk':{
        'ppg': 15.4,
        'apg': 5.1,
        'rpg': 2.9,
        'recordWhenPlayed': '42-30'
    },
    'kevin huerter': {
        'ppg': 10.2,
        'apg': 2.6,
        'rpg': 3.5,
        'recordWhenPlayed': '37-27'
    },
    'trey lyles': {
        'ppg': 7.2,
        'apg': 1.2,
        'rpg': 4.4,
        'recordWhenPlayed': '33-25'
    },
    'sasha vezenkov':{
        'ppg': 5.4,
        'apg': 0.5,
        'rpg': 2.3,
        'recordWhenPlayed': '22-20'
    },
    'alex len': {
        'ppg': 2.5,
        'apg': 1.0,
        'rpg': 2.7,
        'recordWhenPlayed': '24-24'
    },
    'unknown': {
        'ppg': 'unknown',
        'apg': 'unknown',
        'rpg': 'unknown',
        'recordWhenPlayed': 'unknown',
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const playerName = req.params.name.toLowerCase()
    if ( kingsPlayers[playerName] ) {
        res.json(kingsPlayers[playerName])
    } else {
        res.json(kingsPlayers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})