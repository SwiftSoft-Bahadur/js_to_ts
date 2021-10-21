class Employee {
    private id: number;
    private name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    show() {
        console.log(`${this.id} ${this.name}`);
    }
}

let emp = new Employee(100, "Bahadur Khan Pathan")
emp.show()