import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'; // 👈 Import CSS file

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const Fetchstudents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/students");
        setStudents(response.data);
      } catch (error) {
        console.log("Bro the Error:", error);
      }
    };

    Fetchstudents();
  }, []);

  const StudentDelete = async (id) => {
    const ConfirmDelete = window.confirm("Bro Pakka na I will delete it ...");
    if (ConfirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/students/${id}`);
        alert("Bro successfully I DELETED it ");
        setStudents(prevStudents => prevStudents.filter(s => s.id !== id));
      } catch (error) {
        console.error('I can’t delete it:', error);
        alert("Sorry I can't");
      }
    }
  };

  return (
    <div className="home-container">
      <h2 className="home-title">🎓 Students List</h2>
      {students.length === 0 ? (
        <p className="loading-text">⏳ Wait bro... it's loading</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Percentage %</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map(eachstudent => (
              <tr key={eachstudent.id}>
                <td>{eachstudent.id}</td>
                <td>{eachstudent.name}</td>
                <td>{eachstudent.class}</td>
                <td>{eachstudent.percentage}</td>
                <td>{eachstudent.status}</td>
                <td>
                  <Link to={`/edit/${eachstudent.id}`}>
                    <button className="edit-btn">✏️ Edit</button>
                  </Link>
                  <button className="delete-btn" onClick={() => StudentDelete(eachstudent.id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
