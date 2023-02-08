function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
  var name1 = [
    "Aarav",
    "Aditi",
    "Amit",
    "Anjali",
    "Arjun",
    "Bharat",
    "Dhruv",
    "Gita",
    "Hari",
    "Indira",
    "Jasmine",
    "Karan",
    "Lakshmi",
    "Mohan",
    "Namrata",
    "Priya",
    "Radha",
    "Sanjay",
    "Sunil",
    "Vikram",
  ];

  var name2 = [
    "Agarwal",
    "Bhatia",
    "Chauhan",
    "Desai",
    "Gandhi",
    "Gupta",
    "Jain",
    "Kaur",
    "Kumar",
    "Mehta",
    "Mishra",
    "Nair",
    "Patel",
    "Rao",
    "Sharma",
    "Singh",
    "Soni",
    "Verma",
    "Vyas",
    "Yadav",
  ];

  var name =
    name1[getRandomInt(0, name1.length)] +
    " " +
    name2[getRandomInt(0, name2.length)];
  return name;
}

