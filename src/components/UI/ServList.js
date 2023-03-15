//import Serv from "./Serv";
import React, { useState, useRef, useEffect } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import Filter from "./Filter";

const ServList = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (quertSnapshot) => {
      let messages = [];
      quertSnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Filter messages={messages} />
    </>
  );
};

export default ServList;

/*import Serv from "./Serv";
import React, { useState, useRef, useEffect } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import Filter from "./Filter";

const ServList = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  //הסבר
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (quertSnapshot) => {
      let messages = [];
      quertSnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="main">
        {messages &&
          messages.map((message) => {
            return <Serv key={message.id} message={message} />;
          })}
      </main>
      <Filter></Filter>
    </>
  );
};

export default ServList;
*/
