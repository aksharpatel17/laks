import {BarChart, CartesianGrid, XAxis, YAxis, Bar} from "recharts";
export default function Chart({data}) {
    return (<div>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid srtokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Bar dataKey="uv"/>
        </BarChart>
    </div>)
}