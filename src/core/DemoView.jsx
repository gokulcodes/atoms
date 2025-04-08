import PropTypes from "prop-types";
import atomContext from "@/controller/atomContext";
import { useCallback, useContext } from "react";
import DesignDocRenderer from "./DesignDocRenderer";
import { useLocation } from "react-router";

function DemoView(props) {
  const { renderView } = props;
  const { state } = useLocation();
  const { fitToScreen, dispatch } = useContext(atomContext);

  const toggleFullScreen = useCallback(() => {
    dispatch({ type: "fitScreen" });
  }, []);

  return (
    <div
      className={`w-full h-full flex flex-col gap-10 items-center justify-center ${
        fitToScreen ? "" : "mt-10"
      }`}
    >
      <div
        className={`flex ${
          fitToScreen ? "w-full" : "w-11/12 lg:w-8/12 rounded-4xl"
        } overflow-hidden items-center justify-center bg-gray-100 relative`}
      >
        <button
          onClick={toggleFullScreen}
          className="absolute right-5 bottom-5 z-10 hover:bg-gray-100 dark:hover:bg-bodyBg-dark cursor-pointer p-2 rounded-full"
        >
          <img
            className="w-8 h-auto dark:invert"
            src="/icons/zoom.png"
            alt="github"
          />
        </button>
        <div
          className={`w-full ${
            fitToScreen ? "h-[100vh] " : "h-[60vh]"
          } animate-openup dark:bg-demoBg-dark bg-demoBg flex items-center justify-center `}
        >
          {renderView}
        </div>
      </div>
      {state?.readMeUrl && <DesignDocRenderer readMeUrl={state.readMeUrl} />}
    </div>
  );
}

export default DemoView;

DemoView.propTypes = {
  renderView: PropTypes.element,
};
