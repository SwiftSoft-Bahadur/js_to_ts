var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.show = function () {
        console.log(this.id + " " + this.name);
    };
    return Employee;
}());
var emp = new Employee(100, "Bahadur Khan Pathan");
emp.show();
//# sourceMappingURL=server.js.map