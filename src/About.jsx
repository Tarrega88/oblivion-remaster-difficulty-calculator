import LargeCollapsibleWrapper from "./ui/LargeCollapsibleWrapper";

//"https://www.nexusmods.com/oblivionremastered/mods/269"
//"https://www.nexusmods.com/oblivionremastered/mods/58"
function About() {
  return (
    <LargeCollapsibleWrapper text="About">
      <div className="flex justify-center px-1 py-2 sm:px-12 sm:py-4 sm:text-lg">
        <div>
          <div className="pb-4">
            Well met, traveler. This page is intended to aid you in your quest
            to discover the perfect difficulty in Oblivion Remastered.
          </div>
          <div className="pb-4">
            The main feature of this page is the table that displays all
            possible damage combinations that result from combining the{" "}
            <a
              href="https://www.nexusmods.com/oblivionremastered/mods/269"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember-200 underline underline-offset-3 transition-all duration-200"
            >
              More Damage
            </a>{" "}
            and{" "}
            <a
              href="https://www.nexusmods.com/oblivionremastered/mods/58"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ember-200 underline underline-offset-3 transition-all duration-200"
            >
              Difficulty Slider Fixed
            </a>{" "}
            mods.
          </div>
          <div className="pb-4">
            Oblivion Remastered difficulty is currently a little spongey at
            higher difficulties, so the mod authors have offered solutions
            which, when combined, offer a much more balanced and challenging
            game.
          </div>
          <div className="pb-4">
            If you're not sure where to start, check out the Guide Section
            below.
          </div>
          {/* <div className="pb-4">
            - Enabled Mods Versions: Allows you to select which versions of the
            mods will show up in the table.
          </div>
          <div className="pb-4">
            - Custom Value: This is mainly intended for the mod authors. I
            figure if either A, they want to make more versions or B, Oblivion
            ever gets tweaked by Bethesda and Virtuos, it might help the mod
            authors see what kinds of results would occur.
          </div>
          <div className="pb-4">
            - Damage Filters: Allows you to set thresholds for damage dealt,
            taken, and relative strength.
          </div> */}
          {/* <div className="pb-4">
            - Relative Strength is an important metric. It's the real difficulty
            when looking at the table. For example, if you choose a relative
            strength of 75%, it means you are 75% as strong as you would be
            compared to Vanilla adept, and therefore you are weaker than your
            enemies.
          </div>
          <div className="pb-4">
            - Difficulty Table: You can sort this by clicking on any of the
            table headers. I recommend sorting it by relative strength.
          </div> */}
          <div>- About Me: Software Dev, Gamer, Musician.</div>
          <a
            className="hover:text-ember-200 underline underline-offset-3 transition-all duration-200"
            href="https://michaelthedev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Site
          </a>
        </div>
      </div>
    </LargeCollapsibleWrapper>
  );
}

export default About;
