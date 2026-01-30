const katt = {
    name: "misse",
    ägare: {
        firstName: "jonas",
        telefon: "0070707007070"
    },
    ålder: 5,
    ärInne: true
};

console.log(katt.name)
console.log(katt["ålder"])

console.log("Kattens ägare är: ", katt.ägare.firstName);

const person = {
    hobby: true,
    firstName: "stellan",
    lastName: "benckert",
    age: 37,
    occupation: "student",
    plats: {
        land: "sverige",
        stad: "växjö",
        gata: "lyan"
    }


};

delete person.occupation;

console.log("har personen?", "occupation" in person)

console.log(person)
console.log(person.firstName)
console.log(person["lastName"]) //hakparanteser när egenskapen innehåller melanslag eller specialtecken
console.log("stellan bor i: ", person.plats.stad)

const leagueGame = {
    place: "summoners rift",
    players: 5,
    champion: {
        morgana: {
            stun: true
        },
        neeko: {
            stun: true
        },
        samira: {
            stun: false,
            item: ["boots", "stormrazor", "bloodthirster"]
        },
        zeri: {
            stun: false
        },
        tryndamere: {
            stun: false
        },


    }
    
}

console.log(leagueGame)

katt.color = "grå";

katt.ålder = 6;

delete katt.ärInne;

console.log("har katten ett namn? ", "name" in katt)

const items = leagueGame.champion.samira.item.join(" and ")

const personElem = document.getElementById("2");
personElem.innerHTML = `
<h1>${person.firstName} ${person.lastName}</h2>
<p>Ålder: ${person.age}</p>
<p>samria items: ${items}
`;

