// Postprocessing: Sort data by id for stability


const filename = Deno.args[0];
const data = JSON.parse(await Deno.readTextFile(filename));
data.sort((a, b) => a.id - b.id);
await Deno.writeTextFile(filename, JSON.stringify(data, null, "  "));
