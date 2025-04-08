import atomContext from "@/controller/atomContext";
import { memo, useCallback, useContext } from "react";
import { GITHUB_LINK } from "@/controller/config";
import { Link } from "react-router";

function Header() {
  const { theme, fitToScreen, dispatch } = useContext(atomContext);

  if (fitToScreen) {
    return null;
  }

  const handleColorSchemeChange = useCallback(() => {
    let themeProperty = document.documentElement.getAttribute("data-theme");
    if (themeProperty == "dark") {
      dispatch({ type: "theme", payload: "light" });
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      dispatch({ type: "theme", payload: "dark" });
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="relative top-0 flex items-center w-full justify-center">
      <div className="px-8 py-4 w-11/12 md:w-8/12 lg:w-6/12 dark:bg-cardBg-dark bg-cardBg rounded-3xl mt-6 flex justify-between">
        <Link to="/">
          <img
            className="w-32 ml-2 h-auto"
            src={`/logo_expanded${isDark ? "_dark" : ""}.png`}
            alt="logo"
          />
        </Link>
        <div className="flex gap-2">
          <a
            href={GITHUB_LINK}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <button className="hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full">
              <img
                className="w-6 h-auto dark:invert"
                src="/icons/github.svg"
                alt="github"
              />
            </button>
          </a>
          <button
            onClick={handleColorSchemeChange}
            className="hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full"
          >
            <img
              className="w-6 h-auto dark:invert"
              src="/icons/dark.svg"
              alt="theme"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
