import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    res.json()
                }
                else if (res.status === 401) {
                    history.push('/login');
                }
            })
            .then(data => setMyOrders(data))
    }, [history, user.email])
    return (
        <div>
            <h2>My Orders {myOrders.length}</h2>
            <ul>
                {
                    myOrders.map(myOrder => <li key={myOrder._id}>
                        {myOrder.name} : {myOrder.email}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;