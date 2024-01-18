const { checkSeatStatus, getRowNumber, book } = require('../homework')
it ("checkSeatStatus es una funcion", () => {
    expect(typeof checkSeatStatus). toBe ("function")
})
