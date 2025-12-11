


async function generateRandomNum() {


    let pr = new Promise(function (res, rej) {
        setTimeout(() => {
            let rn = Math.floor(Math.random() * 10);
            if (rn < 5) res("resolved with" + " " + rn)
            else rej("rejected with" + " " + rn)
        }, 1000);
    }); 


    try {
        let message = await pr;
        console.log(message);
        

    } catch (error) {
       console.error();
       
        
    }
    

}

generateRandomNum()