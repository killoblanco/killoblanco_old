/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIRE_API_KEY: string
  readonly VITE_FIRE_PROJECT_ID: string
  readonly VITE_FIRE_APP_ID: string
  readonly VITE_FIRE_GA: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
