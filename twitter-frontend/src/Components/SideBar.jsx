import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './css/SideBar.module.css';
import { Divider } from '@material-ui/core'

const links = [
    {
        to: "/home",
        title: "Home",
        logo: <i class="ri-home-7-line"></i>
    },
    {
        to: "/explore",
        title: "Explore",
        logo: <i class="ri-hashtag"></i>
    },
    {
        to: "/notifications",
        title: "Notifications",
        logo: <i class="ri-notification-2-line"></i>
    },
    {
        to: "/messages",
        title: "Messages",
        logo: <i class="ri-mail-line"></i>
    },
    {
        to: "/bookmarks",
        title: "Bookmarks",
        logo: <i class="ri-bookmark-line"></i>,
    },
    {
        to: "/lists",
        title: "Lists",
        logo: <i class="ri-file-list-2-line"></i>
    },
    {
        to: "/profile",
        title: "Profile",
        logo: <i class="ri-user-line"></i>
    },
    {
        to: "/more",
        title: "More",
        logo: <i class="ri-more-fill"></i>
    }
]


function SideBar() {


    return (
        <>
            <div className={styles.homeTop}>
                <div>Home</div>
            </div>
            <div className={styles.sidebarCont}>

                <Link to="/home" className={styles.sidebarTwitterLogo}>
                    <i className="ri-twitter-fill"></i>
                </Link>
                <div className={styles.sidebarLinksCont}>
                    {
                        links.map((item) => {
                            return <div className={styles.linksCont}>

                                <Link className={styles.sidebarLinks} to={`${item.to}`}><span className={styles.linkLogo}> {item.logo} </span> <span>{item.title}</span> </Link>

                            </div>
                        })
                    }

                </div>

            </div>
        </>
    )

}

export { SideBar }