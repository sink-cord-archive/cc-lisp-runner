import { libBasic, run, VM } from "cumlisp";
import { warn } from "@cumcord/utils/logger";
import installStools from "clisp-stools";
import installApi from "./api";

const createVM = () => {
  const vm = new VM(() => warn("VM hit max time - this might be bad!"));
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
