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

    randomLowercaseLetter() {
        if (this.lowercaseLetter.checked) return this.strUppercase.charAt(Math.floor(Math.random() * this.strUppercase.length));
        return '';
    }

    randomSymbols() {
        if (this.symbols.checked) return this.strSymbols.charAt(Math.floor(Math.random() * this.strSymbols.length));
        return '';
    }

    controlsRandomElements() {
        const elements = [];

        if (!this.checkCharAmount()) return '';

        for (let i = 0; i < this.checkCharAmount(); i++) {
            elements.push(this.randomAddNumber());
            elements.push(this.randomUppercaseLetter());
            elements.push(this.randomLowercaseLetter().toLowerCase());
            elements.push(this.randomSymbols());
        }

        return elements.join('').slice(0, this.checkCharAmount());
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
