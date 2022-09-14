class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  // submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;
      setTimeout(() => {
        this.budgetFeedback.classList.remove("showItem");
      }, 2000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }

  // show balance
  showBalance() {}
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenceForm = document.getElementById("expence-form");
  const expenceList = document.getElementById("expence-list");

  // new instance of UI Class
  const ui = new UI();

  // budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  // expence form submit
  expenceForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // expence clic
  expenceList.addEventListener("click", function () {});
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
