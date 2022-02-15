import { log } from "@cumcord/utils/logger";

const patches: (() => void)[] = [];

log("Hello, World from lisp-runner");

export default {
  onUnload: () => window._.forEachRight(patches, (p) => p()),
};
