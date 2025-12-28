import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    child_name: "",
    parent_name: "",
    class: "",
    phone: "",
    email: "",
    preferred_date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.child_name.trim()) {
      newErrors.child_name = "Child name is required";
    }

    if (!formData.parent_name.trim()) {
      newErrors.parent_name = "Parent name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzoz7CW0PmZZR2K9ndZozFRR7pLz9QrXVAHf1fPtm1OKZnqyKhodRomKr3_VYiB3RQ1/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // no-cors => assume success
      setSuccess(true);
      setFormData({
        child_name: "",
        parent_name: "",
        class: "",
        phone: "",
        email: "",
        preferred_date: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: "Child Name", name: "child_name", icon: "person", type: "text" },
    { label: "Parent Name", name: "parent_name", icon: "group", type: "text" },
    { label: "Class", name: "class", icon: "school", type: "text" },
    { label: "Phone", name: "phone", icon: "phone", type: "tel" },
    { label: "Email", name: "email", icon: "email", type: "email" },
    {
      label: "Preferred Date",
      name: "preferred_date",
      icon: "calendar_today",
      type: "date",
    },
  ];

  if (success) {
    return (
      <section id="admissions" className="px-4 sm:px-6 -mt-10 sm:-mt-16 relative z-10 pb-10 pt-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <span className="material-symbols-outlined text-green-600 text-5xl">
              check_circle
            </span>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You</h2>
            <p className="text-gray-600 mt-3 text-base">
              We will connect with you shortly.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Our counselling team will reach out to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 text-blue-700 font-semibold hover:underline"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="admissions" className="px-4 sm:px-6 -mt-10 sm:-mt-16 relative z-10 pb-10 pt-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Book a Counselling Session
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Our academic counsellors will guide you personally
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((field) => (
              <div key={field.name} className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                  {field.icon}
                </span>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.label}
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    outline-none transition-all text-sm sm:text-base"
                />
                {errors[field.name] && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 relative">
            <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400 text-xl">
              message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message (Optional)"
              rows="3"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                outline-none resize-none text-sm sm:text-base"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-6 bg-blue-900 text-white py-4 rounded-lg
              font-semibold text-lg hover:bg-blue-800 transition-all
              shadow-lg hover:shadow-xl disabled:opacity-60
              flex items-center justify-center gap-2"
          >
            {loading ? "Submitting..." : "Register Now"}
            {!loading && (
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
