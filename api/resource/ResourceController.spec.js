const Resource = require('./ResourceController');
const db = require('../../data/dbClient');

describe('resource-model', () => {
    beforeEach(async() => {
        await db('resource')
            .truncate();
    })

    it('should set testing environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('should add new member to db', async () => {
        const members = await db('resource');
        expect(members).toHaveLength(0);

        await Resource.insert({ member: 'Merry' })
    })
})