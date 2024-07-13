import React, { useState } from 'react';
import './ResponsiveForm.css';

const ResponsiveForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    designation: '',
    location: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullname) errors.fullname = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.mobile) errors.mobile = 'Mobile Number is required';
    if (!formData.designation) errors.designation = 'Designation is required';
    if (!formData.location) errors.location = 'Location is required';
    if (!formData.resume) errors.resume = 'Resume is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className='myform'>
        <div className="form-field">
          <input
            className="form-input"
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="form-label" htmlFor="fullname">Full Name</label>
          {errors.fullname && <div className="form-error">{errors.fullname}</div>}
        </div>
        <div className="form-field">
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="form-label" htmlFor="email">Email</label>
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-field">
          <input
            className="form-input"
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="form-label" htmlFor="mobile">Mobile Number</label>
          {errors.mobile && <div className="form-error">{errors.mobile}</div>}
        </div>
        <div className="form-field">
          <input
            className="form-input"
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="form-label" htmlFor="designation">Designation</label>
          {errors.designation && <div className="form-error">{errors.designation}</div>}
        </div>
        <div className="form-field">
          <input
            className="form-input"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="form-label" htmlFor="location">Location</label>
          {errors.location && <div className="form-error">{errors.location}</div>}
        </div>
        <div className="form-field">
          <input
            className="form-input"
            type="file"
            id="resume"
            name="resume"
            accept="application/pdf"
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="resume">Resume (PDF)</label>
          {errors.resume && <div className="form-error">{errors.resume}</div>}
        </div>
        <div className="btn-end-btn df aci jcc">
        <button className="form-button " type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default ResponsiveForm;
