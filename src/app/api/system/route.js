import { NextResponse } from "next/server";
import si from "systeminformation";

export async function GET() {
  try {
    const [cpuLoad, mem, battery, network] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.battery(),
      si.networkInterfaces(),
    ]);

    return NextResponse.json({
      cpu: Number(cpuLoad.currentLoad.toFixed(1)),
      ram: Number(((mem.used / mem.total) * 100).toFixed(1)),
      battery: battery.hasBattery ? Number(battery.percent.toFixed(1)) : null,
      online: network.some((n) => n.operstate === "up"),
    });
  } catch (error) {
    return NextResponse.json(
      {
        cpu: 0,
        ram: 0,
        battery: null,
        online: false,
        error: error instanceof Error ? error.message : "System info unavailable",
      },
      { status: 500 }
    );
  }
}
