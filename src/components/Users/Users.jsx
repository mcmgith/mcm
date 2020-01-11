import React from 'react';
import Paginator from './../common/Paginator/Paginator.jsx';
import User from './User';

let Users = ({ currentPage, follow, unfollow, followingInProgress, onPageChanged, totalItemsCount, pageSize, users, ...props }) => {
    return( <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} />
        {
            users.map(u => <User user={u}
                key={u.id}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
            />
            )
        }
    </div>)
}

export default Users;