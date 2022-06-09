

const Talk = (props) => {

    let talk_url = '';
    if (props.data.talk_url) {
      talk_url = <span>(<a href={props.data.talk_url}>link</a>)</span>
    }
    return (
      <div className="talk-item">
        <span className="title">
          <a href={props.data.conf_url}>{props.data.title}</a>
        </span> @ {props.data.where}: {props.data.desc} {talk_url}
      </div>
    );
  };

  export default Talk;