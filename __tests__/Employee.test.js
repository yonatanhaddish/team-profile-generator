const Employee= require('../lib/Employee');

test('creates an employee object', () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');

    expect(employee.name).toBe('John');
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.email).toBe('john@something.com');
});

test("checks employee's name", () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');
    employee.id= 454545;

    expect(employee.getName()).toEqual(expect.stringContaining('John'));
});

test("checks employee's ID", () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');

    expect(employee.getId()).toEqual(expect.stringContaining('454545'));
});

test("checks employee's email", () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');

    expect(employee.getEmail()).toEqual(expect.stringContaining('john@something.com'));
});

test("checks employee's role", () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})