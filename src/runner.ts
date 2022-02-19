import { libBasic, run, VM } from "cumlisp";
import { warn } from "@cumcord/utils/logger";
import installStools from "clisp-stools";
import installApi from "./api";

const createVM = () => {
  let warnCount = 0;
  const vm = new VM(() => {
    if (warnCount % 50 === 0)
      warn(`VM hit max time ${warnCount} \`consumeTime\`s ago - this might be bad!`);
    warnCount++;
  });
  libBasic.installBasic(vm);
  installStools(vm);
  installApi(vm);
  return vm;
};

export default async (lisp: string) => {
  const vm = createVM();
  const res = await run(lisp, vm);
  return res;
};
