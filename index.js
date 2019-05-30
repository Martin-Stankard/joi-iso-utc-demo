console.log('Joi utc demo')

const BaseJoi = require('joi')
const extensions = require('joi-date-extensions')
const Joi = BaseJoi.extend(extensions)

const schema = Joi.object().keys({
    dateTimeValue: Joi.date().utc().required()
}) 

Joi.validate({ dateTimeValue: '6 Mar 17 21:22 UT' }, schema).then(result=>{
    console.log(JSON.stringify(result, null, 2))
}).catch(err=>{
    console.log(JSON.stringify(err, null, 2))
})

