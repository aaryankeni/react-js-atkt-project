function AppointmentCard({ id, customerName, appointmentDate, serviceName, onDelete }) {
  return (
    <div className="card">
      <h3>{customerName}</h3>
      <p><strong>Service:</strong> {serviceName}</p>
      <p><strong>Date:</strong> {appointmentDate}</p>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete Appointment
      </button>
    </div>
  );
}

export default AppointmentCard;
