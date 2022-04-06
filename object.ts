var student=
{
    firstname:"shubham",
    lastname:"pakhale",
    score:90
};
console.log(student.firstname);
console.log(student.score);

for(var item in student)
{
    console.log(item);
    console.log(student[item])
};

var { firstname,lastname}=student;
console.log(firstname+" "+lastname)