import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Zorunlu alan'),
  description: Yup.string().required('Zorunlu alan'),
  startDate: Yup.date().required('Zorunlu alan'),
  endDate: Yup.string().required('Zorunlu alan'),
});

export {taskSchema};
