import React from "react";

const ShowOrHide = () => {
  const [showData, setShowData] = React.useState(true);
  const handleShow = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <button
        onClick={handleShow}
        className="shadow-sm bg-black rounded-md text-white px-3 py-1"
      >
        {showData ? "hide" : "show"}
      </button>
      {showData ? (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          neque. Similique quis impedit accusantium inventore, voluptatibus
          veniam qui nostrum quo repellendus asperiores, temporibus nemo rerum
          velit ex libero recusandae sint?
        </div>
      ) : (
        <h1>it is hidden</h1>
      )}
    </div>
  );
};

export default ShowOrHide;
