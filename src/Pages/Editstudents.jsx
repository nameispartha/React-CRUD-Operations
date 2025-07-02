import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // 👈 Import CSS

const Editstudents = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setform] = useState({
    name: '',
    class: '',
    percentage: '',
    status: ''
  });

  useEffect(() => {
    const StoredData = async () => {
      try {
        const results = await axios.get(`http://localhost:3001/students/${id}`);
        setform(results.data);
      } catch (error) {
        console.log("Sorry Data did not find:", error);
      }
    };
    StoredData();
  }, [id]);

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/students/${id}`, form);
      alert('Student Data Updated Successfully...');
      navigate('/');
    } catch (error) {
      console.log("Something went wrong...:", error);
      alert("Something went wrong. Please check it bro...");
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-container">
      <h2 className="edit-title">✏️ Edit Student</h2>
      <form onSubmit={formSubmit} className="edit-form">
        <div className="form-group">
          <label>👤 Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>🏫 Class:</label>
          <input type="text" name="class" value={form.class} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>📊 Percentage:</label>
          <input type="number" name="percentage" value={form.percentage} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>🎯 Status (Pass/Fail):</label>
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Pass">✅ Pass</option>
            <option value="Fail">❌ Fail</option>
          </select>
        </div>

        <button type="submit" className="save-btn">💾 Save Changes</button>
      </form>
    </div>
  );
};

export default Editstudents;
