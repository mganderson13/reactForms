import {useState} from 'react';

export default function Authenticate( {token} ){

const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const [data, setData] = useState(null);

    async function handleClick() {
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {"Content-Type": "application/json",
                Authorization: `Bearer ${token}`,},
            });
            const result = await response.json();
            setSuccessMessage(result.message);
            setData(result.data);

        } catch (error) {
            setError(error.message)
        }
        console.log("Handle Click Works");
    };

    return (
    <>
    <h2>Authenticate</h2>
    {error && <p>{error}</p>}
    {successMessage && <p>{successMessage}</p>}

    <button onClick={handleClick}>
        Authenticate Token
        </button>
    </>
    );
}