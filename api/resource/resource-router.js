const express = require('express')
const ResourceController = require('./ResourceController')
const ResourceModel = require('./ResourceModel')
const { validateFields } = require('../middleware/validateFields')

const router = express.Router()

router.route('/')
    .get(ResourceController.index)
    .all(validateFields(['member'])) 
    .post(ResourceController.createMember)

router.route('/:id')
    .put(ResourceController.updateMember)
    .delete(ResourceController.deleteMember)


module.exports = router