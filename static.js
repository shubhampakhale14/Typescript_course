var Check = /** @class */ (function () {
    function Check() {
    }
    Check.bankName = "bank of america";
    return Check;
}());
var check = new Check();
Check.bankName = "km";
var check2 = new Check();
check2.accNo;
console.log(Check.bankName);
