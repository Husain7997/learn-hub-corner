import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Parches = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='m-4 d-flex justify-content-center  flex-column'>
            <div className='d-flex border-none align-middle'>
                <h2 className='my-auto'>{user.displayName}</h2>
                <img style={{ width: '300px', marginLeft: '20px' }} src={user?.photoURL} alt="" />

            </div>
            <div>
                <h3>Payment Now</h3>
                <Link to='/Parches'><Button variant="primary">Bkash Payment</Button></Link> <br /><br />
                <Link to='/Parches'><Button variant="primary">Nagad</Button></Link><br /><br />
                <Link to='/Parches'><Button variant="primary">PAYPAL</Button></Link><br /><br />
            </div>
        </div>
    );
};

export default Parches;