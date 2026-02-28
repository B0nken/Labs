

function createList(items) {
    const ul = document.createElement('ul');

    for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li)
    }
    return ul;
}

const fruits = ["äpple", "banan", "kiwi"]
const fruitList = createList(fruits);
document.querySelector('main').after(fruitList)

function createCard(title, description) {
    const article = document.createElement('article');
    article.classList.add('card');

    const h3 = document.createElement('h3')
    h3.textContent = title;

    const p = document.createElement('p')
    p.textContent = description;

    article.append(h3, p)
    return article;
}

const card = createCard('Rubrik', 'beskrivande text.');
document.querySelector("main").append(card);

const users = [
    { name: "Anna", role: "Admin"},
    { name: "Erik", role: "User"},
    { name: "Maria", role: "User"}
];

function renderUsers(users) {
    const containter = document.querySelector('#user-list');

    containter.innerHTML = '';

    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('user-card');

        const name = document.createElement('h3');
        name.textContent = user.name;

        const role = document.createElement('span');
        role.textContent = user.role;
        role.classList.add('role', user.role.toLowerCase());
        div.append(name, role);
        containter.append(div)
    }
}

renderUsers(users)