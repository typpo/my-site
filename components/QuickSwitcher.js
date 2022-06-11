import Link from "next/link";
import { useRouter } from "next/router";

const QuickSwitcher = () => {
  const router = useRouter();

  return (
    <div className="nav">
      <strong>&raquo;</strong> &nbsp;
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Projects</a>
      </Link>
      &nbsp;&middot;&nbsp;
      <Link href="/talks">
        <a className={router.pathname === "/talks" ? "active" : ""}>Talks</a>
      </Link>
    </div>
  );
};
export default QuickSwitcher;
