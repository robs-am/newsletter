import Button from "../Button/Button";
import IconSuccess from "../IconSuccess/IconSucess"; /* import { ReactComponent as IconSuccess } from "../Confirmation/icon-success.svg"; */

// eslint-disable-next-line react/prop-types
const Confirmation = ({ onDismiss }) => {
  return (
    <body className="md:bg-darkGrey flex justify-center items-center md:m-0 md:h-screen md:justify-center">
      <div className="newsletter flex flex-col gap-[30px] md:flex md:justify-space-around md:flex-row-reverse  md:gap-8 md:rounded-[2rem] md:p-6 bg-white">
        <div className="title-wrapper">
          <IconSuccess />
          <h1 className="title font-bold text-4xl text-darkGrey  md:text-5xl lg:text-[56px] lg:mb-4">
            Thanks for Subscribing!
          </h1>
        </div>
        <p className="text-base font-normal text-darkGrey">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <Button title={"Dismiss Message"} onClick={onDismiss} />
      </div>
    </body>
  );
};

export default Confirmation;
