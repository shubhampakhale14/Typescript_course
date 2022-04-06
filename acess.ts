class student
{
    private _name:string;
    display()
    {
        console.log(this._name);
    }
    get name():string{
        return this._name
    }
    set name(name:string){
        this._name=name;
    }
}
var stud=new student();
stud.name="Shubham";
console.log(student.name);
