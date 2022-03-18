import React from 'react';
import { Fragment } from 'react';

export default function FetchCard({ users }) {
    return (
        <Fragment>
            {
                users.map((user) => (
                    <div key={user.node_id} className='w-25 p-3 text-center'>
                        <img src={user.avatar_url} className="bd-placeholder-img rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" alt={user.id}></img>
                        <h4 className='text-dark h-25'>Login name: <span className='fs-5 text-muted border-bottom border-warning pb-1'>{user.login}</span></h4>
                        <p className='text-danger' >User type: {user.type}`</p>
                        <p><a className="btn btn-warning" href={users.html_url}>View details »</a></p>
                    </div>
                ))
            }
        </Fragment>
    )
}
