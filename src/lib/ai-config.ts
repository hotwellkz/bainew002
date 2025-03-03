export const AI_CONFIG = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    model: 'gpt-4'
  },
  anthropic: {
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    model: 'claude-3-opus-20240229'
  },
  elevenlabs: {
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
  }
};