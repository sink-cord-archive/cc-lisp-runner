import { cum } from "@cumcord";
import { VM, wrapFunc } from "cumlisp";
import internal from "./internal";
import webpack from "./webpack";

export default (vm: VM) => {
  vm.install({
    cum: wrapFunc("cum", 0, async () => await cum()),
  });
  
  internal(vm);
  webpack(vm)
};
