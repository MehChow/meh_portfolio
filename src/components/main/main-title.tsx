import "./styles/main-title.css";
import CubeTextAnimation from "./cube-text";
import MainFooter from "./main-footer";

function MainTitle() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)] w-full select-none flex-col">
      <h1 className="title">MEHCHOW</h1>

      <div className="flex items-center justify-center gap-2 subtitle-container">
        <span className="text-white text-4xl text-nowrap">I'm a</span>
        <CubeTextAnimation />
      </div>

      <MainFooter />
    </div>
  );
}

export default MainTitle;
