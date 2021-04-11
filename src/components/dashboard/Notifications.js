import React from "react";

const Notifications = () => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
          </ul>
          <p>
            The notification feature has not been applied (as in the tutorial)
            as it needs to use cloud function which needs to be <b>paid</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
