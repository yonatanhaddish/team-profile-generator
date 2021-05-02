const Engineer= require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer= new Engineer('Tom', "34234", 'tom@something.com', 'thomaslee');

    expect(engineer.name).toBe('Tom');
    expect(engineer.id).toBe('34234');
    expect(engineer.email).toBe('tom@something.com');
    expect(engineer.github).toBe('thomaslee');
});

test("checks an Engineer's github", () => {
    const engineer= new Engineer('Tom', "34234", 'tom@something.com', 'thomaslee');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('thomaslee'));
});

test("checks an Engineer's role", () => {
    const engineer= new Engineer('Tom', "34234", 'tom@something.com', 'thomaslee');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});