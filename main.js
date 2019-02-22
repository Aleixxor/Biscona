let cardList = {};
let allUsers = {};
const classesNames = { 
    "Aries":[
        "flaticon-aries-zodiac-symbol-of-frontal-goat-head",
        "flaticon-aries-sign"
    ],
    "Leo":[
        "flaticon-leo-zodiac-symbol-of-lion-head-from-side-view",
        "flaticon-leo-sign"
    ],
    "Sagittarius":[
        "flaticon-sagittarius-arch-and-arrow-symbol",
        "flaticon-sagittarius-arrow-sign"
    ],
    "Cancer":[
        "flaticon-cancer",
        "flaticon-cancer-zodiac-sign-symbol"
    ],
    "Scorpio":[
        "flaticon-scorpion-shape-of-zodiac-sign",
        "flaticon-scorpion-astrological-sign"
    ],
    "Pisces":[
        "flaticon-pisces-astrological-sign-symbol",
        "flaticon-pisces-astrological-sign"
    ],
    "Taurus":[
        "flaticon-taurus-zodiac-symbol-of-bull-head-front",
        "flaticon-taurus-astrological-sign-symbol-1"
    ],
    "Virgo":[
        "flaticon-virgo-zodiac-symbol",
        "flaticon-virgo-astrological-symbol-sign-1"
    ],
    "Capricorn":[
        "flaticon-capricorn-1",
        "flaticon-capricorn-sign"
    ],
    "Gemini":[
        "flaticon-gemini-two-twins-heads-symbol",
        "flaticon-gemini-zodiac-sign-symbol"
    ],
    "Libra":[
        "flaticon-libra-balanced-scale-symbol",
        "flaticon-libra-sign"
    ],
    "Aquarius":[
        "flaticon-aquarius",
        "flaticon-aquarius-zodiac-sign-symbol"
    ]
};
const elements = ["Fire", "Water", "Earth", "Air"];
const signs = {
    Fire: ["Aries", "Leo", "Sagittarius"],
    Water: ["Cancer", "Scorpio", "Pisces"],
    Earth: ["Taurus", "Virgo", "Capricorn"],
    Air: ["Gemini", "Libra", "Aquarius"]
}
const names = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];

function cardListStart(){
    cardList = {};
    elements.forEach(element => {
        signs[element].forEach(sign => {
            generateDeckList(element, sign);
        })
    })
}

function generateDeckList(element, sign){
    let deck = [];
    let card = {};
    for(let index=0; index < names.length; index++){
        card = {};
        card.element = element;
        card.sign = sign;
        card.name = names[index];
        card.image = classesNames[sign][0];
        card.symbol = classesNames[sign][1];
        card.power = addCardPower(index);
        card.id = card.element+card.sign+index;
        console.log(card);
        deck.push(card);
        console.log(JSON.stringify(deck));
        console.log("END")
    }
    cardList.push({sign: deck});
}

function addCardPower(x){
    let power = ((x+1)*10)+10;
    if(x>4 && x<=7){
        power = power + 50;
    }else if(x>7){
        power = power + 100;
    }
    return power;
}

function getDeckBySign(sign){
    let selectedDeck = [];
    cardList.forEach(deck =>{
        if(deck[0].sign == sign){
            selectedDeck = deck;
        }
    });
    return selectedDeck;
}

function init(){
    $.getJSON("cardList.json", function( data ) {
        console.log("data: ")
        console.log(data);
        cardList = data;
        // $.each( data, function( key, val ) {
        //     console.log("key: ")
        //     console.log(key)
        //     console.log("val: ")
        //     console.log(val)
        // });
    });
    // $.getJSON("users.json", function( data ) {
    //     console.log("data: ")
    //     console.log(data);
    //     allUsers = data;
    // });
}


elements.forEach(element => {
    signs[element].forEach(sign =>{
        $("body").append("<br>");
        $("body").append("<span class="+classesNames[sign][0]+" style='font-size: 100px !important'></span>");
        $("body").append("<span class="+classesNames[sign][1]+" style='font-size: 100px !important'></span>");
    })
})
