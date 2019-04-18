let money,  
    time;

    money = +prompt("Ваш бюджет на месяц?"),
    time = +prompt("Введите дату в формате YYYY-MM-DD");
 
let appData = {
        biudjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses:{},
        income: [],
        savings: false
},

    question1 = +prompt("Введите обязательную статью расходов в этом месяце"),
    question2 = +prompt("Во сколько обойдется?"),
    question3 = +prompt("Введите обязательную статью расходов в этом месяце"),
    question4 = +prompt("Во сколько обойдется?");

    appData.expenses[question1] = question2;
    appData.expenses[question3] = question4;
    console.log(appData);
    alert(money / 30);