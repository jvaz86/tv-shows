const express = require('express');
const validator = require('validator');

const router = new express.Router();

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please put your email address.';

  }else if (payload.email != '' && !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'It is not an email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please put your password.';
  }

  if (isFormValid) {
    return {
      success: isFormValid,
      data: payload
    };
  }else{
    return {
      success: isFormValid,
      errors
    };
  }
}

router.post('/login', (req, res) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(200).json({
      success: validationResult.success,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return res.status(200).json({
    success: validationResult.success,
    data: validationResult.data
  });
});


module.exports = router;
