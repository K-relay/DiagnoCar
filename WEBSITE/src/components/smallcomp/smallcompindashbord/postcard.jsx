import * as React from "react";
import { Link } from "react-router-dom";

 function MultiActionAreaCard(param) {
  return (
    <div className="card w-full sm:w-72 bg-base-200 text-base-content rounded-box mb-4 flex flex-col " id={param.Id}>
    <figure className="w-full ">
      <img
        src={param.imageSource}
        alt="car diagno"
        className="w-full h-auto object-cover"
      />
    </figure>
    <div className="card-body flex flex-col justify-between p-4">
      <div>
        <h2 className="card-title">{param.Title}</h2>
        <p>
          {param.Text.length > 100
            ? `${param.Text.slice(0, 100)}...`
            : param.Text}
        </p>
      </div>
      <div className="card-actions justify-center">
        <Link
          className="btn btn-wide bg-primary"
          to={`../onepost/${param.Id}`}
        >
          خوێنەربە...
        </Link>
      </div>
    </div>
  </div>
  
  );
}




 function TextCard(param) {
  return (
    <div className="card w-full  bg-base-200 text-base-content rounded-box mb-4 flex flex-col sm:flex-row text-right" id={param.Id}>
    
    <div className="card-body flex flex-col justify-between p-4">
      <div>
        <h2 className="card-title">{param.Title}</h2>
        <p>
          {param.Text.length > 100
            ? `${param.Text.slice(0, 100)}...`
            : param.Text}
        </p>
      </div>
      <div className="card-actions justify-center">
        <Link
          className="btn btn-wide bg-primary"
          to={`../onepost/${param.Id}`}
        >
          خوێنەربە...
        </Link>
      </div>
    </div>
  </div>
  
  );
}
export  {MultiActionAreaCard,TextCard};

