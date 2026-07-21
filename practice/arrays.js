const users = ["standard_user", "problem_user", "visual_user"];

console.log(users);
console.log(users.length);

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

// For of similar to for each in java
for (const user of users) {
    console.log(`Testing login for ${user}`);
}

users.push("locked_out_user");

console.log(users);
console.log(users.length);

for (const user of users) {
    console.log(`Testing login for ${user}`);
}

users.pop();

users.push(7);
users.push(true);

for (const user of users) {
    console.log(user);
}