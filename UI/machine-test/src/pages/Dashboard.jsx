import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import { publicRequest } from "../api/requestmathod";
import LIneChart from "../components/chartComponents/LIneChart";
import PieChart from "../components/chartComponents/PieChart";
import TableMUI from "../components/Table";
import PersonalCard from "../components/PersonalCard";
import {
  Lineoptions,
  pieChartOptions,
  pieLegentShow,
} from "../utils/graphOptions";

const Dashboard = () => {

  //states
  const [graphData, setGraphData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState({
    table: false,
    chart: false,
    pie: false,
  });

  //handling All apis
  // const handleData = async (route, setData) => {
  //   try {
  //     const res = await publicRequest.get(`/${route}`);
  //     setData(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //Fetch table data from Api
  const handleTableData = async () => {
    setLoading((prev) => ({ ...prev, table: false }));
    try {
      const res = await publicRequest.get(`/table`);
      setTableData(res.data);
      setLoading((prev) => ({ ...prev, table: true }));
    } catch (err) {
      console.log("catch error", err);
    }
  };

  //Fetch Graph data from Api ang assinging to chart state with its behaviour
  const handleGraphData = async () => {
    setLoading((prev) => ({ ...prev, chart: false }));
    try {
      const res = await publicRequest.get("/graph");
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
              borderColor: "#D2E6F1",
              borderWidth: 2,
            },
          ],
        });
        setLoading((prev) => ({ ...prev, chart: true }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Fetch PIE data from Api ang assinging to chart state with its behaviour
  const handlePieData = async () => {
    setLoading((prev) => ({ ...prev, pie: false }));
    try {
      const res = await publicRequest.get("/pie-chart");
      if (res && res.data && res.data.length > 0) {
        const labels = await res.data.map((item) => item.label);
        const dataSet = await res.data.map((item) => item.value);
        setPieData({
          labels: labels,
          datasets: [
            {
              label: "Pie Chart Data",
              data: dataSet,
              backgroundColor: [
                "#67C587",
                "#88D1A1",
                "#A9DEBA",
                "#C9EAD4",
                "#EAF6ED",
              ],
            },
          ],
        });
        setLoading((prev) => ({ ...prev, pie: true }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleTableData();
    handleGraphData();
    handlePieData();
  }, []);

  return (
    <div className=" h-auto">
      <Navbar />
      <div className="flex gap-5 my-8">
        <div className="flex-[2] h-[450px] bg-white p-3 rounded-md shadow-lg">
          {loading.chart ? (
            <LIneChart chartData={graphData} options={Lineoptions} />
          ) : (
            "loading..."
          )}
        </div>
        <div className="flex-1 h-[450px] bg-white p-3 px-5 rounded-md shadow-lg">
          {loading.pie ? (
            <>
              <div className="h-[250px]">
                <PieChart chartData={pieData} options={pieChartOptions} />
              </div>
              <div className="flex flex-col gap-1 mt-6">
                {pieLegentShow.map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div
                      className="h-4 w-4 "
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            "loading..."
          )}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-[3] shadow-xl " style={{ height: "fit-content" }}>
          {loading.table ? <TableMUI data={tableData} /> : "loading..."}
        </div>
        <PersonalCard />
      </div>
    </div>
  );
};

export default Dashboard;
