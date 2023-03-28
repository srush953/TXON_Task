let input = document.getElementById('result');

function append(value) {
	input.value += value;
}

function clearDisplay() {
	input.value = '';
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	try {
		input.value = eval(input.value);
	} catch (error) {
		input.value = 'Error';
	}
}
