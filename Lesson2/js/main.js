let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    
    appData = {
        biudget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
};

     
     for ( let i = 0; i < 2; i++ ) { 
         let a = prompt("Введите обязательную статью расходов в этом месяце"),
             b = prompt("Во сколько обойдется?");

             if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
             a != '' && b != '' && a.length < 10){
                 console.log("done!");
                 appData.expenses[a] = b;  
                 } else {
                         i--;
                         alert("чтото пошло не так!")

                 } 
                
               
             };

// ПЕРВЫЙ ВИД ЦЫКЛА WHILE
         /*    let i = 0;
                while (i < 2){
                    let a = prompt("Введите обязательную статью расходов в этом месяце"),
                        b = prompt("Во сколько обойдется?");
                        i++;
                    
                                if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
                                a != '' && b != '' && a.length < 10){
                                    console.log("done!");
                                    appData.expenses[a] = b;  
                                    } else {
                                            i--;
                                            alert("чтото пошло не так!")
                    
                                 } 
             }
             */

// ВТОРОЙ ВИД ЦЫКЛА DO WHILE
            /* let i = 0;
                do {
                    let a = prompt("Введите обязательную статью расходов в этом месяце"),
                        b = prompt("Во сколько обойдется?");
                    i++;
            
                        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
                        a != '' && b != '' && a.length < 10){
                                console.log("done!");
                                appData.expenses[a] = b;  
                                } else {
                                        i--;
                                        alert("чтото пошло не так!")
            
                                }     
                } while (i < 2);
             */

    
    appData.moneyPerDay = appData.biudget / 30;
    alert("Ежедневный доход: " + appData.moneyPerDay);
    if (appData.moneyPerDay < 1000){
            console.log("Минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 2000){
        console.log("Средний  уровень достатка!");
    }else {
        console.log("Произошла ошибка!");
    };
    console.log(appData);


    