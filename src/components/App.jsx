import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src="https://img.etimg.com/thumb/msid-100093241,width-300,height-225,imgsize-55388,,resizemode-75/maharana-pratap-jayanti-2023-heres-everything-you-need-to-know-about-the-day.jpg" />
      {contacts.map(function (item, index) {
        return (
          <Card key={index} id={index + 1} name={item.name} img={item.imgURL} tel={item.phone} email={item.email} />
        );
      })}
    </div>
  );
}

export default App;
