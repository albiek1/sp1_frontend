

function Profile({logout, loggedIn, setLoggedIn, facade, setErrorMessage}){
    return(
        <>
        <div>
            <p><button onClick={logout}>Logout</button></p>
            <h2>Welcome {facade.getUserName()}</h2>
        </div>
        </>
    );
}

export default Profile;