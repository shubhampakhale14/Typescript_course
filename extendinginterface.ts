interface exterior
{
    color:string;
    numofDoors:Number;
}
interface Interior
{
    seats:number;
    auto:boolean;
}
interface car extends exterior,Interior
{
    make:string;
    model:string;
    year:number;
}
var myCar:car={
    make:"Honda",
    model:"civic",
    year:2018,
    color:"black",
    numofDoors:4,
    seats:4,
    auto:true

}