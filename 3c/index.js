async function analyzeMenu() {
    const Response = await fetch("menu.json");
    const menu = await Response.json();

    console.log("Restaurang", menu.restaurant.name);
    console.log("Antal kategorier", menu.categories.length);
}

analyzeMenu();