import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import Transactions from './components/Transactions';
import Stats from './components/Stats';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const { Header, Content, Footer } = Layout;


const navItems = [
  {
    key: 1,
    label: ( <NavLink to="/"><strong>Transactions</strong></NavLink> )
  },
  {
    key: 2,
    label: ( <NavLink to="/stats"><strong>Statistics</strong></NavLink> )
  }
];
const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


const App = () => {
  let [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "grey",
          
          }}
        >
          <h1 style={{ color: "white"  , padding: "0 100px 0 "}}>Transaction Dashboard</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navItems}
            style={{
              flex: 1,
              padding: "0 100px 0 ",
              backgroundColor: "grey",
      
            }}
          />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            style={{
              width: 500
            }}
            options={options.map((text, i) => {
              return {
                value: i,
                label: text
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: "0px 48px",
           
            minHeight: 600
          }}
        >
          <Routes>
            <Route path="/stats" element={
              <Stats month={month} monthText={options[month]} />
            } />
              <Route path="/" element={
              <Transactions month={month} monthText={options[month]} />
            } />
          </Routes>

        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "grey",
            color: "white"
          }}
        >
          Created by <strong>Om Raut</strong>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
