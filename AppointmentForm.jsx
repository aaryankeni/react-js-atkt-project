import { useState } from 'react';

function AppointmentForm({ onAdd }) {
  const [customerName, setCustomerName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [serviceName, setServiceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName.trim() || !serviceName.trim() || !appointmentDate) {
      return;
    }

    onAdd({
      customerName: customerName.trim(),
      appointmentDate,
      serviceName: serviceName.trim(),
    });

    setCustomerName('');
    setAppointmentDate('');
    setServiceName('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>

      <label htmlFor="customerName">Customer Name</label>
      <input
        id="customerName"
        type="text"
        placeholder="Enter customer name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />

      <label htmlFor="appointmentDate">Appointment Date</label>
      <input
        id="appointmentDate"
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />

      <label htmlFor="serviceName">Service Name</label>
      <input
        id="serviceName"
        type="text"
        placeholder="e.g. General Checkup"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
        required
      />

      <button type="submit">Add Appointment</button>
    </form>
  );
}

export default AppointmentForm;
