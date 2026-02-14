from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Optional, Protocol


@dataclass
class ActivityResult:
    success: bool
    message: str
    data: Optional[Dict[str, Any]] = None
    error: Optional[str] = None


class Activity(Protocol):
    name: str
    description: str

    def run(self, memory) -> ActivityResult: ...
