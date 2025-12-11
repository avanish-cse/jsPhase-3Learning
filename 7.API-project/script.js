// ---------------------------
// CREATE MAIN STRUCTURE ONCE
// ---------------------------
const main = document.querySelector("main"); // use existing <main> in HTML

const container = document.createElement("div");
container.className = "w-full max-w-6xl mx-auto";

const cardContainer = document.createElement("div");
cardContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-6";

// Append container structure
container.appendChild(cardContainer);
main.appendChild(container);

// ---------------------------
// FUNCTION TO CREATE A PROFILE CARD
// ---------------------------
function createCard(user) {
    const card = document.createElement("div");
    card.className =
        "bg-gray-800 shadow-xl rounded-xl p-6 flex flex-col items-center text-center border border-gray-700 hover:bg-gray-750 transition";

    const img = document.createElement("img");
    img.src = user.picture.large;
    img.className = "w-28 h-28 rounded-full mb-4 object-cover";

    const nameEl = document.createElement("h2");
    nameEl.className = "text-xl font-semibold";
    nameEl.textContent = `${user.name.first} ${user.name.last}`;

    const roleEl = document.createElement("p");
    roleEl.className = "text-gray-400 mt-2";
    roleEl.textContent = user.location.country;

    const button = document.createElement("button");
    button.className = "mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition";
    button.textContent = "View Profile";

    card.appendChild(img);
    card.appendChild(nameEl);
    card.appendChild(roleEl);
    card.appendChild(button);

    return card;
}

// ---------------------------
// FETCH USERS AND ADD CARDS
// ---------------------------
fetch("https://randomuser.me/api/?results=3")
    .then(res => res.json())
    .then(data => {
        data.results.forEach(user => {
            const card = createCard(user);
            cardContainer.appendChild(card);
        });
    });
