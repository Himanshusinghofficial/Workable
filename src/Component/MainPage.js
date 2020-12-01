import React, { Fragment } from 'react'
import Tests from "../tests/Tests";
import BannerAdd from "./BannerAdd";
import BookNow from "./BookNow";
import HomePrescription from "./services/HomePrescription";

const MainPage = () => {
    return (
        <Fragment>
            <div className="container">
                <BannerAdd />
                <HomePrescription />
                <BookNow />
                <Tests />
            </div>
        </Fragment>
    )
}

export default MainPage