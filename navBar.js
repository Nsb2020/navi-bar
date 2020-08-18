var navToggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");


navToggle.addEventListener("click", function() {
	/*console.log(links.classList.contains('imam'));

	if(links.classList.contains('show-links')){ This is an alternate of using toggle
		links.classList.remove('show-links');
	}
	else{
		links.classList.add('show-links');
	}*/
	links.classList.toggle("show-links")

});