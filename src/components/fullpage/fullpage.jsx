import ReactFullpage from "@fullpage/react-fullpage";
import Main from "../main/main";
import About from "../about/about";
const anchors = ["main", "about"];

const FullPageScroll = () =>(
    <ReactFullpage
    scrollingSpeed = {1000}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination, direction) => {}}
    render={({ state, fullpageApi }) => {
      return (
        <div className="texture">
          
            <Main/>
            <About/>
        </div>
      );
    }}
  />
)
export default FullPageScroll;