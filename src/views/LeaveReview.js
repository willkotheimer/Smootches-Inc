import React from 'react';
import Auth from '../components/Auth';
import Loader from '../components/Loader';
import LeaveReviewPage from './LeaveReviewPage';

export default function LeaveReview({ user, otherName, otherKey, userKey, joinedUser, joinedUserName }) {
  const loadLeaveReview = () => {
    let component = '';
    if (user === null) {
      component = <Loader />;
    } else if (!user) {
        component = (
            <>
              <h3 className="title d-flex justify-content-center">Leave Review</h3><br/>
              <Auth />
            </>
          );
        } else {
          component = (
            <>
              <LeaveReviewPage otherName={otherName} otherKey={otherKey} userKey={userKey} joinedUser={joinedUser} joinedUserName={joinedUserName} user={user} />
            </>
          );
        }
    return component;
  };

  return <div>{loadLeaveReview()}</div>;
}
