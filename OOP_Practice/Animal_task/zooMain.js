import {Cat} from "./modules/Cat.js";
import {Dog} from "./modules/Dog.js";
import {Elephant} from "./modules/Elephant.js";
import {Creature} from "./modules/Creature.js";

let creature = new Creature();
console.log(creature.getCreatureType());


let dog = new Dog();
console.log(`Creature Type is ${dog.getCreatureType()}`);

let cat = new Cat();
console.log(`Creature Type is ${cat.getCreatureType()}`);

// 4. Сделать класс Elephant, наследующий Creature, метод - getCreatureType()


let elephant = new Elephant();
console.log(`Creature Type is ${elephant.getCreatureType()}`);

// 5. Создать массив creatures = [] c именами животных
let creatures = [
    new Dog('CHARLIE', 6.5, 15, 8.1, "Laos", 0.05),
    new Elephant('Luna', 6, 80, 3000, "Sri Lanka", 136),
    new Cat('Loki', 2, 15, 5, "Italy", 0.05),
    new Dog('TEDDY', 6, 15, 8, "Sri Lanka", 0.9),
    new Cat('Willow', 2, 15, 5, "Italy", 0.05),
    new Elephant('JASPER', 40, 80, 4000, "Italy", 200),
    new Cat('Simba', 2, 15, 6, "Italy", 0.03),
    new Dog('Rambo', 7, 15, 12, "Sri Lanka", 1),
    new Elephant('Halsey', 35, 80, 2500, "Laos", 250),
    new Cat('Harris', 3, 15, 7, "Italy", 0.06),
    new Dog('Denzel', 10, 15, 15, "Sri Lanka", 1),
    new Elephant('Boomer', 25, 80, 2000, "Laos", 150),
    new Dog('Vinny', 14, 15, 20, "Sri Lanka", 2),
    new Cat('Hannibal', 3, 15, 5, "Sri Lanka", 0.08),
    new Elephant('Archie', 60, 80, 5000, "Laos", 350),
    new Cat('Alvin', 8, 15, 20, "Sri Lanka", 0.09),
    new Cat('Greta', 9, 15, 12, "Laos", 0.09),
    new Elephant('Duke', 50, 80, 3400, "Sri Lanka", 400),
]


// 6. Написать функцию printCreatures(creatures), которая принимает массив существ и выводит их имена через запятую, одной строкой
function printCreatures(creatures) {
    let str = '';
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        let endings = i === creatures.length - 1 ? '.' : ', ';
        str += creature.toString() + endings;
    }
    return str;
}

let nameMyBase = printCreatures(creatures);
console.log(`Name of creatures: ${nameMyBase}`);

// 7. Написать функцию, printCreaturesByType(creatures, type). Она как и предыдущая, принимает массив существ и  тип желамого существа. Должена вывести строку, содержающую лишь имена тех существ,
//  у которых creature.getCreatureType() === type
function printCreaturesByType(creatures, type) {
    let str = '';
    let found = false;
    for (let i = 0; i < creatures.length - 1; i++) {
        let creature = creatures[i]

        if (creature.getCreatureType() === type) {
            str += creature.toString() + ',';

            found = true;
        }
    }
    if (!found) {
        str = "no found";
    }
    return str.substring(0, str.length - 1) + '.';
}

let resultDog = printCreaturesByType(creatures, "DOG");
console.log(`START print filtered creatures by DOG: ${resultDog}`);

let resultCat = printCreaturesByType(creatures, "CAT");
console.log(`START print filtered creatures by CAT: ${resultCat}`);

let resultElephant = printCreaturesByType(creatures, "CAT");
console.log(`START print filtered creatures by Elephant: ${resultElephant}`);

//сделать функцию printTotalCreaturesMass()
function printTotalCreaturesMass(creatures) {
    let mass = 0;
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        let creatureMass = creature.getMass();
        mass += creatureMass;
    }
    return mass;
}

let result = printTotalCreaturesMass(creatures);
console.log(`Total mass for all creatures:  ${result} kg`)

//сделать функцию printTotalCreaturesMassByType(type). Вывод mass of creatures by type
function printTotalCreaturesMassByType(creatures, type) {
    let massByType = 0;
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        if (creature.getCreatureType() === type) {
            massByType += creature.getMass();
        }
    }
    return massByType;
}

let elephantResult = printTotalCreaturesMassByType(creatures, 'ELEPHANT');
console.log(`Total mass for creatures by type "ELEPHANT":  ${elephantResult} kg `);

let dogResult = printTotalCreaturesMassByType(creatures, 'DOG');
console.log(`Total mass for creatures by type "DOG":  ${dogResult} kg`);

let catResult = printTotalCreaturesMassByType(creatures, 'CAT');
console.log(`Total mass for creatures by type "CAT":  ${catResult} kg`);

//сделать функцию printCreaturesByCountry(cameFrom) - отобразить только имена  животных по странам
function printCreaturesByCountry(creatures, cameFrom) {
    let byCountry = '';
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        if (creature.getCameFrom() === cameFrom) {
            let creatureCountry = creature.toString() + ', ';
            byCountry += creatureCountry;
        }
    }
    return byCountry;
}

let nameByLaos = printCreaturesByCountry(creatures, 'Laos');
console.log(`Name of animals by Laos:  ${nameByLaos} `);

let nameByItaly = printCreaturesByCountry(creatures, 'Italy');
console.log(`Name of animals by Italy:  ${nameByItaly} `);

let nameBySriLanka = printCreaturesByCountry(creatures, 'Sri Lanka');
console.log(`Name of animals by Sri Lanka:  ${nameBySriLanka} `);

// Сделать функцию  printCreatureLifeLeft(name) - она должна вернуть число, отображающее сколько осталось жить существу, исходя из maxAge
function printCreatureLifeLeft(creatures, name) {
    let leftToLive = 0;
    for (let i = 0; i < creatures.length; i++) {
        let creature = creatures[i];
        let creatureName = creature.toString();
        if(creatureName === name){
            leftToLive =  creature.getMaxAge() - creature.getAge();
        }
    }

    return leftToLive;
}
let nameBy = printCreatureLifeLeft(creatures, "Archie");
console.log(`How long does a creatures have to live: ${nameBy}`)


// export default class Creature {