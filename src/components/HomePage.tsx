import React, {useState} from 'react';
import classes from './HomePage.module.scss'
import c from '../index.module.scss'
import {useNavigate} from "react-router-dom";
const HomePage: React.FC = () : JSX.Element => {

    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    return (
        <div className={c.container}>
            <h1 className={classes.title}>My github resume</h1>

            <div className={classes.row}>
                <input placeholder="Enter your GitHub username and click on generate" className={classes.name} value={value} type="text" onChange={(e) => {setValue(e.target.value)}} />
                <button onClick={() => {
                    if(value === "") {
                        setError("field must not be empty")
                        return
                    }
                    if(value.length < 2) {
                        setError("field size must be greater than two")
                        return;
                    } else {
                        navigate(value)
                    }

                }} className={classes.button}>Generate</button>
            </div>
            <p className={error !== "" ? [classes.error, classes.active].join(' ') : classes.error}>
                {error}
            </p>

        </div>
    );
};

export default HomePage;