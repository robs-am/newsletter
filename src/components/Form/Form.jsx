import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form
        className="form flex flex-col items-start justify-center"
        onSubmit={() => {}}
      >
        <label htmlFor="email">Email Adress</label>
        <input
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
          Subsbribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default Form;
