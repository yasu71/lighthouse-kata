const organizeInstructors = function(instructors) {

  const ios = [];
  const web = [];
  const blockchain = [];
  const courseInstructors = {}

  for (courses of instructors) {
    if (courses.course === "iOS") {
      ios.push(courses.name);
      courseInstructors.iOS = ios;
    } else if (courses.course === "Web") {
      web.push(courses.name);
      courseInstructors.Web = web;
    } else if (courses.course === "Blockchain") {
      blockchain.push(courses.name);
      courseInstructors.Blockchain = blockchain;
    }
  }
  return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));