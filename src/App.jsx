import "./App.css";

/* import { ReactComponent as ImageDesktop } from "./components/Image/ImageDesktop.svg"; */
import { ReactComponent as ImageMobile } from "./components/Image/ImageMobile.svg";

function App() {
  return (
    <>
      <div className="w-full">
        {/* <ImageDesktop /> */}
        <ImageMobile className="w-screen h-auto object-cover" />
      </div>
      <h1 className="title font-bold text-4xl text-left">Stay updated!</h1>
      <p
        className="text-left
      "
      ></p>
    </>
  );
}

export default App;
