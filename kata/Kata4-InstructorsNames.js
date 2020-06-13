const instructorWithLongestName = function (instructors) {
  let nameLength = 0;
  let instructor = {};

  for (let i = 0; i < instructors.length; i++) {
    if (nameLength < instructors[i].name.length) {
      nameLength = instructors[i].name.length;
      instructor = instructors[i];
    }
  }
  return instructor;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
