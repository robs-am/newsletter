import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (email === "") {
      alert("Insira um e-mail válido");
      return;
    }
  }
  return (
    <>
      <form
        className="form flex flex-col self-center mt-4"
        onSubmit={sendEmail}
      >
        <div className="input-wrapper flex flex-col  mx-auto my-auto">
          <label
            className="label  font-bold mb-2 text-sm"
            htmlFor="email"
            title="Valid email required"
          >
            Email Adress
          </label>
          <input
            className="email w-full  focus:outline-none invalid:text-red invalid:border-red invalid:bg-lightRed border-[1px] border-lightGrey rounded-md p-4 mb-6"
            type="text"
            title="Valid email required"
            pattern="^.+@[^\.].*\.[a-z]{2,}$"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            required
            className=" text-white bg-darkGrey  rounded-md py-4 px-6 font-bold"
            type="submit"
          >
            Subscbribe to monthly newsletter
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
