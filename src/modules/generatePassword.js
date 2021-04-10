export default class generatePassword {
    constructor(response, charAmount, addNumber, uppercaseLetter, lowercaseLetter, symbols, btn) {
        this.response = response;
        this.charAmount = charAmount;
        this.addNumber = addNumber;
        this.uppercaseLetter = uppercaseLetter;
        this.lowercaseLetter = lowercaseLetter;
        this.symbols = symbols;
        this.btn = btn;
        this.strUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.strNumbers = '0123456789';
        this.strSymbols = '!@#$%&';
    }

    checkCharAmount() {
        if (!this.charAmount.value) return false;

        return this.charAmount.value;
    }

    randomAddNumber() {
        if (this.addNumber.checked) return this.strNumbers.charAt(Math.floor(Math.random() * this.strNumbers.length));
        return '';
    }

    randomUppercaseLetter() {
        if (this.uppercaseLetter.checked) return this.strUppercase.charAt(Math.floor(Math.random() * this.strUppercase.length));
        return '';
    }

    checkLowercaseLetter() {
        if (this.lowercaseLetter.checked) return true;
        return;
    }

    checkSymbols() {
        if (this.symbols.checked) return true;
        return;
    }

    controlsRandomElements() {
        let elements = '';
        
        if (!this.checkCharAmount()) return '';

        for (let i = 0; i < this.checkCharAmount(); i++) {
            elements += this.randomAddNumber() + this.randomUppercaseLetter();
        }

        return elements;
    }

    showPassword() {
        return this.controlsRandomElements();
    }

    generates() {
        this.btn.addEventListener('click', () => {
            this.response.innerHTML = this.showPassword();
        });
    }

    get init() {
        this.generates();
    }
}
