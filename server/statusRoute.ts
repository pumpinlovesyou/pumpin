// server/statusRoute.ts

import type { Express, Request, Response } from "express";

const startTime = Date.now();

export interface ServerHealth {
  status: "ok" | "degraded";
  service: string;
  framework: string;
  uptime: number;
  timestamp: string;
}

/**
 * Registers a health + status endpoint for Pumpin.
 * Helps dashboards, monitoring, and readiness checks.
 */
export function registerStatusRoute(app: Express) {
  app.get("/api/status", (_req: Request, res: Response) => {
    const payload: ServerHealth = {
      status: "ok",
      service: "pumpin-agent",
      framework: "pippin",
      uptime: Math.floor((Date.now() - startTime) / 1000),
      timestamp: new Date().toISOString(),
    };

    res.json(payload);
  });
}
