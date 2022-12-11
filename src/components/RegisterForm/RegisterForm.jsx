import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Button } from 'components/Button/Button';
import { Form, Label, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [passwordType, setPasswordType] = useState('password');
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Please, enter a valid email')
      .required('This field cannot be empty'),
    name: yup
      .string()
      .min(1, 'Name must contain at least 1 symbol')
      .required('This field cannot be empty'),
    password: yup
      .string()
      .min(6, 'Password must contain at least 6 symbols')
      .required('This field cannot be empty'),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema,
    onSubmit: values => {
      localStorage.setItem('userData', JSON.stringify(values));
      navigate('/shopify', { replace: true });
      resetForm();
    },
  });

  const showPassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label error={errors.email}>
        Email
        <Input
          type="text"
          name="email"
          value={values.email}
          placeholder="admin@trychad.com"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </Label>
      <Label error={errors.name}>
        Your name
        <Input
          type="text"
          name="name"
          value={values.name}
          placeholder="Mega Chad"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </Label>
      <Label error={errors.password}>
        Password
        <Input
          type={passwordType}
          name="password"
          value={values.password}
          placeholder="Enter password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
        <button type="button" onClick={showPassword}>
          {passwordType === 'password' ? <FiEye /> : <FiEyeOff />}
        </button>
        {touched.password && errors.password && <p>{errors.password}</p>}
      </Label>

      <Button type="submit" text="Create account" />
    </Form>
  );
};
