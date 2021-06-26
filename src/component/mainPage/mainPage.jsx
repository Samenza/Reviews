import React, { useEffect, useState } from "react";
import getPersonData from "./../../servises/personData";
import Cart from "./../Cart/Cart";

import "./mainPage.css";

const MainPage = () => {
  const [persons, setPersons] = useState(getPersonData());
  const [person, setPerson] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setPerson(persons[0]);
  }, []);

  useEffect(() => {
    persons.length > 0 && setPerson(persons[counter]);
  }, [counter]);

  const nextPerson = () => {
    if (counter === persons.length - 1) {
      setCounter(0);
    } else {
      setCounter((c) => c + 1);
    }
    let person = persons[counter];
    setPerson(person);
  };

  const previousPerson = () => {
    if (counter === 0) {
      setCounter(persons.length - 1);
    } else {
      setCounter((c) => c - 1);
    }
    let person = persons[counter];
    setPerson(person);
  };
  return (
    <div className="d-flex flex-column justify-content-around align-items-center pageBody container">
      <h2>our Reviews</h2>
      {person && (
        <Cart
          previousPerson={previousPerson}
          nextPerson={nextPerson}
          person={person}
        />
      )}
    </div>
  );
};

export default MainPage;
