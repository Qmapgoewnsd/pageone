let text = document.getElementById("text");
function order() {
    const order = text.value.split("").sort().join("");
    if (text.value === order) {
        window.alert('Congratulation you finished the game!');
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','__blank');
    } else {
        window.alert(`This is not palindome look: ${order} you missed!`);
        window.close();
    }
}