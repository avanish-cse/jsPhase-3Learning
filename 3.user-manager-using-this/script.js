const form = document.querySelector("#form");
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let profilePic = document.querySelector("#profilePic");
const cardContainer = document.querySelector("#card-container");

const userManager = {
    users: [],
    init: function () {

        form.addEventListener("submit", this.submitForm.bind(this)); // yhan  par this ki value userManager object hai...


    },
    submitForm: function (e) {
        e.preventDefault();
        let newUser = this.addUser();

        this.renderUI(newUser);
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value.trim(),
            bio: bio.value.trim(),
            profilePic: profilePic.value.trim()
        });
        form.reset();
    },

    renderUI: function () {

        cardContainer.innerHTML = "";

        this.users.forEach((user, index) => {




            // Create the main container
            const userCard = document.createElement("div");
            userCard.className = "user-card profile-layout";

            // --- Profile Image Wrapper ---
            const picWrapper = document.createElement("div");
            picWrapper.className = "profile-pic-wrapper";

            const img = document.createElement("img");
            img.src = user.profilePic;
            img.alt = "Profile";
            img.className = "profile-pic";

            picWrapper.appendChild(img);

            // --- Username ---
            const username = document.createElement("h3");
            username.className = "card-username";
            username.textContent = user.username;

            // --- Role ---
            const role = document.createElement("p");
            role.className = "card-role";
            role.textContent = user.role;

            // --- Bio ---
            const bio = document.createElement("p");
            bio.className = "card-bio";
            bio.textContent = user.bio;

            // --- Buttons wrapper ---
            const btnWrapper = document.createElement("div");
            btnWrapper.className = "card-buttons";

            // Contact Button
            const contactBtn = document.createElement("button");
            contactBtn.className = "contact-btn";
            contactBtn.textContent = "Contact";

            // Remove Button
            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-btn";
            removeBtn.textContent = "Remove";

            btnWrapper.appendChild(contactBtn);
            btnWrapper.appendChild(removeBtn);

            // Append everything to main card
            userCard.appendChild(picWrapper);
            userCard.appendChild(username);
            userCard.appendChild(role);
            userCard.appendChild(bio);
            userCard.appendChild(btnWrapper);

            // Append to the card container
            cardContainer.appendChild(userCard);


            //removeUser button call
            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            })

        });

    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    }

}

userManager.init()