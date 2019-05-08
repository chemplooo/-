
let age = document.getElementById('age');
    
showUser = function (surname, name) {
    this.surname = surname;
    this.name = name;
    alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + age.value);
}
 
showUser('Kulibaba', 'Nikolai');