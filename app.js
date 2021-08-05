const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var Booksadd = ["The Color Purple", "Invisible Man"];

input.setPrompt(
  "Please select an option 1 - Show all books 2 - Add a new book 3 - Quit\n "
);
input.prompt();

input.on("line", (number) => {
  if (number == 1) {
    console.log(Booksadd);
  } else if (number == 2) {
    input.question(
      "Please enter the name of books which you want to add : \n",
      (nameofbook) => {
        Booksadd.push(nameofbook);
        console.log("Book successfully added");
      }
    );
  } else if (number == 3) {
    input.question("Are you sure, you want to quit\n", (ifsure) => {
      if (ifsure == "y" || ifsure == "Y") {
        input.close();
      } else {
        input.prompt();
      }
    });
  } else {
    console.log(
      "You have selected an invalid entry so please press 1, 2 or 3\n"
    );
  }
});

input.on("close", function () {
  console.log("Bye bye");
});
