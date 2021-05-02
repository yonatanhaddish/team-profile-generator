const Intern= require('../lib/Intern');

test ("creates an Intern object", () => {
    const intern= new Intern('Mary', "101010", 'mary@something.com', 'AAA');

    expect(intern.name).toBe('Mary');
    expect(intern.id).toBe('101010');
    expect(intern.email).toBe('mary@something.com');
    expect(intern.school).toBe('AAA');
});

test("checks Intern's school", () => {
    const intern= new Intern('Mary', "101010", 'mary@something.com', 'AAA');

    expect(intern.getSchool()).toEqual(expect.stringContaining('AAA'));
});

test("checks Intern's role", () => {
    const intern= new Intern('Mary', "101010", 'mary@something.com', 'AAA');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});