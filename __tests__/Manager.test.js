const Manager= require('../lib/Manager.js');

test('creates a manager', () => {
    const manager= new Manager('John', 454545, 'john@something.com', 'B456');

    expect(manager.name).toBe('John');
    expect(manager.id).toBeGreaterThanOrEqual(1);
    expect(manager.email).toBe('john@something.com');
    expect(manager.officeNumber).toBe('B456');
});

test("checks employee's role", () => {
    const manager= new Manager('John', 454545, 'john@something.com', 'B456');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})