import React from "react";
import Typewriter from 'typewriter-effect'
import '../styles/SignUp.css'
import { Link } from "react-router-dom"; // Needed for navigation

function SignUp() {
    return (
        <div id="signup">
            <div id="signup-body">
                <div id="signup-header">Sign Up</div>
                <input class="input-text" type="text" placeholder="Username"/>
                <input class="input-text" type="text" placeholder="Password"/>

                <form id="radio-group">
                    <p class="input-text">Role</p>
                    <label id="radio-option">
                        <input type="radio" name="role" value="business"/> Business/Org
                    </label>
                    <label id="radio-option">
                        <input type="radio" name="role" value="individual"/> Individual
                    </label>
                </form>

                <button id="signup-button">Let's Eat!</button>

                <Link to='/login' id="bottom-log-in-link">Already have an account? Log in.</Link>
            </div>
        </div>
    );
}

export default SignUp;

