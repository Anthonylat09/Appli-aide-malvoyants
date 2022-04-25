
export default {
  expo: {
    name: 'DEV-MOBILE-PROJECt-auth',
    slug: 'DEV-MOBILE-PROJECt-auth',
    version: '1.0.0',
    orientation: 'portrait',
  
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
       
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
  }
};