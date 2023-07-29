import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    alert("test");
  }
  return (
    <>
      <form className="form flex flex-col self-center" onSubmit={sendEmail}>
        <label className="label self-start pl-10px" htmlFor="email">
          Email Adress
        </label>
        <input
          className="email border-[1px] border-lightGrey rounded-md p-4"
          type="text"
          placeholder="email@company.com"
          title="Please provide a valid email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button
          className="text-white bg-darkGrey w-[350px] rounded-md py-4 px-6"
          type="submit"
        >
          Subscbribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default Form;
