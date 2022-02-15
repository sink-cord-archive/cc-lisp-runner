import { cum } from "@cumcord";
import { get, set } from "@cumcord/modules/internal/idbKeyval";
import { make } from "@cumcord/modules/internal/nests";
import { asString, trueValue, VM, wrapFunc } from "cumlisp";

export default (vm: VM) => {
  vm.install({
    // @ts-expect-error
    cum: wrapFunc("cum", 0, () => cum()),
    "internal-nests-make": wrapFunc("internal-nests-make", 1, ([init]) =>
      Promise.resolve(make(init))
    ),
    "internal-idb-get": wrapFunc("internal-idb-get", 1, ([key]) =>
      get(asString(key))
    ),
    "internal-idb-set": wrapFunc("internal-idb-set", 2, ([key, val]) =>
      set(asString(key), val).then(() => trueValue)
    ),
  });
};
