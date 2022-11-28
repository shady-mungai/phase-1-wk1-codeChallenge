function calculateGrade() {
  let marks = prompt("Enter your marks for grading");
  marks = Number(marks);
  if (marks > 0) {
    if (marks > 79) {
      text="Grade A";
    } //if input is greater than 79 it returns an A
    else if (marks > 60 && marks <= 79) {
      text="Grade B";
    } // if input is greater than 60 but less than or equal to 79 it returns a B
    else if (marks > 49 && marks <= 59) {
      text="Grade C";
    } // if input is greater than 49 but less than or equal to 59 it returns a B
    else if (marks > 40 && marks <= 49) {
      text="Grade D";
    } // if input is greater than 40 but less than or equal to 49 it returns a B
    else if (marks < 40) {
      text="Grade E";
    } //if input is less than 40 it returns an E
  } else {
    text="Invalid input.Kindly Input Marks within the range";
  }

document.getElementById("original").innerHTML =text;
}
