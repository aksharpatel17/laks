import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label } from "recharts";
export default function Chart({ data }) {
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
        <Label value={"Issuing Agency"} position={"bottom"} />
      </XAxis>
      <YAxis label={{ value: "Count", angle: -90, position: "left" }} />
      <Bar dataKey="uv" />
    </BarChart>
  );
}
