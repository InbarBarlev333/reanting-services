import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import { auth } from "./components/UI/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Formaplic from "./components/UI/Formaplic.js";
import ServList from "./components/UI/ServList";

function App() {
  const [user] = useAuthState(auth);
  const [userClickedForm, setUserClickedForm] = useState(false);
  const [userSentForm, setUserSentForm] = useState(false);

  const formHandle = () => {
    setUserClickedForm(true);
    setUserSentForm(false);
  };

  const sentHandle = () => {
    setUserSentForm(true);
    setUserClickedForm(false);
  };

  return (
    <div>
      <Navbar
        formHandle={formHandle}
        user={user}
        userClickedForm={userClickedForm}
      />
      {userClickedForm && !userSentForm ? (
        <Formaplic userSentForm={sentHandle} />
      ) : null}
      <ServList></ServList>
    </div>
  );
}

export default App;
