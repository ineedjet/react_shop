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
      label="Ваше имя"
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
      label="Телефон"
    />
    <Field
      name="address"
      type="text"
      component={renderField}
      label="Адрес"
    />
    <div>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Сбросить
      </button>
      <button type="submit" disabled={submitting}>
        Заказать
      </button>
    </div>
  </form>
);