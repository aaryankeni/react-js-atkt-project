import { useState } from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentCard from './components/AppointmentCard';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, { id: Date.now(), ...appointment }]);
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>Appointment Management System</h1>

      <AppointmentForm onAdd={addAppointment} />

      <h2>Appointments ({appointments.length})</h2>

      {appointments.length === 0 ? (
        <p className="empty-message">No appointments available.</p>
      ) : (
        <div className="card-list">
          {appointments.map((item) => (
            <AppointmentCard
              key={item.id}
              id={item.id}
              customerName={item.customerName}
              appointmentDate={item.appointmentDate}
              serviceName={item.serviceName}
              onDelete={deleteAppointment}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
