import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function FetchProfile() {
    let navigate = useNavigate();
    let { username } = useParams();
    return (
        <div>
            {/* {username}
            <button onClick={() => { navigate('/home') }}>
                Home
            </button> */}
        </div>
    )
}
