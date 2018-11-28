window.addEventListener("load", function(event) {

let form = document.createElement('form');
form.id = "form";
form.innerHTML = "<button id=\"btn\" ><i class= \"fas fa-search \"></i></button><input type=\"search\" name=\"text\" placeholder=\"Search...\" id=\"search\" class=\"search\">";
document.body.insertBefore(form, document.body.firstChild);

let div = document.createElement('div');
div.id = 'div';
document.body.appendChild(div);

})
