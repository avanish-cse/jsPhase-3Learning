fetch("https://randomuser.me/api/?results=3")
    .then(rawData => rawData.json())
    .then((data) => {
        console.log(data.results);

    });
