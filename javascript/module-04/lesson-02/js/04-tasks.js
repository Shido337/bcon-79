/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/**
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
const Account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, amount, type };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    // this = Account
    // amount = 1000
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
    console.log(`Поповнення балансу на: ${amount}`);
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.warn("Операція відхилена. Недостатньо коштів");
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
    console.log(`Зняття коштів: ${amount}`);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        // console.log(transaction);
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    if (this.transactions.length === 0) {
      return total;
    }

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total;
  },
};

// API

const totalTransactions = Account.getTransactionTotal(Transaction.DEPOSIT);
console.log("🚀 ~ totalTransactions:", totalTransactions);

Account.deposit(1000);
Account.deposit(100);
Account.deposit(200);
Account.deposit(500);

Account.withdraw(1100);
Account.withdraw(900);

const balance1 = Account.getBalance();
// console.log("🚀 ~ balance1:", balance1);

const transaction2 = Account.getTransactionDetails(2);
// console.log("🚀 ~ transaction2:", transaction2);

const totalDeposit = Account.getTransactionTotal(Transaction.DEPOSIT);
console.log("🚀 ~ totalDeposit:", totalDeposit);

const managerAccount = Account;
const res1 = managerAccount.getBalance();
console.log("🚀 ~ res1:", res1);

managerAccount.deposit(2000);
const balance2 = managerAccount.getBalance();
console.log("🚀 ~ balance2:", balance2);

const client = {
  account: Account,
};
const admin = {
  account: Account,
};
const manager = {
  account: Account,
};
