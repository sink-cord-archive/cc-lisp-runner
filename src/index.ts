import { log } from "@cumcord/utils/logger";
import runner from "./runner";

const patches: (() => void)[] = [];

runner("%(cum)").then(log);

export default {
  onUnload: () => window._.forEachRight(patches, (p) => p()),
};
