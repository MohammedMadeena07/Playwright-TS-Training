async function fetchUsers() {
    try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        //const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        //console.log(data);
        console.log(`Total Users: ${data.length}`);
        for (const user of data) {
            console.log(`ID: ${user.id}`);
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log(`-----------------------------`);
            // console.log(`
            //     ID: ${user.id}
            //     Name: ${user.name}
            //     Email: ${user.email}
            //     -----------------------------
            //     `);
        }
    } catch (error) {
        console.log(error.message);
    }
}


fetchUsers();