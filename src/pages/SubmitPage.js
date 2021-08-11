import Layout from "../components/layout/Layout";
import classes from "./SubmitPage.module.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom'

const SubmitPage = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch(
      "https://item-shop-5676c-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        headers: {
          "content-type": "json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => {
        history.replace('/')
      })
      .catch((error) => console.log(error));
  };

  const onInputChangeHandler = (event) => {
    setUserInfo((prevUserInfo) => {
      const newState = {
        ...prevUserInfo,
        [event.target.id]: event.target.value,
      };
      return newState;
    });
  };

  return (
    <Layout>
      <div className={classes.form}>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.person}>
            <label style={{ marginRight: "22px" }} htmlFor="fname">
              First Name:
            </label>
            <input
              required
              id="first_name"
              type="text"
              value={userInfo.first_name}
              onChange={onInputChangeHandler}
            />

            <label htmlFor="lname">Last Name:</label>
            <input
              required
              id="last_name"
              type="text"
              value={userInfo.last_name}
              onChange={onInputChangeHandler}
            />

            <div style={{ display: "block" }}>
              <label htmlFor="email">Email Address:</label>
              <input
                required
                id="email"
                type="email"
                placeholder="Example@test.com"
                value={userInfo.email}
                onChange={onInputChangeHandler}
              />
            </div>
          </div>
          <div className={classes.address}>
            <label htmlFor="address">Address:</label>
            <textarea
              required
              id="address"
              name="w3review"
              rows="4"
              cols="50"
              value={userInfo.address}
              onChange={onInputChangeHandler}
            ></textarea>
          </div>
          <button onSubmit={onSubmitHandler}>ثبت نهایی</button>
        </form>
      </div>
    </Layout>
  );
};

export default SubmitPage;
