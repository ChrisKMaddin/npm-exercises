const $ = require('jquery');
const hello = require("./say-hello.js");
const sayHello=(x)=> {
    console.log(x);
};
sayHello("Hello");

$("#myDiv").html("jQuery was successful");
$("body").append("<h1>" + hello() + "</h1>");

$("body").css({
    "background-color": "blue",
    "color": "teal"
});

