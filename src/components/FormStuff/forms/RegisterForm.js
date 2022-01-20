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
      firstname: '',
      lastname: '',
      email: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      firstname: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      lastname: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email().required('Required'),
    }),
    onSubmit: (values) => {
      api
        .post('/auth/signup', {
          username: values.username,
          password: values.password,
          firstName: values.firstname,
          lastName: values.lastname,
          email: values.email,
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
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="firstname"
          id="firstname"
          required
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          error={formik.errors.firstname}
        />
        <Label
          error={formik.errors.firstname}
          htmlFor="firstname"
          className="label"
        >
          First name
        </Label>
        <InputMessage messType="error" className="message">
          {formik.errors.firstname}
        </InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="text"
          className="field"
          name="lastname"
          id="lastname"
          required
          placeholder="Last name"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={formik.errors.lastname}
        />
        <Label
          error={formik.errors.lastname}
          htmlFor="lastname"
          className="label"
        >
          Last name
        </Label>
        <InputMessage messType="error" className="message">
          {formik.errors.lastname}
        </InputMessage>
      </InputGroup>
      <InputGroup>
        <Input
          type="email"
          className="field"
          name="email"
          id="email"
          required
          placeholder="Last name"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Label error={formik.errors.email} htmlFor="email" className="label">
          Email
        </Label>
        <InputMessage messType="error" className="message">
          {formik.errors.email}
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
