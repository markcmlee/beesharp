import React, { useState, useEffect, useRef } from "react";

const FeedBox = (props) => {
  const { items } = props;
  //hooks
  const [checkoutArray, addToArray] = useState([]);
  const [cache, updateCache] = useState({});

  const itemArray = items.map((item, index) => {
    const available = item.isCheckedOut ? "Checked Out!" : "Available";
    return (
      <>
        <li className="firstLine" key={`item${index}`}>
          {item.color} {item.make} {item.model}{" "}
          {item.isCheckedOut ? "Checked Out!" : "Available"}
        </li> Details on condition <textarea placeholder="Write description here" className="detailTextBox" />
        <button className="addToCheckoutList" onClick={
          () => {
            if (!item.isCheckedOut && !cache[item.id]) { 
              updateCache({...cache, [item.id]: true})
              addToArray(
              [...checkoutArray, <li className="firstLine" key={item.id}>
              {item.color} {item.make} {item.model}{" "}
              </li>]
            )}
          }
        }
  >Add to Checkout List</button>
    </>
    );
  });

  +
  useEffect(() => {
    fetch("/api/logs")
      .then((data) => data.json())
      .then((data) => console.log(data.payload));
  }, []);

  return (
    <>
      <h1>FEEDBOX IS HERE</h1>
      <div className="feedBox">
        <ul>{itemArray}</ul>
        <ul>{checkoutArray}</ul>
        {/* <CheckoutList list={}/> */}
      </div>
    </>
  );
};

export default FeedBox;


{/* <Checkout items={items} /> */}