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
        savings: true
};

function chooseExpenses (){
         
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
}
chooseExpenses();




    function detectDayBudget(){
    
        appData.detectDayBudget = money/30;
        alert("Вашь месячный доход: " + appData.detectDayBudget);
    }
    detectDayBudget();

    function detectLevel(){
        if (appData.moneyPerDay < 1000){
            console.log("Минимальный уровень достатка!");
    }   else if (appData.moneyPerDay > 2000){
        console.log("Средний  уровень достатка!");
    }   else {
        console.log("Произошла ошибка!");
    };
    }
    detectLevel();

    
    function checkSavings (){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накопления ?"),
            procent = +prompt("Под какой процент ?");

            appData.mounthIncome = save/100/12*procent;
            alert("доход в месяц: " + appData.mounthIncome);
        }
    }
checkSavings();

function chooseOptExpenses(){
    for ( i = 0; i < 3; i++ ){
        let q = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = q;
        }
       
       
    }
    
    chooseOptExpenses();


    