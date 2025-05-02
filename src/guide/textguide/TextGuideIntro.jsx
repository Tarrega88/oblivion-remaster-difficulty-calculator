import TextGuideRow from "./TextGuideRow";

function TextGuideIntro() {
  return (
    <div className="flex flex-col gap-6 px-8 pt-1 2xl:gap-7">
      <TextGuideRow
        leftText="What is This For?"
        mainText={[
          `This tool is intended to help you choose the perfect difficulty in Oblivion Remastered, by combining two mods, "More Damage" and "Difficulty Sliders Fixed" on Nexus.`,
        ]}
      />
      <TextGuideRow
        leftText="How Do I Use It?"
        mainText={[
          "Let's break that question up into the 3 sections below:",
          ,
        ]}
      />
      <TextGuideRow
        leftText="Enabled Mod Versions"
        mainText={[
          "If you already know which mod versions you want to use, click on Enabled Mod Versions and turn the other mod versions to off. This will help you avoid cluttering the table. Otherwise, keep them all on.",
        ]}
      />
      <TextGuideRow
        leftText="Damage Filters"
        mainText={[
          "If you have a general idea of how much damage you want to be able to deal and how much you want to take, then go into the Damage Filters Section, enter in your desired values, and make sure the sliders for those values are set to on.",
        ]}
      />
      <TextGuideRow
        leftText="Difficulty Table"
        mainText={[
          "Choose a row where you're happy with the damage dealt, damage taken, and the relative strength of your character (100% relative strength means you are just as strong as your enemies, the same balance as vanilla adept, so I'd recommend going lower). Download the mod versions in that row, and set your game difficulty to the level listed.",
        ]}
      />
    </div>
  );
}

export default TextGuideIntro;
