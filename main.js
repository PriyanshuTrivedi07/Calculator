let string = "";
let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '<ion-icon name="backspace-outline" role="img" class="md hydrated"></ion-icon>' || e.target.innerHTML == '') {
            string = string.toString();
            string = string.substring(0,string.length - 1);
            document.querySelector('input').value = string;
        }
        else {
            // console.log(e.target);
            string = string + e.target.innerHTML;
            // console.log(string);
            document.querySelector('input').value = string;
        }
        // console.log(e.target.innerHTML);
        // console.log('string = ' + string);
    })
}