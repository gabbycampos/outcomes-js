function createAccount(pin, amount=0) {
    return {
      checkBalance(input) {
        if (input !== pin) return "Invalid PIN.";
        return `$${amount}`;
      },
      deposit(input, depositAmount) {
        if (input !== pin) return "Invalid PIN.";
        amount = amount + depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
      },
      withdraw(input, withdrawal) {
        if (input !== pin) return "Invalid PIN.";
        if (withdrawal > amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        amount -= withdrawal;
        return `Succesfully withdrew $${withdrawal}. Current balance: $${amount}.`;
      },
      changePin(oldPin, newPin) {
        if (oldPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!";
      }
    }
  }

module.exports = { createAccount };
