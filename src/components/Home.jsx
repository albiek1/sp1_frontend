import Login from "./Login";

function Home({logout, loggedIn, setLoggedIn, facade, setErrorMessage}){
    return(
        <div>
            <h1>Home</h1>
            {!loggedIn ? (
                <Login facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>
            ):(
                <div>
                    <p><button onClick={logout}>Logout</button></p>
                    <p>User: {facade.getUserName()}</p>
                    <p>Role: {facade.getUserRoles()}</p>
                </div>
            )}
        </div>
    );
}

export default Home;