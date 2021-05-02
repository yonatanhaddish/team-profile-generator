const Employee= require('../lib/Employee');

test('creates an employee object', () => {
    const employee= new Employee('John', 454545, 'john@something.com', 'B456');

    expect(employee.name).toBe('John');
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.email).toBe('john@something.com');
});