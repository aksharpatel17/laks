// import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label,Tooltip ,ResponsiveContainer} from "recharts";
// export default function Chart({ data, keys }) {
//   return (
//     <BarChart
//       width={720}
//       height={530}
//       data={data}
//       margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
//       className={"mt-4"}
//     >
//       <CartesianGrid strokeDasharray="12 12" />
//       <XAxis dataKey="name">
//         <Label value={keys[0]} position={"bottom"} />
//       </XAxis>
//       <YAxis label={{ value: keys[1], angle: -90, position: "left" }} />
//       <Bar dataKey="count" />
//     </BarChart>
//   );
// }

import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Label } from "recharts";
export default function Chart({ data, keys }) {
  return (
    <BarChart
      width={950}
      height={500}
      data={data}
      margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
      className={"mt-4"}
    >
      <CartesianGrid strokeDasharray="12 12" />
      <XAxis dataKey="name" stroke="#fff" angle={-90}>
        <Label value={keys[0]} position={"bottom"} style={{ fill: "#fff" }} />
      </XAxis>
      <YAxis stroke="#fff" label={{ value: "Count", angle: -90, position: "left", color: "white !important", fill:"#fff" }} />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
}

