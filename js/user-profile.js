import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
    getAuth, 
    updateProfile 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    onValue 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZPYgt6-X23p-gValJxK4IA-fIr0BIwoY",
    authDomain: "courses-platform-755d5.firebaseapp.com",
    databaseURL: "https://courses-platform-755d5-default-rtdb.firebaseio.com",
    projectId: "courses-platform-755d5",
    storageBucket: "courses-platform-755d5.appspot.com",
    messagingSenderId: "1092760035864",
    appId: "1:1092760035864:web:b81d64a3ce01f2e5bed96d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// DOM Elements
const displayNameInput = document.getElementById('display-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const bioInput = document.getElementById('bio');
const saveChangesButton = document.getElementById('save-changes');

// Load User Data
auth.onAuthStateChanged((user) => {
    if (user) {
        // Display current user info from Firebase Authentication
        displayNameInput.value = user.displayName || "";
        emailInput.value = user.email;

        // Make the email field read-only
        emailInput.setAttribute('readonly', true);

        // Load additional user info from Realtime Database
        const userRef = ref(database, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                displayNameInput.value = userData.displayName || "";
                phoneInput.value = userData.phone || "";
                addressInput.value = userData.address || "";
                bioInput.value = userData.bio || "";
            }
        });
    } else {
        // Redirect to login page if user is not logged in
        window.location.href = "../html/sign-in.html";
    }
});

// Save Changes
saveChangesButton.addEventListener('click', () => {
    const user = auth.currentUser;
    const newDisplayName = displayNameInput.value.trim();
    const newPhone = phoneInput.value.trim();
    const newAddress = addressInput.value.trim();
    const newBio = bioInput.value.trim();

    if (newDisplayName) {
        // Update profile in Firebase Authentication
        updateProfile(user, { displayName: newDisplayName })
            .then(() => {
                // Save user info to Realtime Database
                const userRef = ref(database, `users/${user.uid}`);
                const userData = {
                    displayName: newDisplayName,
                    email: user.email, // Email cannot be changed
                    phone: newPhone,
                    address: newAddress,
                    bio: newBio
                };

                set(userRef, userData)
                    .then(() => {
                        alert("Profile updated successfully!");
                    })
                    .catch((error) => {
                        console.error("Error saving to database:", error);
                        alert("Failed to save profile.");
                    });
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                alert("Failed to update profile.");
            });
    } else {
        alert("Please enter a display name.");
    }
});