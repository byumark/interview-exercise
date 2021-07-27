const { arabicToRoman } = require('./convert')

test('should convert 1 to I', () => {
  expect(arabicToRoman(1)).toBe('I')
})
