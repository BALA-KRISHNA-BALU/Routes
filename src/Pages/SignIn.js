function SignIn() {
    return <div className="sign-up">
    <form className="sign-container">
        <h1>Let's Get Sign In Here!!🙂</h1>
        <div className="input-container">
            <p>Roll No</p>
            <input type="text" placeholder="Enter Your Roll No"></input>
        </div>
        <div className="input-container">
            <p>Password</p>
            <input type="text" placeholder="Enter Your Password"></input>
        </div>
        <button className="sign-btn">Sign In</button>
        <p>don't have account?<a>Sign up</a></p>
    </form>
</div>
}
export default SignIn;


