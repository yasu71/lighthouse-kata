// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, actionWhenFound) {

  names.forEach(elem => {
      if (elem === "Waldo") {
        actionWhenFound();   
      }
  });

};

// this is a callback function
const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
