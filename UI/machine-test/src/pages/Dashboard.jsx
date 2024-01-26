import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import { publicRequest } from "../api/requestmathod";
import LIneChart from "../components/chartComponents/LIneChart";

const Dashboard = () => {
  const [graphData, setGraphData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleData = async (route, setData) => {
    try {
      const res = await publicRequest.get(`/${route}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleGraphData = async () => {
    setLoading(false);
    try {
      const res = await publicRequest.get("/graph");
      console.log("data", res.data);
      if (res && res.data.length > 0) {
        const labels = await res.data.map((item) => item.x);
        const dataSet = await res.data.map((item) => item.y);

        setGraphData({
          labels: labels,
          datasets: [
            {
              label: "Line Data",
              data: dataSet,
              backgroundColor: ["#EDF3FF"],
              borderColor: "#007942",
              borderWidth: 2,
            },
          ],
        });
        setLoading(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // handleData("/graph", setGraphData);
    // handleData("/pie-chart", setPieData);
    // handleData("/table", setTableData);
    handleGraphData();
  }, []);
  console.log(graphData);
  // console.log(pieData);
  const Lineoptions = {
    scales: {
      x: {
        type: "linear",
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
      line: {
        tension: 0.3,
      },
    },
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-5">
        <div className="flex-1 h-[300px] bg-white p-5 rounded-md shadow-lg">
          {loading ? (
            <LIneChart chartData={graphData} options={Lineoptions} />
          ) : (
            "loading..."
          )}
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;
