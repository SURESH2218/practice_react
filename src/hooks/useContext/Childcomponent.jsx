import React, { useContext } from "react";
import UserContext from "./UserContext";
import SecondUserContext from "./SecondUserContext";

const Childcomponent = () => {
  const data = useContext(UserContext);
  const data2 = useContext(SecondUserContext);
  console.log(data2);

  return (
    <div>
      <div className="border p-5 bg-black text-white">
        <h1>First Context data</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2>
      </div>
      <hr />
      <h1>Second Context Data</h1>
      <div className="border p-5 bg-green-300 text-black">
        {data2.map((item, index) => (
          <div key={index}>
            <h1>{item.age}</h1>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Childcomponent;
