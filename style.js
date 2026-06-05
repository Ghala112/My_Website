let now = new Date();
let hour = now.getHours();

let message = "";

if (hour >= 5 && hour < 12) {
    message = "صباح الخير 🌸";
} else if (hour >= 12 && hour < 18) {
    message = "مساء الخير 💗";
} else {
    message = "مساء الخير 🌙";
}

alert(message);