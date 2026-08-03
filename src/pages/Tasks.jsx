import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const API_URL = 'http://localhost:3000/tasks';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.success) {
        setTasks(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch tasks');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });
      const data = await response.json();
      
      if (data.success) {
        setTasks([...tasks, data.data]);
        setTitle('');
        setDescription('');
      } else {
        throw new Error(data.error || 'Failed to create task');
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="about" style={{ flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="skills-title" style={{ marginBottom: '1rem' }}>Task <span className="gradient-text">Manager</span></h2>
      <p className="projects-subtitle">Create and manage your tasks</p>

      <form onSubmit={handleCreateTask} className="skill-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '600px', marginBottom: '3rem', textAlign: 'left' }}>
        <input 
          type="text" 
          placeholder="Task Title (Required)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', fontFamily: 'inherit' }}
        />
        <textarea 
          placeholder="Task Description" 
          rows="3"
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={{ padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white', resize: 'none', fontFamily: 'inherit' }}
        ></textarea>
        <button type="submit" className="btn" disabled={isSubmitting} style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', border: 'none', fontFamily: 'inherit', opacity: isSubmitting ? 0.7 : 1 }}>
          {isSubmitting ? 'Creating...' : 'Create Task'}
        </button>
      </form>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Current Tasks</h3>
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && tasks.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No tasks available. Create one above!</p>
        )}
        {!loading && !error && tasks.length > 0 && (
          <div className="skills-grid" style={{ gridTemplateColumns: '1fr' }}>
            {tasks.map(task => (
              <div key={task.id} className="skill-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{task.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{task.description}</p>
                </div>
                <div>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    background: task.completed ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                    color: task.completed ? '#4ade80' : '#facc15'
                  }}>
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tasks;
