const cardList = [];

const elements = ["Fire", "Water", "Earth", "Air"];
const signs = {
    Fire: ["Aries", "Leo", "Sagittarius"],
    Water: ["Cancer", "Scorpio", "Pisces"],
    Earth: ["Taurus", "Virgo", "Capricorn"],
    Air: ["Gemini", "Libra", "Aquarius"]
}
const names = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];

generateCardList();
console.log(cardList);

function generateCardList(){
    elements.forEach(element => {
        addElement(element);
    });
}

function addElement(element){
    let card = {};
    card.element = element;
    signs[element].forEach(sign => {
        card.sign = sign;
        addStuff(card);
    });
}

function addStuff(card){
    for(let x=0; x<10; x++){
        card.power = addCardPower(x);
        card.name = names[x];
        card.id = card.element+card.sign+x;
        console.log(card);
        cardList.push(card);
    }
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
