class BMW
{
    make:string;
    model:string;
    year:string;
    constructor(make:string,model:string,year:string)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    commonEngineFunc()
    {
        console.log("Common func");
    }
    start()
    {
        console.log("Start");
    }
    stop()
    {
        console.log("Stop");
    }
}
class Threeseries extends BMW{
    curiseControlEnabled:boolean;
    cruiseControl()
    {
       this.curiseControlEnabled=true;
       console.log("Crusing");
    }



    constructor(make:string,model:string,year:string,cruiseControlEnabled:boolean)
    {
        super(make,model,year);
        this.curiseControlEnabled=cruiseControlEnabled

    }
    start()
    {
        console.log(" Button Start");
    }
    stop()
    {
        console.log(" Button Stop");
    }
}
class FiveSeries extends BMW{
    parkingAssistEnabled:boolean;

    parkingAssit()
        {
            this.parkingAssistEnabled=true;
            console.log("Parked");
        }
        start()
        {
            console.log(" Remote Start");
        }
        stop()
        {
            console.log(" Remote Stop");
        }
}
var threeseries=new Threeseries("BMW","328i","2018",false);
console.log(threeseries.curiseControlEnabled);
console.log(threeseries.make);
console.log(threeseries.model);
console.log(threeseries.year);
threeseries.commonEngineFunc();
threeseries.start();
threeseries.stop();
threeseries.cruiseControl();




var fiveSeries=new FiveSeries("BMW","576","2018");
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssit();