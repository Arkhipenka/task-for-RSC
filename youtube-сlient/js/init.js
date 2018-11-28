
function createCard(frame, link, user, date, views){
	let div = document.getElementById('div');
	let card = document.createElement('section');

	card.id = 'card-youtube';

	card.innerHTML = '<iframe id=\"frame\" src=\"https://www.youtube.com/embed/JbWnRhHfTDA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><h2 id=\"info\"><a href=\"#\" id=\"link\">lslslslslsls</a></h2><table><tr><td><i class=\"fas fa-male\"></i></td><td id=\"user\">cejhhgfg</td></tr><tr><td><i class=\"fas fa-calendar-alt\"></i></td><td id=\"date\">fghgjjh</td></tr><tr><td><i class=\"far fa-eye\"></i></td><td id=\"views\">fgfgf</td></tr></table><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
	
	div.appendChild(card);
}