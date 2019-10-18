const ResourceModel = require('./ResourceModel')
const withCatch = require('../../utils/withCatch')

module.exports = class ResourceController {
    static async index(req, res) {
        const [err, members] = await withCatch( ResourceModel.all() )

        if (err) {
            res.status(404).json({ error: { message: 'There are no members stored in the database yet.'} })
        } else {
            res.status(200).json(members)
        }
    }

    static async createMember(req, res) {
       const [err, newMember] = await withCatch( ResourceModel.create(req.body) )
        
        if (err) res.status(500).json({ error: { message: 'Internal server error.'} })
        else res.status(201).json(newMember) 
    }

    static async updateMember(req, res) {
        const [err, updatedMember] = await withCatch( ResourceModel.update )

        if (err) res.status(500).json({ error: { message: 'Internal server error.'} })
        else res.status(200).json(updatedMember)
    }

    static async deleteMember(req, res) {
        const [err, count] = await withCatch( ResourceModel.destroy(req.params.id) )

        if (err) res.status(500).json({error: { message: 'Internal server error.'}})  
        else res.status(200).json({ success: "Successfully removed the member. "})
    }
}