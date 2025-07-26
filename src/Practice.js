import React, { useState, useEffect } from "react";
import  Sub from "./PracticeSub"

function Practice() {
    const [API, setAPI] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setAPI(data);
                setLoading(false);
            });
    }, []);

    let all;
    if (loading) {
        all = "loading....";
    } else {
        all = API.map((element) => (
            //return <Sub key={element.id} name={element.name} username={element.username} email={element.email} />
            <Sub key={element.id} data={element} />
        ));
    }

    return (
        <ul>
            {all}
        </ul>
    );
}

export default Practice;
