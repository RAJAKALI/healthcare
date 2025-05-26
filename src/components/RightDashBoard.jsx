import { calendarDays, calendarDates } from "../data/rightdashboard";
const RightDashBoard = () => {
  return (
    <div className="right-dashboard">
      <div className="calendar-section">
        <div className="calendar-header">
          <h3>October 2021</h3>
          <div className="nav-arrows">
            <span>◀</span>
            <span>▶</span>
          </div>
        </div>
        <div className="calendar-grid">
          {calendarDays.map((day, index) => {
            const dateData = calendarDates[index];

            return (
              <div
                className={`calendar-column ${
                  index === 1 ? "highlight-column" : ""
                }`}
                key={day}
              >
                <div className="calendar-day">{day}</div>
                <div className="calendar-date">{dateData.date}</div>
                <div className="calendar-times">
                  {dateData.times.map((time, idx) => (
                    <div
                      key={idx}
                      className={`time-box ${
                        (index === 1 && time === "09:00") ||
                        (index === 3 && time === "11:00") ||
                        (index === 5 && time === "12:00") ||
                        (index === 6 && time === "09:00")
                          ? "highlight-time"
                          : ""
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
<div className="appointment-section">
        <div className="appointment-dentist">
          <div className="appointment-dentist-header">
            <h6>Dentist</h6>
            🦷
          </div>
          <div className="appointment-dentist-body">
            <p className="time">09:00 - 11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
        </div>

        <div className="appointment-physio">
          <div className="appointment-physio-header">
            <h6>Physiotherapy Appointment</h6>
            💪🏻
          </div>
          <div className="appointment-physio-body">
            <p className="time">11:00 - 12:00</p>
            <p>Dr. Kevin Djones</p>
          </div>
        </div>
      </div>

      <div className="upcoming-schedule">
        <h4>The Upcoming Schedule</h4>

        <p className="day-label">On Thursday</p>
        <div className="thursday">
          <div className="health-checkoup">
            <div className="health-checkoup-header">
              <h6>Health checkup complete</h6>
              💉
            </div>
            <div className="health-checkoup-body">
              <p className="time">11:00 AM</p>
            </div>
          </div>
          <div className="ophthalmologist">
            <div className="ophthalmologist-header">
              <h6>Ophthalmologist</h6>
              👁‍🗨
            </div>
            <div className="ophthalmologist-body">
              <p className="time">14:00 PM</p>
            </div>
          </div>
        </div>
        <p className="day-label">On Saturday</p>
        <div className="saturday">
          <div className="cardiologist">
            <div className="ophthalmologist-header">
              <h6>Cardiologist</h6>
              <p style={{ color: 'red' }}>❤</p>
            </div>
            <div className="ophthalmologist-body">
              <p className="time">12:00 AM</p>
            </div>
          </div>
          <div className="neurologist">
            <div className="neurologist-header">
              <h6>Neurologist</h6>
              👨🏻‍⚕️
            </div>
            <div className="neurologist-body">
              <p className="time">16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDashBoard;
