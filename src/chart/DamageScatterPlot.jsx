import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ZAxis,
  Label,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;
  return (
    <div className="bg-ironshade-700 rounded p-2 text-white shadow">
      <div>
        <strong>Difficulty Slider Fixed:</strong> {data.sliderModName}
      </div>
      <div>
        <strong>More Damage:</strong> {data.damageModName}
      </div>
      <div>
        <strong>Difficulty Level:</strong> {data.difficultyName}
      </div>
      <div>
        <strong>Damage Dealt:</strong> {Math.round(data.dealt * 100)}%
      </div>
      <div>
        <strong>Damage Taken:</strong> {Math.round(data.taken * 100)}%
      </div>
      <div>
        <strong>Relative Strength:</strong>{" "}
        {Math.round(data.relativeStrength * 100)}%
      </div>
    </div>
  );
}

function DamageScatterPlot({ data }) {
  const groupedByStrength = {};

  const enrichedData = data.map((entry) => ({
    ...entry,
    size: entry.relativeStrength,
  }));

  enrichedData.forEach((entry) => {
    const key = entry.relativeStrength;
    if (!groupedByStrength[key]) {
      groupedByStrength[key] = [];
    }
    groupedByStrength[key].push(entry);
  });

  const recommendedBlanks = {
    damageModName: "",
    sliderModName: "",
    dfficultyName: "",
  };

  const recommendedRanges = {
    0.25: [
      {
        ...recommendedBlanks,
        dealt: 0,
        taken: 0,
        relativeStrength: 0.25,
        size: 0,
      },
      {
        ...recommendedBlanks,
        dealt: 2,
        taken: 8,
        relativeStrength: 0.25,
        size: 0,
      },
    ],
    0.64: [
      {
        ...recommendedBlanks,
        dealt: 0,
        taken: 0,
        relativeStrength: 0.64,
        size: 0,
      },
      {
        ...recommendedBlanks,
        // dealt: 5.12,
        // taken: 8,
        dealt: 2.56,
        taken: 4,
        relativeStrength: 0.64,
        size: 0,
      },
    ],
  };

  return (
    // <div className="h-[430px] sm:h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1200px]">
    <div className="flex w-full justify-center pb-16">
      <div className="size-[430px] sm:size-[600px] md:size-[800px] lg:size-[900px] xl:size-[1000px] 2xl:size-[1200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 60, right: 60, bottom: 60, left: 60 }}>
            <CartesianGrid />
            <XAxis
              dataKey="taken"
              type="number"
              name="Damage Taken"
              tickFormatter={(v) => `${Math.round(v * 100)}%`}
            >
              <Label
                value="Damage Taken (%)"
                offset={-20}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              dataKey="dealt"
              type="number"
              name="Damage Dealt"
              tickFormatter={(v) => `${Math.round(v * 100)}%`}
            >
              <Label
                value="Damage Dealt (%)"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
                offset={-20}
              />
            </YAxis>
            <ZAxis
              type="number"
              dataKey="size"
              range={[50, 1224]}
              name="Relative Strength"
              unit="%"
            />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(groupedByStrength).map(
              ([strength, group], index) => (
                <Scatter
                  key={strength}
                  data={group}
                  name={`RS ${strength}%`}
                  fill="#a7e3c8"
                  className="fill-emeraldshade-400 hover:fill-emeraldshade-300" //cursor-pointer will add later when I add in selection between this and the table
                  line
                />
              ),
            )}
            {/* {Object.entries(recommendedRanges).map(([strength, group]) => (
          <Scatter
          key={`recommended-${strength}`}
          legendType="none"
          data={group}
          name="Recommended Minimum"
          fill="transparent"
          pointerEvents="none"
          line={{
            stroke: "#a7e3c8",
            opacity: "25%",
            strokeWidth: 12,
            pointerEvents: "none",
            }}
            />
            ))} */}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DamageScatterPlot;
