import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_API_K,
  projectId: process.env.REACT_APP_FIRE_P_ID,
  appId: process.env.REACT_APP_FIRE_APP_ID,
  measurementId: process.env.REACT_APP_FIRE_GA,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const pageView = (path: string, title: string) => {
  if (process.env.NODE_ENV === 'production') {
    logEvent(
      analytics,
      'page_view',
      {
        page_path: path,
        page_title: title,
      },
    );
  }
};



