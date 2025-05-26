import { activityData } from "../data/activitydata";
const Activity = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="appointment-count">3 appointment on this week</span>
      </div>
      <div className="activity-bars">
        {activityData.map((item, index) => (
          <div key={index} className="activity-bar">
            {item.values.map((val, i) => (
              <div
                key={i}
                className={`bar ${i === 0 ? "bar-sky" : "bar-purple"}`}
                style={{ height: `${val}px` }}
              />
            ))}
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
