
import React from "react";
import './Country.css'

export const CountryList = ({ country }) => {

    return(

        <div className="container">
        <div className="cards">
          {country?.map((item, index) => (
            <div key={index} className="card">
              <div className="face-front">
                  <h3 className="card-title">Id: {item.country_id}</h3>
                  <p className="card-text">{item.probability}</p>
                </div>
                </div>
          ))}
        </div>
      </div>
    )
}