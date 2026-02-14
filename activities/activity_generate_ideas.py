from __future__ import annotations

from pumpin.activity_base import ActivityResult


name = "generate_ideas"
description = "Generates next-step ideas based on objectives and recent memory."


def run(memory) -> ActivityResult:
    recent = memory.recent(limit=10)
    last_user = next((m["content"] for m in reversed(recent) if m["role"] == "user"), "")

    ideas = [
        "Define Pumpin’s voice rules (what it will never do, how it speaks).",
        "Add persistent memory (save to disk) so Pumpin remembers tomorrow.",
        "Add an onboarding CLI to set personality + objectives from terminal."
    ]

    if last_user:
        ideas.insert(0, f"Based on your last message, expand on: '{last_user[:80]}'")

    return ActivityResult(
        success=True,
        message="Next ideas:\n- " + "\n- ".join(ideas[:4]),
        data={"ideas": ideas[:4]}
    )
