import Link from "next/link";

const QuickSwitcher = () => {
  return (
    <div>
      <div className="nav">
        <strong>&raquo;</strong> &nbsp;
        <Link href="/" activeClassName="active"><a>Projects</a></Link>
        &nbsp;&middot;&nbsp;
        <Link href="/talks" activeClassName="active"><a>Talks</a></Link>
      </div>
      <div>
      </div>
    </div>
  );
};
export default QuickSwitcher;