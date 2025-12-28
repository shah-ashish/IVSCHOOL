import { useState } from "react";

export const useAdmissionForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
  };

  return { handleChange, handleSubmit };
};
