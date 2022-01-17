import React, { useState } from 'react';
import Input from '../FormStuff/inputs/Input';
import CenterContainer from '../../containers/CenterContainer';

const LoginRegister = () => {
  const [option, setOption] = useState(false);
  return (
    <CenterContainer>
      <div>
        <div>
          <button onClick={() => setOption(true)}>Login</button>
          <button onClick={() => setOption(false)}>Register</button>
        </div>
        {option ? (
          <div>
            <Input
              type="text"
              className="field"
              name="name"
              id="name"
              required
              placeholder="Name"
            />
          </div>
        ) : (
          <div>Register</div>
        )}
      </div>
    </CenterContainer>
  );
};

export default LoginRegister;
