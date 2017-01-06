import React from 'react';

const LikeCounter = props =>
  <div>
    Likes :
    <span>{props.likesCount}</span>
    <div>
      <button onClick={props.onLike}>Like</button>
      <button onClick={props.onDislike}>Dislike</button>
    </div>
  </div>;

LikeCounter.propTypes = {
  likesCount: React.PropTypes.number,
  onLike: React.PropTypes.func,
  onDislike: React.PropTypes.func,
};

export default LikeCounter;
