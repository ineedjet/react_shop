import React from 'react';
import { Field } from 'redux-form';

const renderField = ({
                       input,
                       label,
                       type, meta: { touched, error },
                     }) => (
  <div>
    <label>
      {label}
    </label>

    <input {...input} placeholder={label} type={type} />
    {touched && error && (
      <div>
        {error}
      </div>
    )}
  </div>
);

export default ({
                  handleSubmit,
                  pristine,
                  reset,
                  submitting,
                }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="name"
      type="text"
      component={renderField}
      label="Your name"
    />
    <Field
      name="email"
      type="email"
      component={renderField}
      label="Email"
    />
    <Field
      name="phone"
      type="text"
      component={renderField}
      label="Phone number"
    />
    <Field
      name="address"
      type="textarea"
      component={renderField}
      label="Address"
    />
    <div>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Reset
      </button>
      <button type="submit" disabled={submitting}>
        Order
      </button>
    </div>
  </form>
);