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
  constructor(petName, ounerName, specials, breed) {
    this.petName = petName;
    this.ounerName = ounerName;
    this.specials = specials;
    this.breed = breed;
  }

  static sameOuner(a, b) {
    if (a.ounerName === b.ounerName) {
      return a.petName + " ha lo stesso proprietario di " + b.petName + " che si chiama " + a.ounerName;
    }
  }
}

let pets = [];

const formPets = document.getElementById("petForm");

formPets.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const specials = document.getElementById("specials").value;
  const breed = document.getElementById("breed").value;
  const ounerName = document.getElementById("ounerName").value;

  const pet1 = new Pets(petName, ounerName, specials, breed);

  console.log(pet1);
  console.dir(petName);

  pets.forEach((altropet) => {
    console.log(Pets.sameOuner(pet1, altropet));
  });
  pets.push(pet1);
  this.appendChild;
});
