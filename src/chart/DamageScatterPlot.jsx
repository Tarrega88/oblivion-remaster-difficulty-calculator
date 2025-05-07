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

  const point = payload[0].payload;

  const entries = point.entries ?? [point];

  return (
    <div className="bg-ironshade-700 rounded p-2 text-xs text-white shadow">
      {entries.map((data, i) => (
        <div key={i} className="mb-1">
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
      ))}
    </div>
  );
}

function DamageScatterPlot({ data }) {
  const groupedPoints = {};

  data.forEach((entry) => {
    const key = `${entry.taken}-${entry.dealt}`;
    if (!groupedPoints[key]) {
      groupedPoints[key] = {
        ...entry,
        // size: entry.relativeStrength,
        entries: [],
      };
    }
    groupedPoints[key].entries.push(entry);
  });

  const enrichedData = Object.values(groupedPoints);

  const groupedByStrength = {};
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
        dealt: 2.56,
        taken: 4,
        relativeStrength: 0.64,
        size: 0,
      },
    ],
  };

  return (
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
            {/* <ZAxis
              type="number"
              dataKey="relativeStrength"
              range={[100, 100]}
              name="Relative Strength"
              unit="%"
            /> */}
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(groupedByStrength).map(
              ([strength, group], index) => (
                <Scatter
                  key={strength}
                  data={group}
                  name={`RS ${strength}%`}
                  fill="#a7e3c8"
                  className="fill-emeraldshade-400 hover:fill-emeraldshade-300"
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
