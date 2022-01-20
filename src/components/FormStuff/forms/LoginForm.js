import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../inputs/Input';
import InputGroup from '../group/InputGroup';
import Label from '../labels/Label';
import InputMessage from '../message/InputMessage';
import StyledForm from './StyledForm';
import api from '../../../apis/api';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    }),
    onSubmit: (values) => {
      api
        .post('/auth/login', {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="username"
          id="username"
          required
          placeholder="Username"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />
        <Label
          error={formik.errors.username}
          htmlFor="username"
          className="label"
        >
          Username
        </Label>
        <InputMessage messType="error" className="message">
          {formik.errors.username}
        </InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="password"
          className="field"
          name="password"
          id="password"
          required
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Label
          error={formik.errors.password}
          htmlFor="password"
          className="label"
        >
          Password
        </Label>
        <InputMessage messType="error" className="message">
          {formik.errors.password}
        </InputMessage>
      </InputGroup>
      <button
        disabled={Object.keys(formik.errors).length === 0 ? false : true}
        type="submit"
      >
        Submit
      </button>
    </StyledForm>
  );
};

export default RegisterForm;
