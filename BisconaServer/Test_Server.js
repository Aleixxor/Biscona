const WebSocketServer = require('ws').Server;
const port = 3000;
let wss = new WebSocketServer({port: port});

//CONSTANTS DECLARATION

const elements = ["Fire", "Water", "Earth", "Air"];
const signs = {
    Fire: ["Aries", "Leo", "Sagittarius"],
    Water: ["Cancer", "Scorpio", "Pisces"],
    Earth: ["Taurus", "Virgo", "Capricorn"],
    Air: ["Gemini", "Libra", "Aquarius"]
}
const names = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];

//FUNCTIONS DECLARATION

function messageControler(action, data){
    let message = {
        "c2dictionary":true,
        "data": {
            "action":action,
            "data":data
        }
    }
    return JSON.stringify(message);
}

function init(array){
    console.log(array);
};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // Enquanto houverem elementos para misturar...
    while (0 !== currentIndex) {
        // Escolhe um dos elementos restantes aleatoriamente...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // E troca com o elemento atual.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getRandomDeck(){
    let element = elements[randomIntBetween(0, elements.length)];
    let sign = signs[element][randomIntBetween(0, signs[element].length)];
    let deck = getSignDeck(sign);
}

function getSignDeck(sign){
    let deck = [];
    allCardList.forEach(card => {
        if(card.sign == sign){
            deck.push(card);
        }
    })
    return deck;
}

function randomIntBetween(min, max){
    return Math.floor(Math.random() * max) + min;
}

//WEBSOCKET FUNCTIONS

wss.on('connection', function connection(ws){
    let playerDeck = [];
    ws.on('message', function incoming(message){
        console.log('received: %s', message);
        message = JSON.parse(message);
        message = message.data;
        console.log(message)

        switch (message.action){
            case 'startGame':
                init(message.data);
                ws.send(messageControler('message', 'Game Started'))
                break;
            case 'shuffle':
                shuffle(message.data);
                break;
            case 'getRandomDeck':
                playerDeck = getRandomDeck();
                ws.send(messageControler('newRandomDeck', JSON.stringify(playerDeck)));
                break;
            case 'getSignDeck':
                playerDeck = getSignDeck(sign);
                ws.send(messageControler('newSignDeck', JSON.stringify(playerDeck)));
            default:
                message.action = 'error';
                message.data = 'Comando não encontrado!';
                ws.send(messageControler('message', JSON.stringify(message)));
                break;
        }

        ws.send(messageControler('message', 'Message received'));
    });

    ws.send(messageControler('message', 'something'));
    console.log('NEW CLIENT CONNECTED');
})

console.log('Openned in: ws://localhost:'+port);


const allCardList = [
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"2",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"3",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"4",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"5",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"6",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"Q",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"J",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"K",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"7",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Fire",
       "sign":"Sagittarius",
       "power":210,
       "name":"A",
       "id":"FireSagittarius9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Water",
       "sign":"Pisces",
       "power":210,
       "name":"A",
       "id":"WaterPisces9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Earth",
       "sign":"Capricorn",
       "power":210,
       "name":"A",
       "id":"EarthCapricorn9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    },
    {
       "element":"Air",
       "sign":"Aquarius",
       "power":210,
       "name":"A",
       "id":"AirAquarius9"
    }
 ]
