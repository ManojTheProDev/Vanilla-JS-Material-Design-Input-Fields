var form = document.getElementById('form');
form.addEventListener('blur', function(event) {
	if(event.target.tagName === "INPUT") {
		if(event.target.value === "") {
			event.target.parentElement.children[2].classList.add("error");
		}
		else if(event.target.type === "email" && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,18}$/i.test(event.target.value.trim()))) {
			event.target.parentElement.children[2].classList.add("error");
		}
		else {
			event.target.parentElement.children[2].classList.remove("error");
		}
	}
}, true);

form.addEventListener('input', function(event) {
	console.log(event);
	if(event.target.value === "") {
		event.target.parentElement.children[2].classList.add("error");
	}
	else if(event.target.type === "email" && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,18}$/i.test(event.target.value.trim()))) {
		event.target.parentElement.children[2].classList.add("error");
	}
	else {
		event.target.parentElement.children[2].classList.remove("error");
	}
}, true);

form.onsubmit = function() {
	var textInput = document.querySelectorAll("input[type=text]")[0].value;
	var emailInput = document.querySelectorAll("input[type=email]")[0].value;
	alert("Name is " + textInput + " and Email is " + emailInput);
}