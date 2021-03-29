import React, { useState, useEffect } from 'react'
import "./style.css"

const ShowText = (props) => {
    const [seeStatus, setSeeStatus] = useState("");

    useEffect(() => {
        if (props.text.length <= parseInt(props.maxLen)) {
            setSeeStatus({
                noneMoreLess : "",
                textInLen : props.text
            });
        } else {
            setSeeStatus({
                noneMoreLess : "See More",
                textInLen : props.text.slice(0, Number(props.maxLen))
            });
        }
      }, []);

    const changeSeeStatus = () => {
        if (seeStatus.noneMoreLess === "See Less") {
            setSeeStatus({
                noneMoreLess : "See More",
                textInLen : props.text.slice(0, Number(props.maxLen))
            });
        } else if (seeStatus.noneMoreLess === "See More") {
        setSeeStatus({
            noneMoreLess : "See Less",
            textInLen : props.text
        });
        }
    }

    return(
        <p>
            {seeStatus.textInLen}
            <span onClick={changeSeeStatus}>
                {seeStatus.noneMoreLess}
            </span>
        </p>
    )
    
}

export default ShowText;