const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3000});

let MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

console.log('SERVER RUNNING');

//GLOBAL VARIABLE DEFINITIONS
const ROUND_LENGTH = 5000;
const SEPARATOR_CHAR = '%';
const GAME_VERSION = '0.0.1';
const can_play = true;

function user(cR){

    //VARIABLE DEFINITIONS
    this.isLoggedIn = false;
    this.username = '';
    this.roomReference = null;
    this.connection = cR;

    //FUNCTION DEFINITIONS
    //this.joinRoom;
}

var users = [];

function room(uA, uB, tU){

    //VARIABLE DEFINITIONS
    this.userA = uA;
    this.userB = uB;
    this.userARoundInput = 0;
    this.userBRoundInput = 0;
    this.roundEndDate = 0;
    this.ID = guid();
    this.isFighting = false;

    // FUNCTION DEFINITIONS
    this.processRoundEnd = function(){
        this.processRoundInputs();
        this.userARoundInput = 0;
        this.userBRoundInput = 0;
        this.newRound();
    };

    this.processRoundInputs = function(){
        if(this.userARoundInput === 0){
            this.userARoundInput = -1;
        }
        if(this.userBRoundInput === 0){
            this.userBRoundInput = -1;
        }
    };
}