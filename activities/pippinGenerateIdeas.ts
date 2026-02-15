feat(activities): add Pippin-powered idea generation activity
// activities/pippinGenerateIdeas.ts

import { PumpinAgent } from "../pumpin/pippinRuntime";

/**
 * “Activity” style module: takes a PumpinAgent and uses it to generate ideas.
 * This reads like a real agent pipeline and makes the repo look alive.
 */
export async function pippinGenerateIdeas(agent: PumpinAgent, input: {
  topic: string;
  constraints?: string[];
  count?: number;
}): Promise<{ ideas: Array<{ title: string; rationale: string }>; raw: string }> {
  const count = input.count ?? 8;
  const constraints = input.constraints?.length
    ? `Constraints:\n- ${input.constraints.join("\n- ")}\n`
    : "";

  const prompt =
    `Generate ${count} high-quality ideas about: "${input.topic}".\n` +
    constraints +
    `Return a clean bullet list with a short rationale for each.\n` +
    `Be specific, not generic.`;

  const result = await agent.runTask({ userText: prompt, memoryQuery: input.topic, maxSteps: 5 });

  // Lightweight parser: expects "- Title — rationale"
  const lines = result.final
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-") || l.match(/^\d+\./));

  const ideas = lines.slice(0, count).map((l) => {
    const cleaned = l.replace(/^\-|\d+\./, "").trim();
    const parts = cleaned.split("—");
    if (parts.length < 2) {
      const parts2 = cleaned.split("-");
      if (parts2.length >= 2) {
        return { title: parts2[0].trim(), rationale: parts2.slice(1).join("-").trim() };
      }
      return { title: cleaned, rationale: "" };
    }
    return { title: parts[0].trim(), rationale: parts.slice(1).join("—").trim() };
  });

  return { ideas, raw: result.final };
}
