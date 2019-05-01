let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();


    
   let appData = {
        biudget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
            for ( let i = 0; i < 2; i++ ) { 
                let a = prompt("Введите обязательную статью расходов в этом месяце"),
                    b = prompt("Во сколько обойдется?");
                if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
                    a != '' && b != '' && a.length < 10){
                    console.log("done!");
                    appData.expenses[a] = b;  
                } else {
                    i--;               
                }                            
            }
        },
        detectDayBudget: function() {
            appData.detectDayBudget = money/30;
            alert("Вашь месячный доход: " + appData.detectDayBudget);
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 1000){
                console.log("Минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 2000){
                console.log("Средний  уровень достатка!");
            } else {
                console.log("Произошла ошибка!");
            }
        },
        checkSavings: function() {
            if (appData.savings == true){
                let save = +prompt("Какова сумма накопления ?"),
                procent = +prompt("Под какой процент ?");
    
                appData.mounthIncome = save/100/12*procent;
                alert("доход в месяц: " + appData.mounthIncome);
            }
        },
        chooseOptExpenses: function() {
            for ( i = 0; i < 3; i++ ){
                let q = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i+1] = q;
            }     
        },
        chooseIncome: function() {
           
        
            for(let i = 0; i < 1; i++) {
                let items = prompt('Что принесет дополнительный доход? (Через запятую)', '');
                    if ( (typeof(items)) === 'string' && (typeof(items)) != null  && items != '' && (typeof(items)) != 'number') {
                        appData.income = items.split(', ');
                    } else {
                        i--;
                    }
                };
            appData.income.forEach(function(item , i ){
                console.log("Способы доп. заработка: " + (i+1) + item);
            }
            );
            for (let key in appData){
                console.log("Наша программа включает в себя данные:  " + key);
            };
        },
                
};
appData.chooseIncome();



    