//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect

const getInfo = require('../../src/helpers/getInfo');

test('to return object value or none', () => {
    
    const extraInfo = "something"

    const results = getInfo(extraInfo)
    
    expect(results).toBe("s, o, m, e, t, h, i, n, g"); 
});

test('to return object value or none', () => {
    
    const extraInfo = "hello"

    const results = getInfo(extraInfo)
    
    expect(results).toBe("h, e, l, l, o"); 
});

//TODO: write a test if no data is passed to the function (returns "none")

test('REPLACE_ME', () => {
    
    expect(getInfo()).toBe("none");
});