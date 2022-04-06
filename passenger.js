var passenger = /** @class */ (function () {
    function passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerNo);
    };
    return passenger;
}());
