const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
    //get{techs}
    async index(req,res){
       const {tech} = req.query;
       const spot  = await Spot.find({techs:tech});
       return res.json(spot);
    },

    //post
    async store(req,res){
        const { filename } = req.file;
        const { company ,value, techs } = req.body;
        const { user_id } = req.headers;

        const user = User.findById(user_id);
        if(!user){
            return res.status(400).json({ error:"Usuario não foi encontrado!"});
        }

        const spot = await Spot.create({
            user:user_id,
            thumbnail : filename,
            company,
            value,
            techs: techs.split(',').map(tech=> tech.trim()),
        })

        return res.json(spot);
    }


}