function TextGuideRow({ leftText, mainText = [] }) {
  return (
    <div className="flex flex-col gap-2 2xl:gap-3">
      <div className="text-xl text-nowrap">{leftText}</div>
      <div className="flex flex-col gap-1">
        {mainText.map((e) => (
          <div className="text-lg">{e}</div>
        ))}
      </div>
      {/* <div className="text-lg">{rightText}</div> */}
    </div>
  );
}

export default TextGuideRow;
