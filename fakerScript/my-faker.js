const Faker = require('faker')

module.exports = {
  generateRandomData
}

function generateRandomData (userContext, events, done) {
  userContext.vars.name = `${Faker.name.firstName()} ${Faker.name.lastName()} `
  
  return done()
}