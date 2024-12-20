/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_REACT_APP_NAME: string
	readonly VITE_APP_SLOGAN: string
	readonly VITE_APP_DESCRIPTION: string
	readonly VITE_APP_ENV: string
	readonly VITE_APP_GOOGLE_TAG_MANAGER: string
	readonly VITE_APP_PRIVACY_POLICY_URL: string
	readonly VITE_APP_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}