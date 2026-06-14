import fs from "fs";
import path from "path";
import { timeline, TimelineItem } from "./content";

// Logo dosyası public/ içinde gerçekten varsa logo'yu korur; yoksa kaldırır
// (böylece kırık imaj yerine kurum baş harfleri gösterilir). Sunucuda çalışır.
export function getTimeline(): TimelineItem[] {
  return timeline.map((item) => {
    if (item.logo) {
      const filePath = path.join(process.cwd(), "public", item.logo);
      if (!fs.existsSync(filePath)) {
        const { logo, ...rest } = item;
        return rest;
      }
    }
    return item;
  });
}
