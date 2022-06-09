const Press = ({ data }) => {

  let presses = data.press.map((pressItem, idx) => {
    let content = "";
    if (typeof pressItem === "string") {
      content = <span>{pressItem}</span>;
    } else if (pressItem.url) {
      content = (
        <a href={pressItem.url} target="_blank" rel="noopener noreferrer">
          {pressItem.source}
        </a>
      );
    } else {
      content = <span>{pressItem.source}</span>;
    }
    return <li key={idx}>{content}</li>;
  });
  return <ul>{presses}</ul>;
};

export default Press;