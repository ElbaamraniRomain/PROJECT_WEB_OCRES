import Activite from '../Models/activite.models'


exports.findOne = (req, res) => {
    Activite.findbyId(req.params.userId)
    .then(user => {
        if(!user){
            return res.status(404).send({
                message: 'Activit nyot found with id' + req.params.userId
            });
        }
        res.send(user);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: 'User not found with id' + req.params.userId
            });
        }
        return res.status(404).send({
                message: 'User not found with id' + req.params.userId
            });
    });
}