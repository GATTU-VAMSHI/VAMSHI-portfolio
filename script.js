const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link'); // Select the correct links

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle the icon
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-lightbulb');
  } else {
    icon.classList.remove('fa-lightbulb');
    icon.classList.add('fa-moon');
  }
});

// Handle active class on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the clicked link
        link.classList.add('active');
    });
});


//skills section expand functionality
function toggleSection(sectionId, element) {
  const content = document.getElementById(sectionId);
  const isVisible = content.style.display === "block";

  // Hide all sections
  document.querySelectorAll(".skill-content").forEach((section) => {
    section.style.display = "none";
  });

  // Reset all icons
  document.querySelectorAll(".skill-header i").forEach((icon) => {
    icon.style.transform = "rotate(0deg)";
  });

  // Toggle visibility and update icon
  if (!isVisible) {
    content.style.display = "block";
    element.querySelector("i").style.transform = "rotate(180deg)";
  }
}

//project section to see next and previous projects
let currentIndex = 0;
const projects = document.querySelectorAll('.project');

function updateProjects(prevIndex, nextIndex) {
  // Close the current project
  projects[prevIndex].classList.remove('active');
  projects[prevIndex].classList.add('exit');

  // Wait for the exit animation to finish, then reset the previous project
  setTimeout(() => {
    projects[prevIndex].classList.remove('exit');
  }, 600); // Matches the CSS transition duration

  // Open the next project
  setTimeout(() => {
    projects[nextIndex].classList.add('active');
  }, 300); // Adds a slight delay for smoothness
}

function showPrevProject() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Loop back to the last project
  updateProjects(prevIndex, currentIndex);
}

function showNextProject() {
  const prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % projects.length; // Loop back to the first project
  updateProjects(prevIndex, currentIndex);
}

// Initialize the first project as active
projects[currentIndex].classList.add('active');
