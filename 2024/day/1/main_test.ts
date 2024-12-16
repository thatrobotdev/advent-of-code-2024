import { assertEquals } from "@std/assert";
import { getTotalDistance, getSimilarityScore } from "./main.ts";

Deno.test({
  name: "2024 Day 1 Part 1",
  permissions: {read: true },
  fn: async () => {
    const totalDistance = await getTotalDistance("2024/day/1/input_example");
    assertEquals(totalDistance, 11);
  },
});

Deno.test({
  name: "2024 Day 1 Part 2",
  permissions: { read: true },
  fn: async () => {
    const similarityScore = await getSimilarityScore("2024/day/1/input_example");
    assertEquals(similarityScore, 31);
  },
});