from datetime import datetime


class Memory:
    def __init__(self):
        self.history = []

    def add(self, role, content):
        self.history.append({
            "timestamp": datetime.utcnow().isoformat(),
            "role": role,
            "content": content
        })

    def recent(self, limit=5):
        return self.history[-limit:]
