var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return student;
}());
var stud = new student();
stud.name = "Shubham";
console.log(student.name);
