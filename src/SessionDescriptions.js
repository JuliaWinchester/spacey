import React from 'react';

function SessionDescriptions(props) {
  if (props.session === 1) {
    return (
      <div> 
        <p><i>"... difficult to see. Always in motion is the future ..."</i></p>
      </div>
    );
  } else {
    return null;
  }
}

export default SessionDescriptions;