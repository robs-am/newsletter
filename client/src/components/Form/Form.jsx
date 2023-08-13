import { useState, useRef } from "react";
import Button from "../Button/Button";
import { db } from "./firebase.Config.js";
import { initializeApp } from "firebase/app";

// eslint-disable-next-line react/prop-types
export const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Valid email required");
      return;
    }

    await sendEmail();

    onSubmit(email);
  };

  const sendEmail = async (e) => {};
  return (
    <>
      <form
        ref={form}
        className="form flex flex-col self-center mt-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="input-wrapper flex flex-col w-full lg:mx-auto my-auto">
          <div className="labels flex justify-between">
            <label className="label  font-bold mb-2 text-sm" htmlFor="email">
              Email Adress
            </label>
            {errorMsg && <p className="text-red">{errorMsg}</p>}
          </div>

          <input
            className="email w-full  focus:outline-none invalid:text-red invalid:border-red invalid:bg-lightRed border-[1px] border-lightGrey rounded-md p-4 mb-6"
            type="email"
            pattern="^.+@[^\.].*\.[a-z]{2,}$"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <Button title={"Subscribe to monthly newsletter"} />
        </div>
      </form>
    </>
  );
};

export default Form;
