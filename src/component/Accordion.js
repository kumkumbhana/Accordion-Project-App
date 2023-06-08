import React, { useState } from "react";
import { questions } from "./Api";
import './Accordion.css';
import MyAccordion from './MyAccordion'

const Accordion = () => {
    const [data, setData] = useState(questions);
    return(
        <>
            <section className="main-div">
            <h1>React Interview Questions</h1>
            {
                data.map((curElem) => {
                    const {id, question, answere}=curElem
                    return <MyAccordion key = {id} {...curElem} />;
                })
            }
            </section>
        </>
    );
}

export default Accordion;