let colors = ["red", "blue", "green", "yellow", "white", "orange"];
let randomColor = () => colors[Math.floor(Math.random() * 6)];

$(document).ready(function(){
    randomizeCube();
});

let randomizeCube = () => {
    $(".cube").each(function(){
        $(this).css("background-color", randomColor())
    })
}