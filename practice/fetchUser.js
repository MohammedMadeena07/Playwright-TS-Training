function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve({
            name: "Maddy",
            company: "NetXD",
            experience: 5
        });
    });
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        reject(new Error("Unable to fetch user"));
    });
}

async function showUser() {
    try {
        const user = await fetchUser();
        console.log(`Name: ${user.name}`);
        console.log(`Company: ${user.company}`);
        console.log(`Experience: ${user.experience}`);
    } catch (error) {
        console.log(error.message);
    }
}

showUser();