import firebase from 'firebase/app';

export type FirebaseAuth = firebase.auth.Auth;

export type FirebaseUser = firebase.User;

export type FirebaseAuthError = firebase.auth.Error;

export type UseAuthStateReturn = [FirebaseUser, boolean, FirebaseAuthError];
