
const users = [
    {
        name: "John snow",
        gender: "male",
        image: "john.png"
    },
    {
        name: "Arya stark",
        gender: "female",
        image: "jane.png"
    }
];

let index = 0;

function toggle() {
    const user = users[index];
    index = (index + 1) % users.length;

    document.getElementById("name").textContent = user.name;
    document.getElementById("gender").textContent = user.gender;
    document.getElementById("image").src = user.image;
}