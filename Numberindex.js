var studentNames = ["John", "bob", "doug"];
var studentScores = {};
studentScores["john"] = 100;
studentScores["Bob"] = 90;
for (var item in studentScores) {
    console.log(studentScores[item]);
}
