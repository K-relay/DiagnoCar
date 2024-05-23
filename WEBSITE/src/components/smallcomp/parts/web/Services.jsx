import React, { useEffect, useState } from "react";
import Footerdashbord from "../../smallcompindashbord/footerdashbord";
import MapComponent from "./../smallcomponenttomap/mapcomponent";
import axios from "axios";

function Services() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://51.20.138.46/partners/');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div
      className="bg-base-200 text-base-content  "
      
    >
      <h1 className="text-center text-2xl  pt-20 mb-3">
        نزیکترین شوێن بۆ خزمەتگوزاریەکانمان
      </h1>

      <div class="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch">

      {data && data.map(partner => (
        <div class="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 bg-base-100 shadow-xl p-4 lg:m-4">
          <div class="map-container">
            <MapComponent
              lat={partner.latitude}
              lng={partner.longitude}
              label={partner.title}
              link={"/new-york-page"}
            />
          </div>
          <div class="card-body p-4">
            <h2 class="card-title">
            {partner.title}
              <div class="badge badge-secondary">{partner.category}</div>
              <div class="badge badge-primary">{partner.location}</div>
            </h2>
            <p className="text-right">
            {partner.description}
            </p>
            <div class="card-actions flex justify-between mt-4">
              <div class="badge badge-outline">ژمارەی موبایل:{partner.phoneNumber}</div>
              <div class="badge badge-outline">
                <a href={partner.link}> لێرەیە</a>: لینیکی پەیوەندی
              </div>
            </div>
          </div>
        </div>

      ))}

      </div>

      <footer>
        <Footerdashbord />
      </footer>
    </div>
  );
}

export default Services;
