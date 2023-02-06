
for (let number = 1; number <= 42; number++) {
    let button = document.createElement('button');
    button.textContent = number;

    if (number % 5 == 0){
        button.onclick = function (event) {
            this.textContent = Number(this.textContent) +1;
        };
    }
    output(button);

    }

/**
 * pievienot elementu iekš elementa ar klasi "output" 
 * @param DOMelement element
 */

function output (element) {
    document.querySelector('.output').append(element);
}