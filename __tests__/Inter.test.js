const Inter= require('../lib/Inter');

test ("creates an Intern object", () => {
    const inter= new Inter('Mary', "101010", 'mary@something.com', 'AAA');

    expect(inter.name).toBe('Mary');
    expect(inter.id).toBe('101010');
    expect(inter.email).toBe('mary@something.com');
    expect(inter.school).toBe('AAA');
});

test("checks Intern's school", () => {
    const inter= new Inter('Mary', "101010", 'mary@something.com', 'AAA');

    expect(inter.getSchool()).toEqual(expect.stringContaining('AAA'));
});

test("checks Intern's role", () => {
    const inter= new Inter('Mary', "101010", 'mary@something.com', 'AAA');

    expect(inter.getRole()).toEqual(expect.stringContaining('Intern'));
});