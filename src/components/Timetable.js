
const Timetable = () => {
  // Replace this data with your actual schedule
  const schedule = [
    { time: '9:00 AM', monday: 'Math', tuesday: 'English', wednesday: 'Science' },
    { time: '10:00 AM', monday: 'History', tuesday: 'Math', wednesday: 'Physical Education' },
    // Add more entries as needed
  ];

  return (
    <div>
      <h1>Weekly Time Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            {/* Add more days as needed */}
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.monday}</td>
              <td>{entry.tuesday}</td>
              <td>{entry.wednesday}</td>
              {/* Add more cells for additional days */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
