import { get, set } from "@cumcord/modules/internal/idbKeyval";
import { make } from "@cumcord/modules/internal/nests";
import { asString, trueValue, VM, wrapFunc } from "cumlisp";

export default (vm: VM) =>
  vm.install({
    "int.nestsmake": wrapFunc("int.nestsmake", 1, async ([init]) =>
      make(init)
    ),
    "int.idbget": wrapFunc("int.idbget", 1, ([key]) =>
      get(asString(key))
    ),
    "int.idbset": wrapFunc("int.idbset", 2, ([key, val]) =>
      set(asString(key), val).then(() => trueValue)
    ),
  });
