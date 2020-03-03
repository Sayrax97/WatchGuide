"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "film",
      [
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          length: 178,
          description:
            "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo.When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it.However, he does not go alone.He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise.Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go.Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
          release_date: "2001-12-19",
          trailer_link: "https://www.youtube.com/watch?v=V75dMMIW2B4",
          parantial_quide: 13
        },
        {
          title: "The Lord of the Rings: The Two Towers",
          length: 179,
          description:
            "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas, and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.",
          release_date: "2002-12-18",
          trailer_link: "https://www.youtube.com/watch?v=LbfMDwc4azU",
          parantial_quide: 13
        },
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          length: 201,
          description:
            "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Frodo and Sam reach Mordor in their quest to destroy the One Ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
          release_date: "2003-12-17",
          trailer_link: "https://www.youtube.com/watch?v=y2rYRu8UW8M",
          parantial_quide: 13
        },
        {
          title: "Walter defends Sarajevo",
          original_title: "Valter brani Sajarevo",
          length: 133,
          description:
            "Retreating German armies are in desperate need of fuel. Valter, mysterious and charismatic resistance leader can jeopardize their supply. Germans carry out cunning plan in order to eliminate that obstacle. ",
          release_date: "1972-04-12",
          trailer_link: "https://www.youtube.com/watch?v=e4IiO53Ueps",
          parantial_quide: 13
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("film", null, {});
  }
};
