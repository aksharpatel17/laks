import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label } from "recharts";
export default function Chart({ data, keys }) {
  return (
    <BarChart
      width={720}
      height={530}
      data={data}
      margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
      className={"mt-4"}
    >
      <CartesianGrid strokeDasharray="12 12" />
      <XAxis dataKey="name">
        <Label value={keys[0]} position={"bottom"} />
      </XAxis>
      <YAxis label={{ value: keys[1], angle: -90, position: "left" }} />
      <Bar dataKey="uv" />
    </BarChart>
  );
}
