import React, { useState, useRef } from 'react';
import { sleep, ghostType } from 'util/demo_bot_util';
import { Topbar, NavLink, CloseBtn, Wrapper, Title, Form, Input, InputGroup, ErrorMsg, Btn } from './SessionModal.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SessionModal = ({ history, login, signup, isLoggedIn, openAltModal, closeModal, action }) => {

  const initialValues = { username: '', password: '' }
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Username must be at least 5 characters')
      .max(12, 'Username must be less than 13 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(30, 'Password must be less than 31 characters')
      .required('Password is required')
  });

  const processForm = formData => {
    return (action === 'Signup') ? signup(formData) : login(formData);
  }

  const { getFieldProps, handleSubmit, errors, touched, setErrors, setFieldValue, resetForm } = useFormik({
    initialValues,
    validationSchema: (action === 'Signup') ? validationSchema : undefined,
    onSubmit: async userData => {
      try {
        userData.password = '';
        await processForm(userData)
        closeModal()
      } catch (err) {
        setErrors(err.response.data)
      }
    },
  });

  // ---------- Demo Bot Config
  const $submitBtn = useRef(null);
  const $usernameField = useRef(null);
  const $passwordField = useRef(null);
  const [isBotRuning, setBotRunning] = useState(false);

  const runDemoLogin = () => {
    if (isBotRuning) { return };
    setBotRunning(true);
    resetForm()
    ghostType('demolicious', letter => {
      setFieldValue('username', $usernameField.current.value + letter)
    }, 1500)
      .then(() => sleep(800))
      .then(() => ghostType('password', letter => {
        setFieldValue('password', $passwordField.current.value + letter)
      }, 1000))
      .then(() => sleep(400))
      .then(() => { setBotRunning(false); $submitBtn.current.click(); });
  }
  // --------------------------

  return (
    <Wrapper>
      <Topbar>
        <NavLink onClick={openAltModal}>{(action === 'Signup') ? 'Login' : 'Signup'}</NavLink>
        <CloseBtn onClick={closeModal} />
      </Topbar>

      <Title>Guess Who, Haiku</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            ref={$usernameField}
            {...getFieldProps('username')}
            placeholder='Username'
            data-touched={touched.username}
            data-error={Boolean(errors.username)}
          />
          <ErrorMsg>{errors.username}</ErrorMsg>
        </InputGroup>
        <InputGroup>
          <Input
            ref={$passwordField}
            {...getFieldProps('password')}
            placeholder='Password'
            data-touched={touched.password}
            data-error={Boolean(errors.password)}
            type='password'
          />
          <ErrorMsg>{errors.password}</ErrorMsg>
        </InputGroup>
        <Btn type='submit' ref={$submitBtn}>{action}</Btn>
      </Form>
      {action === 'Login' && <Btn secondary onClick={runDemoLogin}>Demo</Btn>}
    </Wrapper>

  );
}

export default SessionModal;