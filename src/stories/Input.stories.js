import React from 'react';
import Input from '../components/FormStuff/inputs/Input';
import InputGroup from '../components/FormStuff/group/InputGroup';
import Label from '../components/FormStuff/labels/Label';
import InputMessage from '../components/FormStuff/message/InputMessage';

export default {
  title: 'Input',
  component: InputGroup,
};

export const Standard = () => (
  <InputGroup style={{ marginTop: '50px' }}>
    <Input
      type="text"
      className="field"
      name="name"
      id="name"
      required
      placeholder="Name"
    />
    <Label for="name" className="label">
      Name
    </Label>
    <InputMessage className="message"></InputMessage>
  </InputGroup>
);
export const StandardWithInfo = () => (
  <InputGroup style={{ marginTop: '50px' }}>
    <Input
      type="text"
      className="field"
      name="name"
      id="name"
      required
      placeholder="Name"
    />
    <Label for="name" className="label">
      Name
    </Label>
    <InputMessage className="message" messType="info">
      Succes!
    </InputMessage>
  </InputGroup>
);

export const Error = () => (
  <InputGroup style={{ marginTop: '50px' }}>
    <Input
      type="text"
      className="field"
      name="name"
      id="name"
      required
      placeholder="Name"
      error="some error"
    />
    <Label error="some error" for="name" className="label">
      Name
    </Label>
    <InputMessage className="message" messType="error">
      Some error here
    </InputMessage>
  </InputGroup>
);
