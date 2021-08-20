import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './css/HomePage.module.css';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import { loadData } from '../Utils/LocalStorage';

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

    const { postTweet, imgUrl } = query

    const postTweetData = (data) => {

        return axios({
            method: "post",
            url: "http://localhost:5000/postTweets",
            data: data
        }).then((res) => {

            return getTweetData()



        })
            .catch((err) => {
                console.log(err);
            })

    }


    const getTweetData = () => {

        return axios.get("http://localhost:5000/postTweets")
            .then((res) => {
                console.log(res.data);
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    useEffect(() => {

        getTweetData();

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();
        postTweetData(query);

    }


    let localData = loadData("data")
    console.log(localData);


    const deleteTweet = (id) => {

        const updatedVal = data.filter((item) => item.id !== id)

        return axios.delete(`http://localhost:5000/postTweets/${id}`)
            .then((res) => {
                setData(updatedVal)
                return getTweetData()
            }).catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className={styles.homePageCont}>

            <div className={styles.postTweet}>
                <form onSubmit={handleSubmit}>
                    {/* <input placeholder="What's heppening?" name="postTweet" onChange={handleChange} /> */}

                    <TextField
                        id="standard-multiline-static"
                        size="medium"
                        multiline
                        rows={5}
                        name="postTweet"
                        placeholder="What's heppening?"
                        onChange={handleChange}
                        style={{ width: "51.2vw", fontSize: "35px" }}
                    />

                    <Divider />
                    <br />
                    <TextField
                        id="standard-multiline-static"
                        size="small"
                        multiline
                        rows={1}
                        name="imgUrl"
                        placeholder="Image Url"
                        onChange={handleChange}
                        style={{ width: "40vw", fontSize: "20px" }}
                    />

                    <br />
                    <br />

                    <div style={{ marginLeft: "42vw" }}>
                        {
                            postTweet == "" ?
                                <input type="submit" value="Tweet" className={styles.tweetButtonDisabled} disabled />
                                :
                                <input type="submit" value="Tweet" className={styles.tweetButton} />

                        }

                    </div>
                </form>


            </div>

            <div className={styles.tweetCont}>

                {
                    data.map((item) => {
                        return <div key={item._id}>
                            <div className={styles.userName}>
                                <div>{localData.name}</div>
                                <div onClick={() => deleteTweet(item._id)}>
                                    <i className="ri-delete-bin-7-fill"></i>
                                </div>
                            </div>
                            <div className={styles.tweetText}>
                                {item.postTweet}
                            </div>
                            <div className={styles.tweetImg}>
                                <img src={item.imgUrl} alt="Pics" />
                            </div>
                            <Divider />
                        </div>
                    })
                }
            </div>


        </div>
    )

}

export { HomePage }