let obj = {
    name: "Avanish Chaurasiya",
    age: 22,
    sayName: function () {
        console.log(this.name);  // arrow fn ke andar this hamesha window ko hi point karega
    }

}

obj.sayName();

document.querySelector("h1").addEventListener("click", function() {
    console.log(this.style.color = "#0e0e");
})