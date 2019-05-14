window.addEventListener("DOMContentLoaded", function () {
    function User(name, id) {
      this.name = name;
      this.hello = function () {
        console.log(`hello ${this.name}`);
      };
    }
    let input = document.getElementById('age');
  
    input.addEventListener("input", function () {
      input.value = inputAge.value.replace(/[^0-9+]/, '');
    });
    input.addEventListener("blur", function () {
      showUser.call(this, "Miro", "Nick");
    });
  
    function showUser(surname, name) {
      alert("Увожаемый " + surname + " " + name + ", его возраст состовляет " +
        this.value);
    }
  
<<<<<<< HEAD
  });
=======
  });
>>>>>>> affb5e7ddaa965aa09bb04d9ca1489af0c1076a4
