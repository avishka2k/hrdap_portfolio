import React, { useState, useEffect } from "react";

const NumberIncrement = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        const nextNumber = prevNumber + 1;
        return nextNumber <= 100 ? nextNumber : prevNumber; // Limit the number to 100
      });
    }, 40); // Adjust the interval time (in milliseconds) as desired
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return <>{number}</>;
};

export default NumberIncrement;
