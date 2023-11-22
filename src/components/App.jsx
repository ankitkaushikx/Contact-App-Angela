import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(function (item, index) {
        return <Card key={index} name={item.name} src={item.imgURL} tel={item.phone} email={item.email} />;
      })}
    </div>
  );
}

export default App;
