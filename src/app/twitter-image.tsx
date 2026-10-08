import { ImageResponse } from "next/og";
import { ShareCard } from "@/lib/share-card";

export const dynamic = "force-static";
export const alt = "Dharmik Joshi — Back-office work that runs itself.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<ShareCard />, { ...size });
}
