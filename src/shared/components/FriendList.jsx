import React from 'react'

if (typeof window === undefined) {
  require('../../../css/genericlist.scss')
}

export default class FriendList extends React.Component {
  render() {
    return (
      <div className="post-list generic-list">
        <h3>Join my webring!</h3>
        <ul>
          <li><a href="http://www.judymou.com/">Judy</a> - Senior Software Engineer</li>
          <li><a href="mail:webring@ianww.com">+ you?</a></li>
        </ul>
      </div>
    );
  }
}
