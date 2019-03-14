import React from 'react'

if (typeof window === undefined) {
  require('../../../css/genericlist.scss')
}

export default class FriendList extends React.Component {
  render() {
    return (
      <div className="post-list generic-list">
        <h3>Friends</h3>
        <ul>
        <li><a href="https://leafo.net/">Leaf</a> - Programmer</li>
        </ul>
      </div>
    );
  }
}
