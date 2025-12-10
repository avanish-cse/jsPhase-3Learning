class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";

    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }

    checkRole() {
        return this.role !== "user" ? `you are an ${this.role}` : `you are a ${this.role}`;

    }
}

let user1 = new User("Avanish", "Khalilabad", "avanish.71", "avanishchaurasiya71@gmail.com");
let user2 = new User("Ankita", "Khalilabad", "akieve.4", "idk04@gmail.com");


// extends is classical inheritence (jaha class bna kar extend karna )

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "admin";

    }

    remove() {
        document.querySelectorAll("h1").forEach((element) => {
            element.remove();
        })
    }


}



let admin1 = new Admin("admin", "mai nhi bataunga", "@admin", "admin@mail.com");


// prototypal inheritence 

let coffee = {
    color: "dark",
    make: () => {
        return "Gharrr Gharrrr Gharrrrrrrrr";


    }
}

let chai = Object.create(coffee);