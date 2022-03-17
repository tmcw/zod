import discriminatedUnionBenchmarks from "./discriminatedUnion.ts";
import objectBenchmarks from "./object.ts";
import primitiveBenchmarks from "./primitives.ts";
import stringBenchmarks from "./string.ts";
import unionBenchmarks from "./union.ts";

for (const suite of [
  ...unionBenchmarks.suites,
  ...primitiveBenchmarks.suites,
  ...stringBenchmarks.suites,
  ...objectBenchmarks.suites,
  ...discriminatedUnionBenchmarks.suites,
]) {
  suite.run();
}
