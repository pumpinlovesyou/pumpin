from activities.activity_reflect import run as reflect_activity


class Orchestrator:
    def __init__(self, memory):
        self.memory = memory

    def decide(self):
        return reflect_activity(self.memory)
