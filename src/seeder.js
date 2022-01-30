// This script populates the DB

const { Damned } = require('./models/Damned');
const { Lie } = require('./models/Lie');
const dbconnection = require('./models/dbconnection')
const faker = require('faker/locale/es');

const NO_DAMNED = 10;
const NO_LIES_PER_DAMNED = 10;

async function main() {
    faker.seed(3141592);

    const mongoose = await dbconnection.connect();

    // Clean all objects
    await mongoose.connection.db.dropDatabase();

    for (let i = 0; i < NO_DAMNED; ++i) {
        let lies = new Array(NO_LIES_PER_DAMNED);
        for (let j = 0; j < NO_LIES_PER_DAMNED; ++j) {
            lies[j] = new Lie({
                text: faker.random.words(10)
            });
            lies[j].save();
        }

        const damned = new Damned({
            name: faker.name.findName(),
            description: faker.name.jobDescriptor(),
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fiberosphere.com%2Fwp-content%2Fuploads%2F2013%2F04%2FMariano-Rajoy.jpg&f=1&nofb=1',
            lies: lies.map( (lie) => lie.id )
        })

        await damned.save();
    }


    await mongoose.connection.close();
}

main().catch(err => console.log(err));