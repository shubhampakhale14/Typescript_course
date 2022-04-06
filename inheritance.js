var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var Threeseries = /** @class */ (function (_super) {
    __extends(Threeseries, _super);
    function Threeseries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.curiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    Threeseries.prototype.cruiseControl = function () {
        this.curiseControlEnabled = true;
        console.log("Crusing");
    };
    Threeseries.prototype.start = function () {
        console.log(" Button Start");
    };
    Threeseries.prototype.stop = function () {
        console.log(" Button Stop");
    };
    return Threeseries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FiveSeries.prototype.parkingAssit = function () {
        this.parkingAssistEnabled = true;
        console.log("Parked");
    };
    FiveSeries.prototype.start = function () {
        console.log(" Remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log(" Remote Stop");
    };
    return FiveSeries;
}(BMW));
var threeseries = new Threeseries("BMW", "328i", "2018", false);
console.log(threeseries.curiseControlEnabled);
console.log(threeseries.make);
console.log(threeseries.model);
console.log(threeseries.year);
threeseries.commonEngineFunc();
threeseries.start();
threeseries.stop();
threeseries.cruiseControl();
var fiveSeries = new FiveSeries("BMW", "576", "2018");
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssit();
