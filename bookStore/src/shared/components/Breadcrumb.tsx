import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null; // hidden when at homepage

  return (
    <nav className="text-gray-600 text-sm py-2">
      <Link to="/" className="text-[#808089]">Trang chủ </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={name}>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#808089]" />
            <Link to={routeTo} className="text-[#27272A]">
              {decodeURIComponent(" "+name)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
