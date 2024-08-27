function createAccount(pin, amount) {
    let currentPin = pin;
    let balance = amount;

    return account = {
        checkBalance: function(pin){
            if (pin !== currentPin) return 'Invalid PIN.'
            return balance;
        },
        deposit: function(pin, amount){
            if (pin !== currentPin) return 'Invalid PIN.'
            if (typeof(amount) !== "number" || amount < 0) return "Deposit must be an amount greater than 0. Transaction cancelled."
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`
        },
        withdraw: function(pin, amount){
            if (pin !== currentPin) return 'Invalid PIN.';
            if (typeof(amount) !== "number") return "Invalid withdrawal amount. Transaction cancelled."
            if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
        },
        changePin: function(pin, newPin){
            if (pin !== currentPin) return 'Invalid PIN.';
            currentPin = newPin; 
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
