import React from 'react';
import styled from 'styled-components';
import Input from '../inputs/Input';
import InputGroup from '../group/InputGroup';
import Label from '../labels/Label';
import InputMessage from '../message/InputMessage';

const StyledForm = styled.form`
  position: relative;
  & > *:not(:first-child) {
    margin-top: 35px;
  }

  button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LoginForm = () => {
  return (
    <StyledForm>
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="username"
          id="username"
          required
          placeholder="Username"
        />
        <Label for="username" className="label">
          Username
        </Label>
        <InputMessage className="message"></InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="password"
          className="field"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <Label for="password" className="label">
          Password
        </Label>
        <InputMessage className="message"></InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="firstname"
          id="firstname"
          required
          placeholder="First name"
        />
        <Label for="firstname" className="label">
          First name
        </Label>
        <InputMessage className="message"></InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="lastname"
          id="lastname"
          required
          placeholder="Last name"
        />
        <Label for="lastname" className="label">
          Last name
        </Label>
        <InputMessage className="message"></InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="email"
          className="field"
          name="email"
          id="email"
          required
          placeholder="Last name"
        />
        <Label for="email" className="label">
          Email
        </Label>
        <InputMessage className="message"></InputMessage>
      </InputGroup>
      <button>Submit</button>
    </StyledForm>
  );
};

export default LoginForm;
