function bigger() {
    alert("Bigger!");
    document.getElementById("fancify").style.fontSize = "4em";
}

function fancify() {
    alert("Fancy!");
    document.getElementById("fancify").style.fontWeight = "bold";
    document.getElementById("fancify").style.color = "lightblue";
    document.getElementById("fancify").style.textDecoration = "underline";
}

function boring() {
    alert("Boring!");
    document.getElementById("fancify").style.fontWeight = "normal";
    document.getElementById("fancify").style.color = "black";
    document.getElementById("fancify").style.textDecoration = "none";
}

function moo() {
    alert("Moo!");
    var str = document.getElementById("fancify");
    var parts = str.value.split(".");
    str.value = parts.join("moo.");
    str.value = str.value.toUpperCase();
}