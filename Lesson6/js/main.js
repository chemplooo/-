function main() {
    let startBtn = document.querySelector("#start"),
        budgetValue = document.querySelector(".budget-value"),
        daybudgetValue = document.querySelector(".daybudget-value"),
        levelValue = document.querySelector(".level-value"),
        expensesValue = document.querySelector(".expenses-value"),
        optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
        incomeValue = document.querySelector(".income-value"),
        monthsavingsValue = document.querySelector(".monthsavings-value"),
        yearsavingsValue = document.querySelector(".yearsavings-value"),
        expensesItem = document.querySelectorAll(".expenses-item"),
        expensesItemBtn = document.querySelector(".expenses-item-btn"),
        optionalexpensesBtn = document.querySelector(".optionalexpenses-btn"),
        countBudgetBtn = document.querySelector(".count-budget-btn"),
        optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
        yearValue = document.querySelector(".year-value"),
        monthValue = document.querySelector(".month-value"),
        dayValue = document.querySelector(".day-value"),
        chooseIncome = document.querySelector("#income"),
        savings = document.querySelector("#savings"),
        chooseSum = document.querySelector("#sum"),
        choosePercent = document.querySelector("#percent"),
        optionalExpenses1 = document.querySelector("#optionalexpenses_1"),
        optionalExpenses2 = document.querySelector("#optionalexpenses_2"),
        optionalExpenses3 = document.querySelector("#optionalexpenses_3"),
        expenses1 = document.querySelector("#expenses_1"),
        expenses2 = document.querySelector("#expenses_2"),
        expenses3 = document.querySelector("#expenses_3"),
        expenses4 = document.querySelector("#expenses_4"),
        money, time, a, b;
  
    expensesItemBtn.disabled = true;
    expensesItemBtn.style.backgroundImage = "none";
    optionalexpensesBtn.disabled = true;
    optionalexpensesBtn.style.backgroundImage = "none";
    countBudgetBtn.disabled = true;
    countBudgetBtn.style.backgroundImage = "none";
    chooseSum.disabled = true;
    choosePercent.disabled = true;
    optionalExpenses1.disabled = true;
    optionalExpenses2.disabled = true;
    optionalExpenses3.disabled = true;
    expenses1.disabled = true;
    expenses2.disabled = true;
    expenses3.disabled = true;
    expenses4.disabled = true;
    savings.disabled = true;
  
    expenses2.addEventListener('input', function () {
        expenses2.value = expenses2.value.replace(/[^0-9+]/, '');
    });
    expenses4.addEventListener('input', function () {
        expenses4.value = expenses4.value.replace(/[^0-9+]/, '');
    });
  
  
    optionalExpenses1.addEventListener('input', function () {
        optionalExpenses1.value = optionalExpenses1.value.replace(/[^а-я]/, '');
    });
    optionalExpenses2.addEventListener('input', function () {
        optionalExpenses2.value = optionalExpenses2.value.replace(/[^а-я]/, '');
    });
    optionalExpenses3.addEventListener('input', function () {
        optionalExpenses3.value = optionalExpenses3.value.replace(/[^а-я]/, '');
    });
  
    expensesItem.forEach(function (item, i, array) {
            item.addEventListener('input', function () {
                if ((array[0].value != "" && array[1].value != "") &&
                    (array[2].value != "" && array[3].value != "")) {
    
                    expensesItemBtn.style.backgroundImage =
                    "linear-gradient(359deg,#ffbd45,#ff464b),linear-gradient(#fff,#fff)";
                    expensesItemBtn.disabled = false;
    
                    countBudgetBtn.style.backgroundImage =
                    "linear-gradient(359deg,#ffbd45,#ff464b),linear-gradient(#fff,#fff)";
                    countBudgetBtn.disabled = false;
            }   else {
                    expensesItemBtn.disabled = true;
                    expensesItemBtn.style.backgroundImage = "none";
    
                    countBudgetBtn.disabled = true;
                    countBudgetBtn.style.backgroundImage = "none";
                }
            });
        });
  
    optionalexpensesItem.forEach(function (item, i, array) {
  
        item.addEventListener('input', function () {
  
            if (array[0].value != "" && array[1].value != "" &&
                array[2].value != "") {
  
                optionalexpensesBtn.style.backgroundImage =
                    "linear-gradient(359deg,#ffbd45,#ff464b),linear-gradient(#fff,#fff)";
                optionalexpensesBtn.disabled = false;
            } else {
                optionalexpensesBtn.disabled = true;
                optionalexpensesBtn.style.backgroundImage = "none";
            }
        });
    });
        startBtn.addEventListener("click", function () {
        chooseIncome.disabled = false;
        savings.disabled = false;
        optionalExpenses1.disabled = false;
        optionalExpenses2.disabled = false;
        optionalExpenses3.disabled = false; 
        expenses1.disabled = false;
        expenses2.disabled = false;
        expenses3.disabled = false;
        expenses4.disabled = false;
  
  
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("Ваш бюджет на месяц?", '');
        let times = time.split("-");
  
        while (time == "" || time == null || times.length != 3 ||
            times[1] < 1 || times[1] > 13 || times[2] < 1 || times[2] > 32 ||
            times[1] == null || times[2] == null) {
  
            time = prompt("Введите корректную дату в формате YYYY-MM-DD", "");
            times = time.split("-");
        }
  
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц? " +
                "Введите корректный ответ.", '');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        startBtn.disabled = true;
        startBtn.style.backgroundImage = "none";
    });
  
    expensesItemBtn.addEventListener("click", function () {
        let sum = 0;
            for (let i = 0; i < expensesItem.length; i++) {
            a = expensesItem[i].value;
            b = expensesItem[++i].value;
            if ((typeof (a)) === 'string' && (typeof (b)) === 'string' &&
                (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                 console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                alert("Не больше 50 символов!");
                i--;
            }
  
        }
        expensesValue.textContent = sum;
    });
  
    optionalexpensesBtn.addEventListener("click", function () {
  
        optionalexpensesValue.textContent = "";
  
        for (let i = 0; i < optionalexpensesItem.length; i++) {
            let opt = optionalexpensesItem[i].value;
  
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
        }
        optionalexpensesValue.textContent = optionalexpensesValue.textContent.trim();
        optionalexpensesValue.textContent = optionalexpensesValue.textContent.replace(/ /g, ", ");
    });
  
    countBudgetBtn.addEventListener("click", function () {
  
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;
  
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            daybudgetValue.textContent = "Произошла ошибка";
        }
    });
  
    chooseIncome.addEventListener("input", function () {
        let items = chooseIncome.value;
            appData.income = items.split(", ");
            incomeValue.textContent = appData.income;
    });
  
    savings.addEventListener("click", function () {
        if (appData.savings == true) {
            appData.savings = false;
            chooseIncome.disabled = true;
            chooseSum.disabled = true;
            choosePercent.disabled = true;
            chooseSum.value = "";
            choosePercent.value = "";
            monthsavingsValue.textContent = "";
            yearsavingsValue.textContent = "";
        } else {
            appData.savings = true;
            chooseSum.disabled = false;
            choosePercent.disabled = false;
  
        }
    });
  
    chooseSum.addEventListener("input", function () {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;
  
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
  
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
  
    choosePercent.addEventListener("input", function () {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;
  
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
  
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
  
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };
  }
  main();