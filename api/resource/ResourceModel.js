const db = require('../../data/dbClient')

module.exports = class ResourceModel {
    static async all() {
        return db('resource')
    }

    static async findById(id) {
        return db('resource')
            .where({id})
    }

    static async create(resource) {
        const [id] = await db('resource').insert(resource, 'id')

        return db('resource')
            .where({id})
    }

    static async update(id, changes) {
        await db('resource')
            .where({id})
            .update(changes)

        return this.findById(id)
    }

    static async destroy(id) {
        return db('resource')
            .where({id})
            .delete()
    }
}