describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Chris', age: 30, skills: ['JavaScript', 'PHP', 'MySQL']},
        obj = JSON.parse(JSON.stringify(expected))

    expect(obj).toEqual(expected)
    expect(obj).not.toBe(expected)
  })
})
