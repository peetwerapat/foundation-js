const grade = (score) => {
  score = Math.round(score);
  if (score <= 100 && score >= 80) {
    console.log("You got A");
  } else if (score < 80 && score >= 70) {
    console.log("You got B");
  } else if (score < 70 && score >= 60) {
    console.log("You got C");
  } else if (score < 60 && score >= 50) {
    console.log("You got D");
  } else if (score < 50) {
    console.log("You got D");
  } else {
    console.log("Error");
  }
};

grade(90);
grade(79.5);
grade(67);
grade(57);
grade(46);
grade(101);
grade(59.8);
