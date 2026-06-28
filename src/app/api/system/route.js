import { NextResponse } from "next/server";
import si from "systeminformation";

export async function GET() {
  try {
    const [
      cpuLoad,
      mem,
      battery,
      network,
      time
    ] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.battery(),
      si.networkInterfaces(),
      si.time(),
    ]);

    return NextResponse.json({
      cpu: cpuLoad.currentLoad.toFixed(1),
      ram: ((mem.used / mem.total) * 100).toFixed(1),
      battery: battery.hasBattery
        ? battery.percent
        : "Desktop",
      online: network.some((n) => n.operstate === "up"),
      uptime: time.uptime,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to read system information.",
      },
      { status: 500 }
    );
  }
}
