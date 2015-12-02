// import TOKEN from '../config/token'
// import LOCALS from '/../../config/locals'

function canEdit(req, res, next){
    if(!req.user.admin) {
        return res.json('error', { error: err })
    }
    next()
}

export default canEdit
