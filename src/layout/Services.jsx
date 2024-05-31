import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

// FormInput Component
const FormInput = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} />
    </div>
  );
};

// Main Form Component
const Services= () => {
  const methods = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="firstName" label="First Name" />
        <FormInput name="lastName" label="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Services;
