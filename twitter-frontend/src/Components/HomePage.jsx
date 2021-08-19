import { Divider } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import styles from './css/HomePage.module.css';
import axios from 'axios';

const initData = {
    postTweet: "",
    imgUrl: "",
}

function HomePage() {

    document.title = "Home / Twitter";


    const [query, setQuery] = useState(initData)
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setQuery({
            ...query,
            [name]: value
        })

    }


    const tweetData = (data) => {

        return axios({
            method: "post",
            url: "http://localhost:5000/postTweets",
            data: data
        }).then((res) => {
            setData(res.data);
            console.log(res.data)

        })
            .catch((err) => {
                console.log(err);
            })

    }


    const handleSubmit = (e) => {

        e.preventDefault();
        tweetData(query)
    }




    return (
        <div className={styles.homePageCont}>
            <div className={styles.postTweet}>
                <form onSubmit={handleSubmit}>
                    <input placeholder="What's heppening?" name="postTweet" onChange={handleChange} />
                    <Divider />
                    <input placeholder="Image Url" name="imgUrl" onChange={handleChange} />
                    <input type="submit" value="Tweet" />
                </form>
            </div>




        </div>
    )

}

export { HomePage }