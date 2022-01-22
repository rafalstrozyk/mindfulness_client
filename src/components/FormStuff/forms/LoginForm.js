import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Input from '../inputs/Input';
import InputGroup from '../group/InputGroup';
import Label from '../labels/Label';
import InputMessage from '../message/InputMessage';
import StyledForm from './StyledForm';
import api from '../../../apis/api';
import { setToken } from '../../../redux/Slice/userSlice';

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false),
    [error, setError] = useState(''),
    genericErrorMessage = 'Something went wrong! Please try again later.';

  const dispatch = useDispatch();

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
      setError('');
      setIsSubmitting(true);

      // fetch('http://localhost:8000/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify({
      //     username: values.username,
      //     password: values.password,
      //   }),
      // })
      //   .then(async (response) => {
      //     setIsSubmitting(false);
      //     console.log(response.headers.get('refreshToken'));
      //     if (!response.ok) {
      //       if (response.status === 400) {
      //         setError('Please fill all the fields correctly!');
      //       } else if (response.status === 401) {
      //         setError('Invalid email and password combination.');
      //       } else {
      //         setError(genericErrorMessage);
      //       }
      //     } else {
      //       const data = await response.json();
      //       dispatch(setToken(data.token));
      //     }
      //   })
      //   .catch((error) => {
      //     setIsSubmitting(false);
      //     console.log(error);
      //     setError(genericErrorMessage);
      //   });

      api
        .post('/auth/login', {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          setIsSubmitting(false);
          dispatch(setToken(res.data.token));
        })
        .catch((error) => {
          setIsSubmitting(false);
          if (error.response.status === 400) {
            setError('Please fill all the fields correctly!');
          } else if (error.response.status === 401) {
            setError('Invalid email and password combination.');
          } else {
            setError(genericErrorMessage);
          }
        });
    },
  });
  return (
    <>
      {error && <p>{error}</p>}

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
          disabled={
            Object.keys(formik.errors).length === 0 || isSubmitting
              ? false
              : true
          }
          type="submit"
        >
          Submit
        </button>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
