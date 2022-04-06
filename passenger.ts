class passenger
{
    firstName:string;
    lastName:string;
    frequentFlyerNo:number;


constructor(firstName:string,lastName:string,frequentFlyerNo:number)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.frequentFlyerNo=frequentFlyerNo;
}
display()
{
console.log(this.firstName+" "+this.lastName+" "+this.frequentFlyerNo);
}
}