import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftNavCard from "../LeftNavCard/LeftNavCard";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4>All Catagory</h4>
      <div className="ms-2">
        {catagories.map((catagori) => (
          <p key={catagori.id}>
            <Link
              to={`/catagori/${catagori.id}`}
              className="text-decoration-none text-dark"
            >
              {catagori.name}
            </Link>
          </p>
        ))}
        <LeftNavCard></LeftNavCard>
      </div>
    </div>
  );
};

export default LeftNav;
