const Joi = require('joi');



const userSchema = Joi.object({

 name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .trim()
    .pattern(/^(?!\s)(?!.*\s$).+$/, { name: 'no-leading-or-trailing-space' })
    .pattern(/[a-zA-Z]/, { name: 'must-contain-letter' }) // must contain at least one letter
    .messages({
      'string.pattern.name': 'Username must not start or end with a space and must contain at least one letter.',
      'string.empty': 'Username cannot be empty.',
    }),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .trim()
    .pattern(/^(?!\s)(?!.*\s$).+$/, { name: 'no-leading-or-trailing-space' })
    .pattern(/[a-zA-Z]/, { name: 'must-contain-letter' }) // must contain at least one letter
    .messages({
      'string.pattern.name': 'Username must not start or end with a space and must contain at least one letter.',
      'string.empty': 'Username cannot be empty.',
    }),
  email: Joi.string()
    .email({ tlds: { allow: ['com', 'org', 'ng'] } })
    .required()
    .trim()
    .pattern(/^(?!\s)(?!.*\s$).+$/, { name: 'no-leading-or-trailing-space' })
    .messages({
      'string.pattern.name': 'Email must not start or end with a space.',
      'string.empty': 'Email cannot be empty.',
    }),
  password: Joi.string()
    .min(4)
    .max(20)
    .required()
    .trim()
    .pattern(/^(?!\s)(?!.*\s$).+$/, { name: 'no-leading-or-trailing-space' })
    .messages({
      'string.pattern.name': 'Password must not start or end with a space.',
      'string.empty': 'Password cannot be empty.',
    }),
    gender: Joi.string().valid('male', 'female', 'other').required(),
});


module.exports = {
  userSchema
};