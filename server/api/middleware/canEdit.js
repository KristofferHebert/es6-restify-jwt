// import TOKEN from '../config/token'
// import LOCALS from '/../../config/locals'

function canEdit(req, res, next){
    if(req.user && req.user.hasOwnProperty('admin')) {
        next()
    }
    return res.json('error', { error: 'User must be admin or owner of resource' })
}

export default canEdit
