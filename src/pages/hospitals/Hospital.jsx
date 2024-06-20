import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Header from '@/layout/Header';
import Main from '@/layout/Main';

const Hospital = () => {
  const form = useForm();

  return (
    <div>
      <FormProvider {...form}>
        <Header />
        <Main />
      </FormProvider>
    </div>
  );
};

export default Hospital;
