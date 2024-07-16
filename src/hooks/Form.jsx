import React from "react";

const Form = () => {
  const [firstname, setFirstname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      firstname: firstname,
      email: email,
      password: password,
    };
    console.log(obj);
  };

  return (
    <form action="">
      <div className="">
        <input
          type="text"
          name="firstname"
          value={firstname}
          placeholder="enter your name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="lastname"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="enter your password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="rounded bg-black px-3 py-1 shadow-md text-white"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
