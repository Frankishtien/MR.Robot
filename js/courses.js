

////////////////////nav////////////////////////////////
// //////////////////////////////////////////////////////this is for nabbar////////////////////////////////////////////
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// ////////////////////////////////////Close menu if clicked outside of the menu/////////////////////////////////////
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Check if the clicked area is outside the menu and the menu toggle button
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});

////////////////////nav/////////////////////////////////

































    // document.addEventListener('DOMContentLoaded', function() {
    //     const addToCartButtons = document.querySelectorAll('.add-to-cart');

    //     addToCartButtons.forEach(button => {
    //         button.addEventListener('click', function() {
    //             const courseCard = button.closest('.course-card');
    //             const courseId = courseCard.getAttribute('data-course-id');
    //             const courseTitle = courseCard.querySelector('h3').innerText;
    //             const courseImage = courseCard.querySelector('img').src;
    //             const coursePrice = courseCard.querySelector('.price').innerText;

    //             const course = {
    //                 id: courseId,
    //                 title: courseTitle,
    //                 image: courseImage,
    //                 price: coursePrice
    //             };

    //             // Retrieve existing courses from localStorage
    //             let myCourses = JSON.parse(localStorage.getItem('myCourses')) || [];

    //             // Check if the course is already added
    //             if (!myCourses.some(c => c.id === courseId)) {
    //                 myCourses.push(course);
    //                 localStorage.setItem('myCourses', JSON.stringify(myCourses));
    //                 alert('Course added to My Courses!');
    //             } else {
    //                 alert('Course already in My Courses!');
    //             }
    //         });
    //     });
    // });

/////////////////////



















// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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

// export { auth, db, onAuthStateChanged, collection, addDoc, getDocs };
   

//    // Import 'addDoc' from Firestore
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// // Update the Add to My-Courses functionality
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', (e) => {
//         const card = e.target.closest('.course-card');
//         const courseId = card.getAttribute('data-course-id');
//         const courseTitle = card.querySelector('h3').textContent;
//         const coursePrice = card.querySelector('.price').textContent;
//         const courseImage = card.querySelector('img').src;

//         // Get current user
//         onAuthStateChanged(auth, async (user) => {
//             if (user) {
//                 const userId = user.uid;

//                 // Save course to Firebase
//                 const courseData = {
//                     id: courseId,
//                     title: courseTitle,
//                     price: coursePrice,
//                     image: courseImage
//                 };

//                 console.log("Attempting to save:", courseData);

//                 try {
//                     // Use addDoc to create a new document with a unique ID
//                     await addDoc(
//                         collection(db, `users/${userId}/my-courses`),
//                         courseData
//                     );
//                     alert('Course added to My-Courses!');
//                 } catch (error) {
//                     console.error("Error adding course: ", error);
//                 }
//             } else {
//                 alert("Please log in to add courses.");
//             }
//         });
//     });
// });



