import json
from pathlib import Path


class PumpinRuntime:
    def __init__(self):
        config_path = Path("config/character_config.json")
        if config_path.exists():
            self.config = json.loads(config_path.read_text())
        else:
            self.config = {"name": "Pumpin"}

    def run(self):
        print(f"{self.config.get('name')} is alive 🚀")

        while True:
            user_input = input("You: ")
            if user_input.lower() in ["exit", "quit"]:
                print("Pumpin shutting down...")
                break

            print("Pumpin: I'm thinking about that 🤔")
