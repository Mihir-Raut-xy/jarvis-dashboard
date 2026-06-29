import { NextResponse } from "next/server";
import si from "systeminformation";

export async function GET() {
  try {
    console.log("Starting system API...");

    console.log("CPU...");
    const cpuLoad = await si.currentLoad();
    console.log("✓ CPU");

    console.log("Memory...");
    const mem = await si.mem();
    console.log("✓ Memory");

    console.log("Battery...");
    const battery = await si.battery();
    console.log("✓ Battery");

    console.log("Network...");
    const network = await si.networkInterfaces();
    console.log("✓ Network");

    console.log("Time...");
    const time = await si.time();
    console.log("✓ Time");

    return NextResponse.json({
      cpu: cpuLoad.currentLoad.toFixed(1),
      ram: ((mem.used / mem.total) * 100).toFixed(1),
      battery: battery.hasBattery ? battery.percent : "Desktop",
      online: network.some((n) => n.operstate === "up"),
      uptime: time.uptime,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}