const people = [
  {
    id: 1,
    nome: "Susan Smith",
    cargo: "Web Developer",
    descricao:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    imagem: "./src/img/person-1.jpg",
  },

  {
    id: 2,
    nome: "Anna Johnson",
    cargo: "Web Designer",
    descricao:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    imagem: "./src/img/person-2.jpg",
  },

  {
    id: 3,
    nome: "Peter Jones",
    cargo: "Intern",
    descricao:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    imagem: "./src/img/person-3.jpg",
  },

  {
    id: 4,
    nome: "Bill Anderson",
    cargo: "The Boss",
    descricao:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    imagem: "./src/img/person-4.jpg",
  },
];

const imgProfile = document.getElementById("profile-img");
const person = document.getElementById("name");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnRandom = document.getElementById("btn-random");

let index = 0;

window.addEventListener("DOMContentLoaded", (e) => {
  btnLeft.addEventListener("click", function () {
    if (index === 0) {
      index = people.length - 1;
      criaPessoa(index);
    } else if (index < 4) {
      index = --index;
      criaPessoa(index);
    }
  });

  btnRight.addEventListener("click", function () {
    if (index === people.length - 1) {
      index = 0;
      criaPessoa(index);
    } else {
      index = ++index;
      criaPessoa(index);
    }
  });

  btnRandom.addEventListener("click", function () {
    index = Math.floor(Math.random() * 4);
    console.log(index);
    criaPessoa(index);
  });
});

function criaPessoa(index) {
  imgProfile.src = people[index].imagem;
  person.innerText = people[index].nome;
  profession.innerText = people[index].cargo;
  description.innerText = people[index].descricao;
}
