let numbers = document.getElementById("numbers");
function palindrome() {
    const important =  numbers.value.split("").reverse().join("");
    if (numbers.value === important) {
        window.alert('Level 2 clear!!');
        window.open('front.html','__blank');
    } else {
        alert('You missed!');
        window.close();
    }
}