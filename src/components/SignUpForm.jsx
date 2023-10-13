import {useState} from 'react'

export default function SignUpForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(){
        e.preventDefault();
      console.log("testing handle submit");
    }
    return (
<>
    <h2>Sign Up</h2>
    <form>
    <label for="username">Username
        <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
    </label>
    <br/>
    <label for='password'>Password
        <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    </label>
        <button type="submit" value="submit">Submit</button>
    </form>
</>
    );
}