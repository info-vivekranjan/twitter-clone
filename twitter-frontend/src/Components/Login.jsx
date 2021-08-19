import React, { useState } from 'react';
import styles from './css/RegisterAndLogin.module.css'
import axios from 'axios';
import { saveLogin } from '../Utils/LocalStorage';
import { useHistory } from 'react-router-dom';


const initData = {
    email: "",
    password: "",
}

function Login() {
    document.title = "Login to Twitter";

    const [query, setQuery] = useState(initData)

    const [data, setData] = useState([]);

    const history = useHistory();

    const handleChange = (e) => {

        const { name, value } = e.target;
        setQuery({
            ...query,
            [name]: value
        })

    }

    const loginData = (data) => {

        return axios({
            method: "post",
            url: "http://localhost:5000/users/login",
            data: data
        }).then((res) => {
            setData(res.data);
            console.log(res.data)
            if (res.data.message === "Login Successful") {
                saveLogin("data", { auth: true, name: res.data.name });

            }
        })
            .catch((err) => {
                console.log(err);
            })

    }


    const handleSubmit = (e) => {

        e.preventDefault();
        loginData(query)
    }


    return (
        <div className={styles.loginCont}>

            <div className={styles.twitterLogo}>
                <i className="ri-twitter-fill"></i>
            </div>

            <h1 style={{ marginBottom: "25px", textAlign: "left", marginLeft: "10px" }}>Login to twitter</h1>


            {
                data &&
                <h2 style={{ color: "#1A90DB", marginBottom: "25px", textAlign: "left", marginLeft: "10px" }}>{data.message}</h2>
            }

            <form onSubmit={handleSubmit} className={styles.loginForm}>

                <input placeholder="Enter Email" name="email" onChange={handleChange} />
                <br />
                <br />
                <input placeholder="Enter Password" name="password" onChange={handleChange} />
                <br />
                <br />
                <input type="submit" value="Submit" id={styles.loginBtn} />
                <br />
                <br />

            </form>

        </div>

    )

}

export { Login };