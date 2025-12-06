let obj = {
    name: "Avanish Chaurasiya",
    age: 22,
    sayName: function () {
        console.log(this.name);  // arrow fn ke andar this hamesha window ko hi point karega
    }

}

obj.sayName();


// ..............................................................


document.querySelector("h1").addEventListener("click", function () {
    console.log(this.style.color = "#0e0e");
})



// ..............................................................


let obj2 = {
    name: "Rahul Bhandari",
    age: 21,
    sayName: () => {
        console.log(this, "Rahul");  // arrow function ke andar this hamesha parent object ko hi point karta hai..
    }
};


obj2.sayName();


//--------------------------------------------------------------------

let obj3 = {
    name: "Vinoba Bhawe",
    age: 26,
    sayName: function () {

        let newFn = () => {
            console.log(this)  //  arrow fn apne this ki value hamesha parent se lete hain
        }

        newFn(); // yah object3 ko hi print karega

    }

}
obj3.sayName()


// -------------------------------------------------------------------

// we can set the value of this during the function call
function callKaro() {
    console.log(this, "callKaro");
    
}

callKaro.call(obj2)  // .call method ko use kar ke object parse kiya ja rha so to set the value of this

