import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../css/DriveHabit.css";

const DriveHabit = () => {
  const oneMonthData = [
    { date: "2024-11-01", seatbeltAlerts: 2, drowsinessAlerts: 1 },
    { date: "2024-11-02", seatbeltAlerts: 0, drowsinessAlerts: 3 },
    { date: "2024-11-03", seatbeltAlerts: 1, drowsinessAlerts: 0 },
    { date: "2024-11-04", seatbeltAlerts: 3, drowsinessAlerts: 2 },
    { date: "2024-11-05", seatbeltAlerts: 1, drowsinessAlerts: 4 },
    { date: "2024-11-06", seatbeltAlerts: 0, drowsinessAlerts: 0 },
    { date: "2024-11-07", seatbeltAlerts: 2, drowsinessAlerts: 2 },
  ];

  const navigate = useNavigate();

  const handleLeftButtonClick = () => {
    navigate(-1);
  };

  return (
    <div
      style={{ width: "100%", display: "grid", gap: "20px", height: "70vh" }}
    >
      <div className="top-container">
        <div className="left-button" onClick={handleLeftButtonClick}></div>
        <p className="drive-habit-title">운전 습관 차트</p>
      </div>

      {/* 안전벨트 경고 차트 */}
      <div className="chart-arrange">
        <div className="chart-container">
          <h3 style={{ fontSize: "16px" }}>한 달간 안전벨트 경고 횟수</h3>
          <ResponsiveContainer>
            <LineChart data={oneMonthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="seatbeltAlerts"
                stroke="#8884d8"
                name="안전벨트 경고"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 졸음운전 경고 차트 */}
        <div className="chart-container">
          <h3 style={{ fontSize: "16px" }}>한 달간 졸음운전 경고 횟수</h3>
          <ResponsiveContainer>
            <LineChart data={oneMonthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="drowsinessAlerts"
                stroke="#82ca9d"
                name="졸음운전 경고"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DriveHabit;
