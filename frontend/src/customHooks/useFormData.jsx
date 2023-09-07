import { useState } from 'react';

const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleInputChange };
};

export default useForm;
