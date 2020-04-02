import React from 'react';
import loginService from '../../services/loginService';
import { withRouter } from 'react-router-dom';
// import { signIn } from '../../actions';

// import { connect } from 'react-redux';

class Login extends React.PureComponent {
  client_id = 'test';
  client_secret = 'secret';

  state = {
    userName: '',
    password: '',
    error: ''
  };
  onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  submit = () => {
    const options = {
      headers: {
        Authorization: 'Basic dGVzdDpzZWNyZXQ='
      }
    };
    // const data = new FormData();
    // data.set('grant_type', 'password');
    // data.set('client_secret', 'secret');
    // data.set('client_id', 'test');
    // data.set('username', this.state.userName);
    // data.set('password', this.state.password);
    const data = {
      grant_type: 'password',
      scope: 'read-write',
      client_secret: 'secret',
      client_id: 'test',
      username: this.state.userName,
      password: this.state.password
    };

    loginService
      .login(data, options)
      .then(res => {
        console.log('res', res);
        localStorage.setItem('session', JSON.stringify(res.data));
        this.props.history.push('home');
      })
      .catch(e => {
        console.log('err', e);
        this.setState({ error: e.message });
      });
  };
  render() {
    return (
      <>
        <h1 className='large text-primary login-container'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Sign In to Your Account
        </p>
        <form className='form'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='userName'
              value={this.state.userName}
              onChange={this.onChangeInput}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.submit}
          >
            Sign in
          </button>
          {this.state.error && (
            <span className={'text-danger'}>{this.state.error}</span>
          )}
        </form>
        <p className='my-1'>
          Do not have an account?{' '}
          <a
            href=''
            onClick={e => {
              e.preventDefault();
              this.props.history.push('register');
            }}
          >
            Register
          </a>
        </p>
      </>
    );
  }
}

export default withRouter(Login);
