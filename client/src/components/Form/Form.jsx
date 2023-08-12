import { useState, useRef } from "react";
import Button from "../Button/Button";

import emailjs from "@emailjs/browser";
import sendgrid from "@sendgrid/mail";

// eslint-disable-next-line react/prop-types
export const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realiza a validação do email
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Valid email required");
      return;
    }

    // Caso o email seja válido, realiza o envio
    await sendEmail();

    //  redireciona para a página de confirmação
    onSubmit(email);
  };

  const sendEmail = async (e) => {
    // sendgrid.setApiKey(
    //
    // );
    // const msg = {
    //   to: "roberta.amaro89@gmail.com", // Change to your recipient
    //   from: "roberta.amaro89@gmail.com", // Change to your verified sender
    //   subject: "Sending with SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    // };
    // sendgrid
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    emailjs
      .sendForm(
        "service_z3sqsnv",
        "template_u1r6lxo",
        form.current,
        "tEYcp8pb-sp-MhD9r"
      )
      .then(
        (response) => {
          console.log(response.text);
          console.log("email enviado", response.status);
          setEmail("");

          // Se o envio do email foi bem-sucedido, chama onSubmit
          //onSubmit();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
            name="user_email"
            id="service_z3sqsnv"
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
