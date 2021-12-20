const kitty = require('../index');

describe('test', () => {
  test('kitty', () => {
    expect(kitty.name).toEqual('kitty');
  });
});
