//index,show,store,update,destroy,
const User = require('../models/User');

module.exports = {
   async store(req,resp){
        const { email } = req.body;

        let user = await User.findOne({email});
            
        if(!user){
             user = await User.create({email});
        }

        return resp.json(user);
    }

}