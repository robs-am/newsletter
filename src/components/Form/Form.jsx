import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    if (email === "") {
      setErrorMsg("Valid email required");
      return;
    }
    setErrorMsg(null);

    const form = e.target;
    const formData = new FormData(form);

    //API
    fetch("/some-api", { method: form.method, body: formData });

    //objeto
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <>
      <form
        method="post"
        className="form flex flex-col self-center mt-4 w-full"
        onSubmit={sendEmail}
      >
        <div className="input-wrapper flex flex-col w-full lg:mx-auto my-auto">
          <div className="labels flex justify-between">
            <label className="label  font-bold mb-2 text-sm" htmlFor="email">
              Email Adress
            </label>
            {errorMsg && <p className="text-red">{errorMsg}</p>}
          </div>

          <input
            name="email"
            className="email w-full  focus:outline-none invalid:text-red invalid:border-red invalid:bg-lightRed border-[1px] border-lightGrey rounded-md p-4 mb-6"
            type="text"
            /* title="Valid email required" */
            pattern="^.+@[^\.].*\.[a-z]{2,}$"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <button
            required
            className="text-white bg-darkGrey  rounded-md py-4 px-6 font-bold lg:hover:bg-gradient-primary hover:shadow"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
