import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList
} from 'recharts';
import { DRIVE_SPECS } from '../types';

interface SpeedChartProps {
    data: { [key: string]: number };
}

export function SpeedChart({ data }: SpeedChartProps) {

    // Find max speed to set the domain cleanly (e.g. 8000 for NVMe context)
    const maxVal = Math.max(...Object.values(data), 7500);

    const chartData = DRIVE_SPECS.map((drive) => ({
        name: drive.name,
        value: data[drive.id] || 0,
        color: drive.color,
        fullMark: maxVal // For background track calculation if needed
    }));

    return (
        <div className="bg-card rounded-xl p-6 border border-border h-[450px] flex flex-col shadow-sm relative overflow-hidden group">

            {/* Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="mb-6 relative z-10 flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        Performance Benchmark
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Real-time Sequential Write Speed (MB/s)
                    </p>
                </div>
                {/* Legend/Key */}
                <div className="flex gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                        <span className="text-muted-foreground">HDD</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span className="text-muted-foreground">SATA</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                        <span className="text-muted-foreground">NVMe</span>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="100%" className="flex-1 relative z-10">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ left: 10, right: 80, top: 10, bottom: 10 }}
                    barGap={4}
                >
                    {/* Subtle Grid */}
                    <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} horizontal={false} />

                    <XAxis
                        type="number"
                        hide
                        domain={[0, 'auto']}
                    />
                    <YAxis
                        type="category"
                        dataKey="name"
                        stroke="currentColor"
                        width={120}
                        tick={{ fill: 'currentColor', fontSize: 13, fontWeight: 600 }}
                        tickLine={false}
                        axisLine={false}
                        className="text-foreground"
                    />

                    <Tooltip
                        cursor={{ fill: 'currentColor', opacity: 0.05 }}
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-popover border border-border p-3 rounded-xl shadow-xl">
                                        <p className="font-bold text-foreground mb-1">{data.name}</p>
                                        <p className="font-mono text-lg" style={{ color: data.color }}>
                                            {data.value.toLocaleString()} MB/s
                                        </p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />

                    {/* Background Track Bar (Gray) */}
                    <Bar dataKey="fullMark" barSize={36} radius={[0, 8, 8, 0]} isAnimationActive={false} fill="currentColor" className="opacity-[0.05] absolute" />

                    {/* Actual Data Bar */}
                    <Bar dataKey="value" barSize={36} radius={[0, 6, 6, 0]}>
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                className="transition-all duration-300"
                                style={{
                                    filter: `drop-shadow(0 0 4px ${entry.color}60)` // Glow effect
                                }}
                            />
                        ))}
                        <LabelList
                            dataKey="value"
                            position="right"
                            offset={15}
                            className="fill-foreground font-mono font-bold text-lg"
                            formatter={(val: number) => Math.round(val).toLocaleString()}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
