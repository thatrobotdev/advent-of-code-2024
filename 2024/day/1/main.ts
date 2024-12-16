async function separateLists(inputFile: string) {
  const input = await Deno.readTextFile(inputFile);

  // Separate locationID pairs
  const lines = input
    .split("\n")
    .filter((c: string) => c !== ""); // Filter out empty lines

  // Put locationIDs into respective lists
  const list1: number[] = [];
  const list2: number[] = [];

  for (const line of lines) {
    const pair = line.split("   ");
    list1.push(parseInt(pair[0]));
    list2.push(parseInt(pair[1]));
  }

  return { list1, list2 };
}

// Part 1
export async function getTotalDistance(inputFile = "2024/day/1/input") {
  let totalDistance = 0;

  // Separate lists in input
  const { list1, list2 }: { list1: number[]; list2: number[] } =
    await separateLists(inputFile);

  // Sort lists
  list1.sort();
  list2.sort();

  // Add up distances
  for (let i = 0; i <= list1.length - 1; i++) {
    totalDistance += Math.abs(list1[i] - list2[i]);
  }
  console.log(totalDistance);
  return totalDistance;
}

// Part 2
export async function getSimilarityScore(inputFile = "2024/day/1/input") {
  let totalSimilarityScore = 0;

  // Separate lists in input
  const { list1, list2 }: { list1: number[]; list2: number[] } =
    await separateLists(inputFile);

  for (let i = 0; i <= list1.length - 1; i++) {
    const numOccurences = list2.filter((locationID) => locationID == list1[i]).length;
    totalSimilarityScore += list1[i] * numOccurences;
  }

  console.log(totalSimilarityScore);
  return totalSimilarityScore;
}

getTotalDistance();
getSimilarityScore();