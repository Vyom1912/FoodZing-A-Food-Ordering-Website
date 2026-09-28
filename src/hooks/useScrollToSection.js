import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// HashRouter uses the URL hash for routing, so plain `href="#section"` links
// would be treated as routes. Scroll with JS instead, going back to the home
// page first when needed.
const useScrollToSection = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (id) => {
      if (pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
        return;
      }
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    },
    [navigate, pathname]
  );
};

export default useScrollToSection;
