import React from "react";
import "./Cart.css";
const Cart = ({ person, previousPerson, nextPerson }) => {
  return (
    <div className="cartMain d-flex flex-column align-items-center text-center p-5">
      <div className="personImg">
        <img className="img-fluid" src={person.pictureURL} alt="" />
      </div>
      <p className="text-primary">{person.name}</p>
      <p className="text-info">{person.job}</p>
      <p className="text-secondary">{person.bio}</p>
      <div>
        <button className="arrowbtn" onClick={previousPerson}>
          {"<"}
        </button>
        <button className="arrowbtn" onClick={nextPerson}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
