import React from 'react';
import { Link } from 'react-router-dom';

const termsAndConditions = () => {
    return (
        <div><h2>Learn hub Corner</h2>
            <h4>terms and Conditions</h4>
            <p>Below we have listed important legal terms that apply to anyone who visits our website or uses our services. These terms are necessary in order to protect both you and us and to make our services possible and more enjoyable for everyone. Wix offers a wide range of services and features and part of the terms below may not be relevant to the specific services you use.



                We understand that legal terms can be exhausting to read, and we’ve tried to make the experience more pleasant. If you have suggestions on how we can improve them, you are welcome to contact us.
                <Link to='/register'> Register</Link>
            </p>
        </div>
    );
};

export default termsAndConditions;