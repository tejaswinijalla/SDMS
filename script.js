document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a[data-target]');
    const sections = document.querySelectorAll('main .content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the targeted section
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Optionally, show home section by default
    document.getElementById('home').classList.add('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a[data-target]');
    const sections = document.querySelectorAll('main .content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the targeted section
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Optionally, show home section by default
    document.getElementById('home').classList.add('active');
    const ctx = document.getElementById('pie-chart').getContext('2d');
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Students', 'Staff'],
            datasets: [{
                data: [800, 45], // Example data, replace with actual data
                backgroundColor: ['#84b7bc', '#639d76'],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a[data-target]');
    const sections = document.querySelectorAll('main .content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the targeted section
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Optionally, show home section by default
    document.getElementById('home').classList.add('active');
});

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the targeted section
        document.getElementById(targetId).classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('#sidebar a');
    const sections = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Load backlog information if 'backlog' section is opened
                if (targetId === 'backlog') {
                    loadBacklogData();
                }
            }
        });
    });

    // Function to simulate loading backlog data
    function loadBacklogData() {
        const backlogInfo = document.getElementById('backlog-info');
        backlogInfo.innerHTML = '<p>Student John Doe has 2 backlogs in Math and Science.</p>';
        // Here you would typically fetch this data from an API or database
    }
});
const coursesData = {
    programming: {
        title: "Introduction to Programming",
        videoSrc: "https://www.youtube.com/watch?v=NArVyt8t-z4",
        quiz: [
            { question: "What is a variable?", correct: "A container for storing data", options: ["A container for storing data", "A type of loop", "A function"] },
            { question: "What is a function?", correct: "A block of code that performs a task", options: ["A way to store data", "A block of code that performs a task", "A type of variable"] }
        ]
    },
    "web-development": {
        title: "Web Development",
        videoSrc: "videos/web-development.mp4",
        quiz: [
            { question: "What does HTML stand for?", correct: "HyperText Markup Language", options: ["HyperText Markup Language", "HyperText Machine Language", "HighText Markup Language"] },
            { question: "What does CSS stand for?", correct: "Cascading Style Sheets", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"] }
        ]
    },
    "data-structures": {
        title: "Data Structures",
        videoSrc: "videos/data-structures.mp4",
        quiz: [
            { question: "What is an array?", correct: "A collection of elements", options: ["A collection of elements", "A single element", "A type of variable"] },
            { question: "What is a stack?", correct: "A collection of elements with LIFO order", options: ["A collection of elements", "A collection of elements with LIFO order", "A type of queue"] }
        ]
    }
};

document.getElementById("load-course").addEventListener("click", function() {
    const courseSelect = document.getElementById("courses");
    const selectedCourse = courseSelect.value;

    if (selectedCourse) {
        const course = coursesData[selectedCourse];
        document.getElementById("course-title").textContent = course.title;
        document.getElementById("course-video").src = course.videoSrc;
        document.getElementById("course-video").load();

        // Load quiz
        loadQuiz(course.quiz);

        // Show video container and quiz section
        document.getElementById("video-container").style.display = "block";
        document.getElementById("quiz-section").style.display = "block";
    } else {
        alert("Please select a course.");
    }
});

function loadQuiz(quizData) {
    const quizForm = document.getElementById("quiz-form");
    quizForm.innerHTML = ''; // Clear previous quiz
    quizData.forEach((item, index) => {
        const questionLabel = document.createElement("label");
        questionLabel.textContent = item.question;
        quizForm.appendChild(questionLabel);
        item.options.forEach(option => {
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q${index}`;
            radio.value = option;

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            quizForm.appendChild(radio);
            quizForm.appendChild(optionLabel);
            quizForm.appendChild(document.createElement("br"));
        });
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Quiz";
    submitButton.type = "submit";
    quizForm.appendChild(submitButton);

    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();
        evaluateQuiz(quizData);
    });
}

function evaluateQuiz(quizData) {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.correct) {
            score++;
        }
    });

    const result = document.getElementById("quiz-result");
    result.textContent = `You scored ${score} out of ${quizData.length}`;
}
let map;
let busMarker;

// Initialize the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: YOUR_DEFAULT_LATITUDE, lng: YOUR_DEFAULT_LONGITUDE }, // Set default center
    });

    // Marker for the bus
    busMarker = new google.maps.Marker({
        position: { lat: YOUR_DEFAULT_LATITUDE, lng: YOUR_DEFAULT_LONGITUDE },
        map: map,
        title: "Bus Location",
    });
}

// Show the map and track the bus
document.getElementById("bus-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Hide the input form and show the map section
    document.getElementById("bus-input").style.display = "none";
    document.getElementById("bus-tracking").style.display = "block";

    // Initialize the map
    initMap();

    // Simulate tracking the bus
    trackBus();
});

// Simulate tracking the bus
function trackBus() {
    // Random bus location for demonstration purposes
    const busLocation = {
        lat: Math.random() * (YOUR_MAX_LATITUDE - YOUR_MIN_LATITUDE) + YOUR_MIN_LATITUDE,
        lng: Math.random() * (YOUR_MAX_LONGITUDE - YOUR_MIN_LONGITUDE) + YOUR_MIN_LONGITUDE,
    };

    busMarker.setPosition(busLocation);
    map.setCenter(busLocation);
}



document.getElementById('leave-application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const role = document.getElementById('role-select').value;
    const leaveType = document.getElementById('leave-type-select').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const reason = document.getElementById('reason').value;

    const leaveApplication = {
        name,
        role,
        leaveType,
        startDate,
        endDate,
        reason
    };

    // Here you can send the leaveApplication object to your server using fetch or AJAX
    console.log(leaveApplication);

    // Clear form fields after submission (optional)
    this.reset();
});





