function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = ` px-4 py-2 ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} w-fit rounded-lg shadow-lg pointer-events-none`;


        document.querySelector("#container").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector("#container").classList += `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"} z-50 `
        }

        setTimeout(() => {
            document.querySelector("#container").removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "bottom",
    theme: "dark",
    duration: 3,

});

toaster("You sent a request");
setTimeout(() => {
    toaster("Accepted your  request")
}, 2000);
