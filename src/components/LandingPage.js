import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import { useEffect, useState } from "react";

export const LandingPage = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
        const apiUrl ="https://main--vocal-crostata-93f231.netlify.app/data.json";
        // const apiUrl = "http://localhost:3000/data.json";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data);
            setData(data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

    
  return (
    <div className="h-auto w-[100%]">
      <NavBar
        data = {data}
      />
          <Header />
          <MainSection
              data={data}
              name="Top Albums"
              showTabs={false}
              showButton={true}
          />

          <MainSection
              data={data}
              name="New Albums"
              showTabs={false}
              showButton={true}
          />

          <MainSection
              data={data}
              name="Songs"
              showTabs={true}
              showButton={false}
          />

          <Footer/>
    </div>
  );
};

