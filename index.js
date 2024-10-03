let text = document.getElementById("text");
function check() {
    const idk = text.value.split("").reverse().join("");
    if (text.value === idk) {
        window.alert('Level one clear!');
        window.open('tindex.html','__blank');
        window.close();
    } else {
        window.alert('Try again');
        location.reload();
    }
}