import "./App.css";

import { ReactComponent as ImageMobile } from "./components/Image/ImageMobile.svg";
import { ReactComponent as IconList } from "./assets/images/icon-list.svg";
import Form from "./components/Form/Form";
/* import Button from "./components/Button/Button"; */

function App() {
  return (
    <>
      <div className="newsletter flex flex-col gap-[30px]">
        <div className="w-full">
          <ImageMobile className="w-full h-auto object-cover" />
        </div>
        <section className="flex flex-col px-8 gap-5">
          <h1 className="title font-bold text-4xl  text-darkGrey">
            Stay updated!
          </h1>
          <p className="text-base font-normal  text-darkGrey">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </section>
        <ul className="list flex flex-col px-7 gap-4">
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>Product discovery and building what matters</li>
          </div>
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>Measuring to ensure updates are a sucess</li>
          </div>
          <div className="icons flex items-start gap-4">
            <IconList />
            <li>And much more!</li>
          </div>
        </ul>
        <Form />
      </div>
    </>
  );
}

export default App;
