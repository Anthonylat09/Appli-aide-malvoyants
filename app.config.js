
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
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false,
        "UIBackgroundModes": ["location", "fetch"],
        "CFBundleAllowMixedLocalizations": true,
        "NSLocationAlwaysAndWhenInUseUsageDescription": "App requires geolocation to improve the quality of the service",
        "NSLocationAlwaysUsageDescription": "App requires geolocation to improve the quality of the service",
        "NSLocationWhenInUseUsageDescription": "App requires geolocation to improve the quality of the service",
        "NSCameraUsageDescription": "The picture will be used to inform the state of the packages during delivery"
      }
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