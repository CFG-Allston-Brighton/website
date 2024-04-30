import React, { useState, useEffect } from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import axios from "axios";

const CensusMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.census.gov/data/2019/acs/acs5", {
          params: {
            key: "4cb22034cde4e2d7c6ec343a85b2c8309b6688bc",
            get: "B19013_001E", // Median household income variable
            for: "tract:*", // All census tracts
            in: "state:25 county:025", // Massachusetts (25) and Suffolk County (025)
          },
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MapContainer center={[42.35346337378607, -71.14454379278231]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((item) => (
        <Marker key={item[1]} position={[item[8], item[9]]}>
          <Popup>{item[0]}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CensusMap;
