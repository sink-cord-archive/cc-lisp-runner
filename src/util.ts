import { asString, Value, VMScope } from "cumlisp";

export function asFunc(v: Value, scope?: VMScope): Function {
  if (typeof v === "function") return v;

  if (scope) {
    let fName;
    try {
      fName = asString(v);
    } catch {
      throw new Error(
        `Value of kind ${v.constructor} not a function and not a string`
      );
    }
    const f = scope.getFunction(fName);
    if (f) return f;

    throw new Error(`Function with name ${fName} does not exist in that scope`);
  }

  throw new Error(`Value of kind ${v.constructor} not convertible to function`);
}