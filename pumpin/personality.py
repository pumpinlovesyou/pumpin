import json
from pathlib import Path


class Personality:
    def __init__(self):
        config_path = Path("config/character_config.json")
        if config_path.exists():
            self.data = json.loads(config_path.read_text())
        else:
            self.data = {"name": "Pumpin", "personality": "Curious"}

    @property
    def name(self):
        return self.data.get("name", "Pumpin")

    @property
    def description(self):
        return self.data.get("personality", "")
