interface Add
{
    (x:number,y:number):void
}
interface Sub{
    (x:number,y:number):number
}
var add:Add;
var sub:Sub;

add=function(x:number,y:number):void{
    console.log(x+y);
}
sub=function(a:number,b:number):number{
    return a-b;
}
