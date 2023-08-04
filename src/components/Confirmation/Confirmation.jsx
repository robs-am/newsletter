import Button from "../Button/Button";
import IconSuccess from "../IconSuccess/IconSucess"; /* import { ReactComponent as IconSuccess } from "../Confirmation/icon-success.svg"; */

// eslint-disable-next-line react/prop-types
const Confirmation = ({ userEmail, onDismiss }) => {
  return (
    <div className="confirmation-wrapper flex items-center h-screen justify-center md:mx-auto md:my-auto">
      <div className="flex flex-col justify-around h-screen gap-[30px] mx-5   md:gap-8 md:rounded-[2rem] md:p-6 md:flex md:flex-col md:h-[60%] md:w-[40%] bg-white">
        <section className="text-wrapper flex flex-col items-start gap-[30px]">
          <IconSuccess />
          <h1 className="title font-bold text-4xl text-darkGrey  md:text-5xl  lg:mb-4">
            Thanks for subscribing!
          </h1>
          <p className="text-base font-normal text-darkGrey">
            A confirmation email has been sent to{" "}
            <span className="font-semibold">{userEmail}</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </section>

        <Button title={"Dismiss Message"} onClick={onDismiss} />
      </div>
    </div>
  );
};

export default Confirmation;
