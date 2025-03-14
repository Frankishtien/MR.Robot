// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDZPYgt6-X23p-gValJxK4IA-fIr0BIwoY",
//     authDomain: "courses-platform-755d5.firebaseapp.com",
//     projectId: "courses-platform-755d5",
//     storageBucket: "courses-platform-755d5.appspot.com",
//     messagingSenderId: "1092760035864",
//     appId: "1:1092760035864:web:b81d64a3ce01f2e5bed96d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Listen for authentication state changes
// onAuthStateChanged(auth, async (user) => {
//     if (user) {
//         const userId = user.uid;
//         const coursesContainer = document.querySelector('#courses-container');

//         // Get courses from Firestore
//         const myCoursesRef = collection(db, `users/${userId}/my-courses`);
//         const coursesSnapshot = await getDocs(myCoursesRef);

//         coursesContainer.innerHTML = ''; // Clear existing courses

//         coursesSnapshot.forEach((doc) => {
//             const course = doc.data();
//             const courseCard = `
//                 <div class="course-card">
//                     <img src="${course.image}" alt="${course.title}">
//                     <div class="course-info">
//                         <h3>${course.title}</h3>
//                         <p class="price">${course.price}</p>
//                         <div class="buttons">
//                             <button class="button view-course">View Course</button>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             coursesContainer.innerHTML += courseCard;
//         });

//         // Show a message if no courses are found
//         if (coursesSnapshot.empty) {
//             coursesContainer.innerHTML = '<p>No courses added yet.</p>';
//         }
//     } else {
//         coursesContainer.innerHTML = '<p>Please log in to see your courses.</p>';
//     }
// });


