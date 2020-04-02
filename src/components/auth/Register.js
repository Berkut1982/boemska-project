import React from 'react';
import loginService from '../../services/loginService';
import { withRouter } from 'react-router-dom';

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }
  onChangeInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      if (
        name === 'confirmPassword' &&
        this.state.password !== this.state.confirmPassword
      ) {
        this.setState({ error: 'Confirm do not match with password' });
      } else {
        this.setState({ error: '' });
      }
    });
  };

  submit = () => {
    this.setState({ error: '' });
    var bodyFormData = new FormData();
    bodyFormData.set('userName', this.state.userName);
    bodyFormData.set('password', this.state.password);
    loginService
      .register({
        userName: this.state.userName,
        password: this.state.password
      })
      .then(res => {
        console.log('res', res);
        this.props.history.push('login');
      })
      .catch(e => {
        console.log('err', e);
        this.setState({ error: e.message });
      });
  };
  render() {
    return (
      <>
        <h1 className='large text-primary register-container'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
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
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={this.state.confirmPassword}
              onChange={this.onChangeInput}
            />
          </div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.submit}
          >
            Register
          </button>
          {this.state.error && (
            <span className={'text-danger'}>{this.state.error}</span>
          )}
        </form>
        <p className='my-1'>
          Already have an account?{' '}
          <a
            href=''
            onClick={e => {
              e.preventDefault();
              this.props.history.push('login');
            }}
          >
            Sign In
          </a>
        </p>
      </>
    );
  }
}

export default withRouter(Register);
