import discriminatedUnionBenchmarks from "./discriminatedUnion";
import objectBenchmarks from "./object";
import primitiveBenchmarks from "./primitives";
import stringBenchmarks from "./string";
import unionBenchmarks from "./union";

for (const suite of [
  ...unionBenchmarks.suites,
  ...primitiveBenchmarks.suites,
  ...stringBenchmarks.suites,
  ...objectBenchmarks.suites,
  ...discriminatedUnionBenchmarks.suites,
]) {
  suite.run();
}
