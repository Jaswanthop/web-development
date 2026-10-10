
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

function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById("gender").textContent = user.gender;
            document.getElementById("image").src = user.picture.large;
        })
    }