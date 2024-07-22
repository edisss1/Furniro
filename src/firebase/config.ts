interface FirebaseConfig {
  VITE_FIRESTORE_API_KEY: string
  VITE_FIRESTORE_AUTH_DOMAIN: string
  VITE_FIRESTORE_PROJECT_ID: string
  VITE_FIRESTORE_STORAGE_BUCKET: string
  VITE_FIRESTORE_MESSAGING_SENDER_ID: string
  VITE_FIRESTORE_APP_ID: string
  VITE_FIRESTORE_MEASUREMENT_ID: string
  [key: string]: string
}

interface FirebaseOptions {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

async function getKey() {
  const rawKey = new TextEncoder().encode(
    import.meta.env.VITE_FIREBASE_KEY_PHRASE
  )
  return await window.crypto.subtle.importKey(
    "raw",
    rawKey,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"]
  )
}

async function decrypt(text: string) {
  const key = await getKey()
  const cipherText = Uint8Array.from(atob(text), (c) => c.charCodeAt(0))

  const iv = cipherText.slice(0, 12)
  const data = cipherText.slice(12)

  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    data
  )
  return new TextDecoder().decode(decrypted)
}

export async function fetchFirebaseConfig(): Promise<FirebaseOptions> {
  const response = await fetch("https://envserver.onrender.com/config")
  const encryptedConfig: FirebaseConfig = await response.json()
  const decryptedConfig: FirebaseConfig = {} as FirebaseConfig

  for (const key in encryptedConfig) {
    decryptedConfig[key] = await decrypt(encryptedConfig[key])
  }

  return {
    apiKey: decryptedConfig.VITE_FIRESTORE_API_KEY,
    authDomain: decryptedConfig.VITE_FIRESTORE_AUTH_DOMAIN,
    projectId: decryptedConfig.VITE_FIRESTORE_PROJECT_ID,
    storageBucket: decryptedConfig.VITE_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: decryptedConfig.VITE_FIRESTORE_MESSAGING_SENDER_ID,
    appId: decryptedConfig.VITE_FIRESTORE_APP_ID,
    measurementId: decryptedConfig.VITE_FIRESTORE_MEASUREMENT_ID,
  }
}
