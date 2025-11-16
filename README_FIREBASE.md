# Firebase setup (what you need to do locally)

This project includes Firebase Authentication and Firestore wiring. I added the initialization file and helper utilities, but you still need to create a Firebase project and supply the credentials locally.

Steps:

1. Create a Firebase project at https://console.firebase.google.com/
2. In the console enable Authentication → Sign-in method → Email/Password.
3. Create a Firestore database (start in test mode for development).
4. In Project Settings → SDK setup, copy the config values.
5. Copy `.env.example` to `.env` at the project root and paste your values:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

6. Run the app locally:

```powershell
npm install
npm run dev
```

7. When you want to build for Android and use Capacitor:

```powershell
npm run build
npx cap copy android
cd android
.\gradlew assembleDebug
```

Files I added:
- `src/lib/firebase.ts` — Firebase initialization (reads VITE_ env vars)
- `src/contexts/AuthContext.tsx` — auth + role handling (signup/login/logout)
- `src/lib/firestoreService.ts` — helpers: create/get user profile, set role
- `src/components/Login.tsx` — simple login/signup UI
- `src/components/RequireAuth.tsx` — route guards for auth/admin
- `.env.example` — template for Firebase config
- `FIRESTORE.rules` — example security rules
- `README_FIREBASE.md` — this file

Security note: The app creates user docs with `role: 'user'` on signup. Do NOT allow client-side role assignment to create admin accounts. Create admin accounts manually in the Firebase Console or via an Admin SDK script.
