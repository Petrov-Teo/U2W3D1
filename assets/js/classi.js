class User {
  constructor(firsName, lastName, age, location) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confronto(userToCompare) {
    if (this.age > userToCompare.age) {
      return this.firsName + " è più grade di " + userToCompare.firsName;
    } else {
      return userToCompare.firsName + " è più grande di " + this.firsName;
    }
  }
}

const utente1 = new User("Ciccio", "Pasticcio", 23, "Roma");

const utente2 = new User("Pippo", "Pasticcio", 28, "Roma");

console.log(utente1.confronto(utente2));

class Pets {
  constructor(petName, ounerName, specials, bread) {
    this.petName = petName;
    this.ounerName = ounerName;
    this.specials = specials;
    this.bread = bread;
  }

  static sameOuner(pets1, pets2) {
    return pets1.ounerName === pets2.ounerName;
  }
}

const formPets = document.getElementById("petForm");

formPets.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(formPets);

  const pets1 = new Pets(
    formPets.get("petName"),
    formPets.get("ounerName"),
    formPets.get("specials"),
    formPets.get("bread")
  );

  console.log(pets1);
});
