let expenses = [];
let budget = 1000; 
let goals = [];

function addExpense() {
    const name = document.getElementById("expense-name").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (name && amount) {
        expenses.push({ name, amount });
        updateExpenseList();
        clearForm();
        updateBudget();
    } else {
        alert("Please enter both name and amount.");
    }
}

function updateExpenseList() {
    const ul = document.getElementById("expense-list-ul");
    ul.innerHTML = "";

    expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.textContent = `${expense.name}: $${expense.amount}`;
        ul.appendChild(li);
    });
}

function clearForm() {
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
}

function updateBudget() {
    const budgetDisplay = document.getElementById("budget");
    const remainingBudget = budget - calculateTotalExpenses();
    budgetDisplay.textContent = `Budget: $${remainingBudget}`;
    checkGoals(remainingBudget);
}

function calculateTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function addGoal() {
    const goalName = document.getElementById("goal-name").value;
    const targetAmount = parseFloat(document.getElementById("target-amount").value);

    if (goalName && targetAmount) {
        goals.push({ goalName, targetAmount });
        updateGoals();
        clearGoalForm();
    } else {
        alert("Please enter both goal name and target amount.");
    }
}

function updateGoals() {
    const goalsList = document.getElementById("goals-list");
    goalsList.innerHTML = "";

    goals.forEach((goal) => {
        const li = document.createElement("li");
        li.textContent = `${goal.goalName}: Target - $${goal.targetAmount}`;
        goalsList.appendChild(li);
    });
}

function clearGoalForm() {
    document.getElementById("goal-name").value = "";
    document.getElementById("target-amount").value = "";
}

function checkGoals(remainingBudget) {
    const goalsList = document.getElementById("goals-list");
    goalsList.innerHTML = "";

    goals.forEach((goal) => {
        const li = document.createElement("li");
        const progress = remainingBudget >= goal.targetAmount ? "Goal Achieved" : `Remaining: $${goal.targetAmount - remainingBudget}`;
        li.textContent = `${goal.goalName}: Target - $${goal.targetAmount}, ${progress}`;
        goalsList.appendChild(li);
    });
}

updateExpenseList();
updateBudget();
updateGoals();
