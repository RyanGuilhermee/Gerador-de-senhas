import generatePassword from './modules/generatePassword';

import './assets/css/style.css';

const generate = new generatePassword(
    document.querySelector('.response'),
    document.querySelector('#charAmount'),
    document.querySelector('#addNumber'),
    document.querySelector('#uppercaseLetter'),
    document.querySelector('#lowercasaLetter'),
    document.querySelector('#symbols'),
    document.querySelector('.btn')
);

generate.init