import React from 'react';
import Input from '../components/FormStuff/inputs/Input';
import InputGroup from '../components/FormStuff/group/InputGroup';
import Label from '../components/FormStuff/labels/Label';

export default {
  title: 'Input',
  component: InputGroup,
};

export const Standard = () => (
  <InputGroup>
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
  </InputGroup>
);
