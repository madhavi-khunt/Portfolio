import React from "react";

const Statistics = () => {
  const stats = [
    { label: "Years of Experience", value: "+12" },
    { label: "Projects Completed", value: "+46" },
    { label: "Worldwide Clients", value: "+20" },
  ];

  return (
    <div className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
