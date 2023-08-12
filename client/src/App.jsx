import { useState } from "react";
import Newsletter from "./components/Newsletter/Newsletter";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const [page, setPage] = useState("newsletter");
  const [userEmail, setUserEmail] = useState("");

  const goToConfirmation = (email) => {
    setUserEmail(email);
    setPage("confirmation");
  };

  const goToNewsletter = () => setPage("newsletter");

  if (page === "newsletter") {
    return <Newsletter onSubscribe={goToConfirmation} />;
  } else {
    return <Confirmation userEmail={userEmail} onDismiss={goToNewsletter} />;
  }
}

export default App;
