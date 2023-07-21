import * as yup from 'yup';

export const validations = (min: number = 0) => {
  return {
    email: yup
      .string()
      .email('Email invalido')
      .min(min || 0, `Como minimo ${min} caracteres`),
    number: yup
      .number()
      .positive()
      .integer()
      .typeError('Numero invalido')
      .min(min || 0, `Como minimo ${min} caracteres`),
    string: yup.string().min(min || 0, `Como minimo ${min} CARACTERES`),
    date: yup.date().typeError('Fecha invalida'),
    boolean: yup.boolean().typeError('Booleano invalido'),
  };
};
