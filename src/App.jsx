import { useState } from "react";
import Newsletter from "./components/Newsletter/Newsletter";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const [page, setPage] = useState("newsletter");

  const goToConfirmation = () => setPage("confirmation");
  const goToNewsletter = () => setPage("newsletter");

  if (page === "newsletter") {
    return <Newsletter onSubscribe={goToConfirmation} />;
  } else {
    return <Confirmation onDismiss={goToNewsletter} />;
  }
}

export default App;
