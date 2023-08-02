import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //validação email
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Valid email required");
      return;
    }
    setErrorMsg(null);

    emailjs
      .sendForm(
        "service_z3sqsnv",
        "template_u1r6lxo",
        form.current,
        "KC5RY0MDSmJA7jIP1"
      )
      .then(
        (response) => {
          console.log(response.text);
          console.log("email enviado", response.status);
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const Form = () => {
  //   const [email, setEmail] = useState("");
  //   const [errorMsg, setErrorMsg] = useState(null);

  //   function sendEmail(e) {
  //     e.preventDefault();
  //     if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
  //       setErrorMsg("Valid email required");
  //       return;
  //     }
  //     setErrorMsg(null);

  //     const form = e.target;
  //     const formData = new FormData(form);

  //     //API
  //     fetch("/some-api", { method: form.method, body: formData });

  //     //objeto
  //     const formJson = Object.fromEntries(formData.entries());
  //     console.log(formJson);
  //   }
  return (
    <>
      <form
        ref={form}
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
            name="user_email"
            className="email w-full  focus:outline-none invalid:text-red invalid:border-red invalid:bg-lightRed border-[1px] border-lightGrey rounded-md p-4 mb-6"
            type="email"
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
