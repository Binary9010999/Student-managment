const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Student {
    name :string = "Fatima"
}
function main() {
  // Implement your program loop here
}

rl.question("Welcome to the Student Management System. Enter your name: ", () => {
  const student = new Student();

  main(); // Start the program loop

  rl.close();
});
