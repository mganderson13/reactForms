import {useState} from 'react'

export default function SignUpForm({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, 
            {method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password})
        });
        const result = await response.json();
        setToken(result.token);

        console.log(result);

        }catch(error){
            setError(error.message);
        };
        setUsername("");
        setPassword("");
    }
    return (
<>
    <h2>Sign Up</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
    <label>Username
        <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
    </label>
    <br/>
    <label>Password
        <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    </label>
        <button type="submit" value="submit">Submit</button>
    </form>
</>
    );
}