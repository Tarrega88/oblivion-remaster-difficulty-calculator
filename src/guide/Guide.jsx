import { useDispatch, useSelector } from "react-redux";
import BackButton from "../ui/BackButton";
import GuideIntro from "./GuideIntro";
import TextGuideIntro from "./textguide/TextGuideIntro";
import GuidedIntro from "./guided/GuidedIntro";
import { setGuidePage, setGuideSection } from "../redux/guideSlice";
import LargeCollapsibleWrapper from "../ui/LargeCollapsibleWrapper";

const sections = {
  intro: [<GuideIntro />],
  text: [<TextGuideIntro />],
  guided: [<GuidedIntro />],
};

//Prepped for adding a "Guided" section now - text guide is implemented already.

function Guide() {
  const { guideSection, guidePage } = useSelector((state) => state.guide);
  const dispatch = useDispatch();

  function handleGoBack() {
    if (guidePage === 0) {
      dispatch(setGuideSection("intro"));
    } else {
      dispatch(setGuidePage(guidePage - 1));
    }
  }
  //const isIntro = guideSection === "intro" && guidePage === 0;

  return (
    <LargeCollapsibleWrapper text="Guide" lightHover={true}>
      {/* {!isIntro && <BackButton onClick={handleGoBack} />} */}
      <div className="flex flex-col sm:px-8">
        {/* {sections[guideSection][guidePage] ?? sections.intro[0]} */}
        {sections.text[0]}
      </div>
    </LargeCollapsibleWrapper>
  );
}

export default Guide;
