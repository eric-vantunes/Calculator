function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => { //
        this.capturesClicks();
        this.capturesEnter();
    };
        
        this.capturesEnter = () => {
            document.addEventListener('keypress', e => {
                if (e.keyCode !== 13) return;
                this.account();
            });
        };

    this.capturesClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target; 
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.account(el);
        });
    };

    this.account = () => {
        try {
            const account = eval(this.display.value);

            if (!account) {
                alert('Invalid account');
                return
            }
            this.display.value = account;
        }   catch (e) {
            alert('Invalid account');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };


    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);


}

const calculator = new Calculator(); //New instance of the object
calculator.start();