import { ReactComponent as ImageMobile } from "./imageMobile.svg";
import ImageDesktop from "./../../components/ImageDesktop/ImageDesktop";
import { ReactComponent as IconList } from "./icon-list.svg";

import Form from "./../Form/Form";

// eslint-disable-next-line react/prop-types
function Newsletter({ onSubscribe }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendEmail();

    onSubscribe(email);
  };

  return (
    <div className="newsletter flex flex-col gap-[30px] md:flex md:justify-space-around md:max-w-[90%]  mx-auto my-auto md:flex-row-reverse  md:gap-8 md:rounded-[2rem] md:p-6 bg-white">
      <div className="image__mobile w-full block md:hidden lg:hidden">
        <ImageMobile className="image__mobile_img max-w-full w-full h-full object-cover" />
      </div>
      <div className="image__desktop hidden md:block lg:flex justify-end lg:w-full ">
        <ImageDesktop className="image__desktop_img lg:max-w-full" />
      </div>

      <section className="newsletter__text flex flex-col px-8 gap-5 my-5 sm: justify-center md:justify-center lg:justify-center lg:flex lg:row-reverse lg:w-full">
        <h1 className="title font-bold text-4xl text-darkGrey  md:text-5xl lg:text-[56px] lg:mb-4">
          Stay updated!
        </h1>
        <p className="text-base font-normal text-darkGrey">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="list flex flex-col  gap-4 text-darkGrey">
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>Product discovery and building what matters</li>
          </div>
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>Measuring to ensure updates are a success</li>
          </div>
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>And much more!</li>
          </div>
        </ul>

        <Form onSubmit={onSubscribe} />
      </section>
    </div>
  );
}

export default Newsletter;
