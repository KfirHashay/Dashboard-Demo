import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import AdminWrap from "../wrapper/AdminWrap";

import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

import product9 from "../data/product9.jpg";

import {
  Button,
  SparkLine,
  Stacked,
  Pie,
  LineChart,
  IoIosMore,
  GoPrimitiveDot,
} from "../components";

import { useStateContext } from "../context/ContextProvider";

const DropDown = ({ currentMode }) => (
  <div className="card_drop">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{
        border: "none",
        color: currentMode === false && "white",
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Main = () => {
  const currentMode = localStorage.getItem("theme") === "light" ? true : false;
  const { currentColor } = useStateContext();

  return (
    <div className="flex-container">
      {/* Overview*/}
      <div className="main_overview">
        {earningData.map((item) => (
          <div className="overview_card" key={item.title}>
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>
            <p className="p-1">
              <span className="span-1">{item.amount}</span>
            </p>

            <p className="p-2">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="main_cards_1">
        {/* Card 1*/}
        <div className="card-1">
          <div className="card-1_header">
            <p className="headline">Revenue Updates</p>

            <div className="right">
              <p>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>

              <p>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="card-1_content">
            <div className="sparkline">
              <div>
                <p>
                  <span className="sparkline_span-1">$93,438</span>
                  <span className="sparkline_span-2">23%</span>
                </p>
                <p className="p-2">Budget</p>
              </div>
              <div className="second">
                <p>$48,487</p>

                <p>Expense</p>
              </div>

              <div className="component">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="Btn">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div className="flex_right">
          <div className="card-2" style={{ backgroundColor: currentColor }}>
            <div className="card-2_header">
              <p className="headline">Earnings</p>

              <div className="right">
                <p>$63,448.78</p>
                <p>Monthly revenue</p>
              </div>
            </div>

            <div className="card-2_component">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="card-3">
            <div className="text">
              <p>$43,246</p>
              <p>Yearly sales</p>
            </div>

            <div className="card-3_component">
              <Pie
                id="pie-chart"
                currentMode={currentMode}
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="main_cards_2">
        <div className="card-4">
          <div className="card-4_header">
            <p>Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="card-4_body">
            {recentTransactions.map((item) => (
              <div key={item.title} className="card-4_content">
                <div className="buttons">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </button>
                  <div className="buttons_info">
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
                <p style={{ color: item.pcColor }}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="card-4_footer">
            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p>36 Recent Transactions</p>
          </div>
        </div>
        <div className="card-5">
          <div className="card-5_header">
            <p>Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="card-5_component">
            <LineChart currentMode={currentMode} />
          </div>
        </div>
      </div>

      <div className="main_cards_3">
        <div className="card-6">
          <div className="card-6_header">
            <p>Weekly Stats</p>
            <button type="button">
              <IoIosMore />
            </button>
          </div>

          <div className="card-6_body">
            {weeklyStats.map((item) => (
              <div key={item.title} className="card-6_content">
                <div className="buttons">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div className="buttons_info">
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <p style={{ color: item.pcColor }}>{item.amount}</p>
              </div>
            ))}

            <div className="card-6_component">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkLine"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color={currentColor}
              />
            </div>
          </div>
        </div>

        <div className="card-7">
          <div className="card-7_header">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <p className="date">16 APR, 2021</p>

          <div className="card-7_content">
            {medicalproBranding.data.map((item) => (
              <div key={item.title}>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="teams">
            <p className="headline">Teams</p>

            <div className="tags">
              {medicalproBranding.teams.map((item) => (
                <p key={item.name} style={{ background: item.color }}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="leaders">
            <p>Leaders</p>
            <div>
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="card-7_footer">
            <div className="btn">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p>36 Recent Transactions</p>
          </div>
        </div>

        <div className="card-8">
          <div className="card-8_header">
            <p>Daily Activities</p>
            <button type="button">
              <IoIosMore />
            </button>
          </div>
          <div className="card-8_content">
            <img src={product9} alt="" />
            <div className="card-8_text">
              <p>React 18 coming soon!</p>
              <p>By Johnathan Doe</p>
              <p>
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="card-8_footer">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWrap(Main, "main");
