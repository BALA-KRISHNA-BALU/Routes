import SignUp from "./SingUp";

function Home() {
    
    return (
        <div>
            <div className="home">
                <h1>JAVA HOME CLOUD</h1>
                <dl>
                    <dt>What it is:</dt>
                    <dd>Test data is a set of information or inputs used to check the performance, reliability, and correctness of software systems.</dd>
                    <dt>Purpose:</dt>
                    <dd>Test data is used to verify the functionality, behavior, and performance of software under different conditions</dd>
                    <dt>Benefits:</dt>
                    <dd>Test data helps detect faults, check functionality, ensure stability, validate behavior, reduce risk, and build confidence in the system.</dd>
                    <dt>How to create:</dt>
                    <dd>Test data can be created manually, using data generation tools, or by importing data from the production system.</dd>
                    <dt>Tips:</dt>
                    <dd>Some tips for preparing test data include using one dataset per functionality, distinguishing between read-only and writable test data, and not sharing data between two test cases.</dd>
                    <dt>Time:</dt>
                    <dd>Research indicates that 30-60% of a tester's time is spent on searching, maintaining, and generating data for testing and development.</dd>
                </dl>
                <button>TAKE THE TEST</button>
            </div>
        </div>
    );
}

export default Home;