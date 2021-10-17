import React, { useState } from "react";
// import Custumer from './Custumer';

function Bill() {
  const [state, setState] = useState([]);
  const [person, setperson] = useState(0);
  const [totaltip, settotaltip] = useState(0);
  const [bill, setbill] = useState({
    billamount: "",
    tip: "",
    customer: "",
    person: "",
  });
  const ChangeEvent = (e) => {
    setbill({ ...bill, [e.target.name]: e.target.value });
  };

  const cal = (e) => {
    e.preventDefault();
    bill.totalbill = (bill.tip / 100) * bill.billamount;
    console.log(bill.totalbill);
    bill.totalperson = person + parseInt(bill.person);
    setperson(bill.totalperson);
    settotaltip(totaltip + parseInt(bill.totalbill))
    setState([...state, bill]);
    console.log(state);
  };

  return (
    <>
      <h1>
        <b>TIP CALCULATOR</b>
      </h1>
      <h4>Build React </h4>
      <div className="form-group">
        <label htmlFor="billamount" className="form-label">
          Enter Your Bill Amount
        </label>
        <input
          type="text"
          className="form-control"
          id="billamount"
          name="billamount"
          placeholder="Enter Your Bill Amount"
          onChange={ChangeEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="person" className="form-label">
          Enter total person
        </label>
        <input
          type="number"
          className="form-control"
          id="person"
          name="person"
          placeholder="Enter total Person"
          onChange={ChangeEvent}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="tip" className="form-label">
          how was the service..?
        </label>

        <select
          className="form-select"
          id="tip"
          name="tip"
          onChange={ChangeEvent}
        >
          <option defaultValue>Open this select menu</option>
          <option value="20">excellent (20%)</option>
          <option value="10">Moderate (10%)</option>
          <option value="5">bad (5%)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="customer" className="form-label">
          Enter Customer Name
        </label>
        <input
          type="text"
          className="form-control"
          id="customer"
          name="customer"
          placeholder="Enter customer Name"
          onChange={ChangeEvent}
        />
      </div>

      <button className="btn btn-success my-2" onClick={cal}>
        Add customer
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, id) => (
            <tr key={id}>
              <td>
                {item.customer} offering a tip of {item.totalbill} rupees
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <h4 className="text-center p-2 my-2 bg-success">Calculate Tip And Customer</h4>     
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Total customer</th>
            <th scope="col">Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person}</td>
            
            <td>{totaltip}</td>
          </tr>
          
            
        </tbody>
      </table>
         
      
    </>
  );
}

export default Bill;
