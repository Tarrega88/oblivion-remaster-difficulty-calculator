import { useDispatch } from "react-redux";
import LargeOption from "../ui/LargeOption";
import { setGuideSection } from "../redux/guideSlice";

function GuideIntro() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-xl">Need some guidance?</div>
      <div className="text-center text-xl">
        Would you like to be guided through options to try to find the best
        difficulty for you, or do you just want to read about how this works?
      </div>
      <div className="flex justify-center gap-12 pt-6">
        <LargeOption
          text="Guide Me"
          onClick={() => dispatch(setGuideSection("guided"))}
        />
        <LargeOption
          text="Let me read"
          onClick={() => dispatch(setGuideSection("text"))}
        />
      </div>
    </div>
  );
}

export default GuideIntro;
