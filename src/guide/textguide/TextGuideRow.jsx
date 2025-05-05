function TextGuideRow({ leftText, mainText = [] }) {
  return (
    <div className="flex flex-col gap-2 2xl:gap-3">
      <div className="text-xl font-semibold text-nowrap">{leftText}</div>
      <div className="flex flex-col gap-1">
        {mainText.map((e, i) => (
          <div key={i} className="text-lg">
            {e}
            {/* {` - ${e}`} */}
          </div>
        ))}
      </div>
      {/* <div className="text-lg">{rightText}</div> */}
    </div>
  );
}

export default TextGuideRow;
