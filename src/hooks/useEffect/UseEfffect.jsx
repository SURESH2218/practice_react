import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEfffect = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({
    status: false,
    msg: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetch(
          `${"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="}${searchTerm}`
        );
        const { drinks } = await data.json();
        setUserData(drinks);
        setLoading(false);
        setError({ status: false, msg: "" });
        if (!drinks) {
          throw new Error("data not found");
        }
      } catch (error) {
        setLoading(false);
        setError({ status: true, msg: error.message });
      }
    };
    fetchData();
  }, [searchTerm]);
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="enter drink name.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <hr />

      {!isError?.status && isLoading && <h3>Loading..</h3>}
      {isError?.status && <h3>{isError.msg}</h3>}
      {!isLoading &&
        !isError.status &&
        userData.map((item) => <Card key={item.idDrink} item={item} />)}
    </>
  );
};

export default UseEfffect;
