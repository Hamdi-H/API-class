const { authSchema } = require('../helpers/validationschema');
const User = require('../models/usermodel');
const createError = require("http-errors")
module.exports = {
    registeruser: async (req, res, next) => {
        try {
            const result = await authSchema.validateAsync(req.body);

            const Exists = await User.findOne({ email: result.email })

            if (Exists) throw createError.Conflict(`${result.email} has already been registered`)
            const user = new User(result)

            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error) {
            if (error.isJoi === true) error.status = 422
            next(error)
        }
    },

    login: async(req, res, next)=>{
        try{
            const result = await authSchema.validateAsync(req.body)
            const user = await User.findOne({email: result.email})
            if(!user) throw createError.NotFound('user not registered')

                //matching the password
        const isMatch = await user.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized('Username/Password not valid')

          res.send({saved})
    } catch (error) {
      if (error.isjoi ===true)
        return next(createError.BadRequest ('inavlid username/password'))
      next(error)
    }
}

        
}
