module.exports = function errorHandler(err, req, res, next) {
    err.status = err.status || 500
    err.message = err.messge || 'Internal server error.'

    res.status(err.status).json({ error: { message: err.message }})
}