feat(pippin): define Pippin-compatible types and contracts

// pumpin/pippinTypes.ts

export type PippinRole = "system" | "developer" | "user" | "assistant" | "tool";

export interface PippinMessage {
  role: PippinRole;
  content: string;
  name?: string; // tool name
}

export interface PippinTool {
  name: string;
  description: string;
  // JSON Schema-ish params. Keep flexible so it works with multiple Pippin SDK flavors.
  parameters: Record<string, unknown>;
}

export interface PippinToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface PippinModelResponse {
  id: string;
  content?: string;
  toolCalls?: PippinToolCall[];
  // Optional: structured outputs
  json?: Record<string, unknown>;
}

export interface PippinMemoryItem {
  id: string;
  createdAt: string;
  namespace: string;
  text: string;
  metadata?: Record<string, unknown>;
}

export interface PippinRuntimeConfig {
  baseUrl: string;          // e.g. https://api.pippin.run (or your local bridge)
  apiKey?: string;          // if needed
  model?: string;           // if runtime supports it
  memoryNamespace: string;  // e.g. "pumpin"
  timeoutMs?: number;
}

export interface PippinRuntime {
  complete(input: {
    messages: PippinMessage[];
    tools?: PippinTool[];
    temperature?: number;
  }): Promise<PippinModelResponse>;

  remember(input: {
    text: string;
    metadata?: Record<string, unknown>;
    namespace?: string;
  }): Promise<PippinMemoryItem>;

  recall(input: {
    query: string;
    limit?: number;
    namespace?: string;
  }): Promise<PippinMemoryItem[]>;
}
