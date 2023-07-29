import "./App.css";

/* import { ReactComponent as ImageDesktop } from "./components/Image/ImageDesktop.svg"; */
import { ReactComponent as ImageMobile } from "./components/Image/ImageMobile.svg";

function App() {
  return (
    <>
      <div className="w-full">
        {/* <ImageDesktop /> */}
        <ImageMobile className="w-full h-auto object-cover" />
      </div>
      <h1 className="title font-bold text-4xl text-left text-hsl(234, 29%, 20%)">
        Stay updated!
      </h1>
      <p className="text-left">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
    </>
  );
}

export default App;
