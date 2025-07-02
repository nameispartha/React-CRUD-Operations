import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // 👈 Import the CSS file

const Addstudents = () => {
  const navigate = useNavigate();

  const [form, setform] = useState({
    name: '',
    class: '',
    percentage: '',
    status: ''
  });

  const handleInput = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post('http://localhost:3001/students', form);
      console.log('Bro Student Added Successfully:');
      navigate('/');
    } catch (error) {
      console.log('Sorry bro some mistake is happend:', error);
    }
  };

  return (
    <div className="add-student-container">
      <h2 className="form-title">Add New Student 👨‍🎓</h2>

      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>👤 Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleInput} required />
        </div>

        <div className="form-group">
          <label>🏫 Class:</label>
          <input type="text" name="class" value={form.class} onChange={handleInput} required />
        </div>

        <div className="form-group">
          <label>📊 Percentage:</label>
          <input type="number" name="percentage" value={form.percentage} onChange={handleInput} required />
        </div>

        <div className="form-group">
          <label>📄 Status:</label>
          <select name="status" value={form.status} onChange={handleInput} required>
            <option value="">--Select--</option>
            <option value="Pass">✅ Pass</option>
            <option value="Fail">❌ Fail</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">➕ Add Student</button>
      </form>
    </div>
  );
};

export default Addstudents;
