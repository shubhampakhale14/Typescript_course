interface StudentName
{
    [index:number]:string;
}
var studentNames:StudentName=["John","bob","doug"];
interface studentScore
{
    [index:string]:number;
}
var studentScores:studentScore={};
studentScores["john"]=100;
studentScores["Bob"]=90;
for(var item in studentScores)
{   console.log(item);
    console.log(studentScores[item]);
}