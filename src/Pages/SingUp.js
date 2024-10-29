function SignUp(){
    return <div className="sign-up">
        <form className="sign-container">
            <h1>Let's Get Sign Up Here!!😊</h1>
            <div className="input-container"> 
                <p>Name</p>
                <input type="text" placeholder="Enter Your Name"></input>
            </div>
            <div className="input-container">
                <p>Roll No</p>
                <input type="text" placeholder="Enter Your Roll No"></input>
            </div>
            <div className="input-container">
                <p>Password</p>
                <input type="text" placeholder="Enter Your Password"></input>
            </div>
            <div className="input-container">
                <p>Confirm Password</p>
                <input type="text" placeholder="ReEnter Your Password"></input>
            </div>
            <button className="sign-btn">Sign Up</button>
            <p>already have account?<a>Sign In</a></p>
        </form>
    </div>
}

export default SignUp;