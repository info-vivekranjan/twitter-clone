import React, { useState } from 'react';
import styles from './css/RegisterAndLogin.module.css'
import axios from 'axios';

const initData = {

    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    dob: ""

}

function Register() {
    document.title = "Sign up for Twitter";

    const [query, setQuery] = useState(initData)

    const handleChange = (e) => {

        const { name, value } = e.target;
        setQuery({
            ...query,
            [name]: value
        })

    }

    const registerData = (data) => {

        return axios({
            method: "post",
            url: "http://localhost:5000/users/register",
            data: data
        }).then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            })

    }


    const handleSubmit = (e) => {

        e.preventDefault();
        registerData(query)
    }


    return (
        <div className={styles.registerCont}>

            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <h2 style={{ marginBottom: "25px", textAlign: "left", marginLeft: "11%" }}>Create your account</h2>
                <input placeholder="Enter Name" name="name" onChange={handleChange} />
                <br />
                <br />

                <input placeholder="Enter Email" name="email" onChange={handleChange} />
                <br />
                <br />

                <input placeholder="Enter Mobile Number" name="phoneNumber" onChange={handleChange} />
                <br />
                <br />

                <input placeholder="Enter Password" name="password" onChange={handleChange} />
                <br />
                <br />

                <input type="date" placeholder="Enter DOB" name="dob" onChange={handleChange} />
                <br />
                <br />

                <input type="submit" value="Register" id={styles.registerBtn} />
                <br />
                <br />

            </form>

        </div>
    )

}

export { Register }