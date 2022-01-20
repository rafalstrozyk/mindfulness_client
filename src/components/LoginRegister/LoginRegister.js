import React, { useState } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import RegisterForm from '../FormStuff/forms/RegisterForm';
import LoginForm from '../FormStuff/forms/LoginForm';

const LoginRegister = () => {
  const [option, setOption] = useState(false);
  return (
    <CenterContainer>
      <div>
        <div>
          <button disabled={option} onClick={() => setOption(true)}>
            Login
          </button>
          <button disabled={!option} onClick={() => setOption(false)}>
            Register
          </button>
        </div>
        {option ? (
          <div>
            <LoginForm />
          </div>
        ) : (
          <div>
            <RegisterForm />
          </div>
        )}
      </div>
    </CenterContainer>
  );
};

export default LoginRegister;
