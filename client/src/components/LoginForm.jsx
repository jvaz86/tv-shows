import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import {fullWhite} from 'material-ui/colors';
import TextField from 'material-ui/Input/Input';
import Typography from 'material-ui/Typography';
import FormHelperText from 'material-ui/Form/FormHelperText';
import FormControl from 'material-ui/Form/FormControl';

const styles = {
  btnLogin: {
    margin: '0 auto'
  }
};

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
        <CardContent>
          <Typography type="headline" component="h2">
            Login
          </Typography>
          <br />
          <br />
          <Typography type="headline" >
            {errors.summary && <p className="error-message">{errors.summary}</p>}
          </Typography>
          <Typography component="div">
            
            <FormControl className="field-line" error={errors.email ? true : false}>

              <TextField
                placeholder="Email"
                name="email"
                onChange={onChange}
                value={user.email}
              />
              <FormHelperText>{errors.email && errors.email}</FormHelperText>
            </FormControl>

            <FormControl className="field-line" error={errors.password ? true : false}>
              <TextField
                placeholder="Password"
                type="password"
                name="password"
                onChange={onChange}
                value={user.password}
              />
              <FormHelperText>{errors.password && errors.password}</FormHelperText>
            </FormControl>
          </Typography>
          <br/>
        </CardContent>
      <CardActions >
        <Button style={styles.btnLogin} raised color="primary" type="submit">Log In</Button>
      </CardActions>

      <br />
      <br />
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
