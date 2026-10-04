export type CouncilPhase = string | null

declare module 'claude-code' {
  interface PluginState {
    council: { isAsking: boolean; phase: CouncilPhase; transcript: string; help: boolean }
  }
}
