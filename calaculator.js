var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    calculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    return calculator;
}());
calculator.sum(10, 20);
calculator.sub(5, 4);
