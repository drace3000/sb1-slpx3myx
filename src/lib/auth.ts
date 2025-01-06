import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut as firebaseSignOut,
  UserCredential
} from 'firebase/auth';
import { auth } from './firebase';

// Guest account
const GUEST_EMAIL = 'guest@demo.com';
const GUEST_PASSWORD = 'guest123';

export async function signInAsGuest() {
  try {
    const result = await signInWithEmailAndPassword(auth, GUEST_EMAIL, GUEST_PASSWORD);
    return { user: result.user, error: null };
  } catch (error: any) {
    console.error('Auth error:', error);
    return { user: null, error: getAuthErrorMessage(error.code) };
  }
}

export async function signUp(email: string, password: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(result.user);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: getAuthErrorMessage(error.code) };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: getAuthErrorMessage(error.code) };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: 'Unable to sign out. Please try again.' };
  }
}

function getAuthErrorMessage(code: string): string {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/invalid-credential':
      return 'Invalid email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.';
    default:
      return 'An error occurred. Please try again.';
  }
}