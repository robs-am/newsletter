import "./App.css";

/* import { ReactComponent as ImageMobile } from "./assets/images/ImageMobile.svg"; */
import ImageMobile from "./components/Image/ImageMobile";
import ImageDesktop from "./components/Image/ImageDesktop";
import { ReactComponent as IconList } from "./assets/images/icon-list.svg";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <body className="md:bg-darkGrey flex justify-center items-center md:m-0 md:h-screen md:justify-center">
        <div className="newsletter flex flex-col gap-[30px] md:flex md:justify-space-around md:flex-row-reverse md:w-1/2 md:gap-8 md:rounded-3xl md:p-8 bg-white">
          <div className="w-full block md:hidden lg:hidden">
            <ImageMobile />
          </div>
          <div className="hidden md:block">
            <ImageDesktop />
          </div>

          <section className="newxletter__text flex flex-col px-8 gap-5 my-5 lg:justify-center lg:flex lg:row-reverse">
            <h1 className="title font-bold text-4xl text-darkGrey lg:text-[42px]">
              Stay updated!
            </h1>
            <p className="text-base font-normal text-darkGrey">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <ul className="list flex flex-col  gap-4">
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
            <Form />
          </section>
        </div>
      </body>
    </>
  );
}

export default App;
