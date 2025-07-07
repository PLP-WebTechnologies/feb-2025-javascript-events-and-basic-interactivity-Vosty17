// Button click event
const interactiveBtn = document.getElementById('interactiveBtn');
const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];
let colorIndex = 0;

interactiveBtn.addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % colors.length;
    this.style.backgroundColor = colors[colorIndex];
    this.textContent = `Color Changed to ${colors[colorIndex]}`;
    
    // Reset text after 1 second
    setTimeout(() => {
        this.textContent = 'Click Me to Change Color';
    }, 1000);
});

// Hover effect for gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Keypress detection
document.addEventListener('keydown', function(e) {
    const keypressDisplay = document.getElementById('keypressDisplay');
    keypressDisplay.textContent = `You pressed: ${e.key} (Code: ${e.code})`;
});

// Secret area (double click)
const secretArea = document.getElementById('secretArea');
document.addEventListener('dblclick', function() {
    secretArea.style.opacity = '1';
    
    // Hide after 3 seconds
    setTimeout(() => {
        secretArea.style.opacity = '0';
    }, 3000);
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and content
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form validation
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateName() {
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        nameInput.parentElement.classList.add('error');
        nameInput.parentElement.classList.remove('success');
        return false;
    } else {
        nameError.style.display = 'none';
        nameInput.parentElement.classList.remove('error');
        nameInput.parentElement.classList.add('success');
        return true;
    }
}

function validateEmail() {
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.parentElement.classList.add('error');
        emailInput.parentElement.classList.remove('success');
        return false;
    } else {
        emailError.style.display = 'none';
        emailInput.parentElement.classList.remove('error');
        emailInput.parentElement.classList.add('success');
        return true;
    }
}

function validatePassword() {
    const passwordError = document.getElementById('passwordError');
    
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        passwordInput.parentElement.classList.add('error');
        passwordInput.parentElement.classList.remove('success');
        return false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.parentElement.classList.remove('error');
        passwordInput.parentElement.classList.add('success');
        return true;
    }
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isNameValid && isEmailValid && isPasswordValid) {
        alert('Form submitted successfully! Thank you for subscribing.');
        form.reset();
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('success');
        });
    } else {
        alert('Please fix the errors in the form.');
    }
});
