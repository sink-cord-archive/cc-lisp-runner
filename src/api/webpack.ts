import {
  find,
  findAll,
  findByDisplayName,
  // @ts-expect-error
  findByDisplayNameAll,
  findByKeywordAll,
  findByProps,
  findByPropsAll,
  findByPrototypes,
  findByStrings,
  modules,
  // @ts-expect-error
  getModule,
} from "@cumcord/modules/webpack";
import { asString, VM, wrapFunc } from "cumlisp";
import { asFunc } from "../util";

export default (vm: VM) =>
  vm.install({
    "wp.find": wrapFunc("wp.find", 1, async ([filter], scope) =>
      find(asFunc(filter /* , scope */))
    ),
    "wp.findall": wrapFunc("wp.findall", 1, async ([filter], scope) =>
      findAll(asFunc(filter /* , scope */))
    ),
    "wp.async": wrapFunc("wp.async", 0, async () => {
      throw new Error(
        "Need proper lisp async infrastructure to implement this"
      );
    }),
    "wp.dname": wrapFunc(
      "wp.dname",
      -1,
      // @ts-expect-error
      async ([displayname, parent]) => findByDisplayName(displayname, parent)
    ),
    "wp.dnameall": wrapFunc("wp.dnameall", 1, async ([displayName]) =>
      findByDisplayNameAll(displayName)
    ),
    "wp.keywordall": wrapFunc("wp.keywordall", -1, async (keywords) =>
      findByKeywordAll(...keywords.map(asString))
    ),
    "wp.props": wrapFunc("wp.props", -1, async (props) =>
      findByProps(...props.map(asString))
    ),
    "wp.propsall": wrapFunc("wp.propsall", -1, async (props) =>
      findByPropsAll(...props.map(asString))
    ),
    "wp.protos": wrapFunc("wp.protos", -1, async (protos) =>
      findByPrototypes(...protos.map(asString))
    ),
    "wp.strings": wrapFunc("wp.strings", -1, async (strings) =>
      findByStrings(...strings.map(asString))
    ),
    "wp.getmodule": wrapFunc("wp.getmodule", 1, async ([mod]) =>
      getModule(mod)
    ),
    "wp.modules": wrapFunc("wp.modules", 0, async () => modules),
  });
