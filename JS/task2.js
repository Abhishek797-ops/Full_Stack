function generateProfile() {
    let firstName = document.getElementById("firstName").value;
    let favoriteNumber = document.getElementById("favoriteNumber").value;
    let isStudent = document.getElementById("isStudent").value;

    let profile = `My name is ${firstName}, my favorite number is ${favoriteNumber}, and my student status is ${isStudent}.`;

    console.log(profile);
}