import { initializeApp } from 'firebase/app'
import {getAnalytics, logEvent} from 'firebase/analytics'

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID,
  measurementId: import.meta.env.VITE_FIRE_GA
})

const analytics = getAnalytics(app)

export const pageView = (path: string, title: string) => {
  if (import.meta.env.PROD) {
    logEvent(analytics, 'page_view', {
      page_path: path,
      page_title: title
    })
  }
}
