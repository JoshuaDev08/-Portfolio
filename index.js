document.addEventListener('DOMContentLoaded', function () {
    // Select the hero container
    const heroContainer = document.querySelector('.container-hero');
    
    // Add the class to trigger animations
    heroContainer.classList.add('show-content');


    //aboutme animation
    const aboutME = document.querySelector("#aboutMe");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutME.classList.add("animate")
        }
      })
    })
  
    observer.observe(aboutME)
  
  });

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('#navbar')

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })
})


  document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0, curY = 0, tgX = 0, tgY = 0;

    function move() {
        curX += (tgX - curX) * 0.05;
        curY += (tgY - curY) * 0.05;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });
    
    move();
});
   //work-process animation

document.addEventListener('DOMContentLoaded', function(){
 
  const workProcess = document.querySelector("#Work-process");
  const options = {

    threshold: 0.2, // Trigger when 20% of the element is in view
  };
  const observant = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        workProcess.classList.add("animation")
      }
    })
  }, options)

  observant.observe(workProcess)
})
  
      //projects animation
document.addEventListener('DOMContentLoaded', function(){
  const projects = document.querySelector("#projects");
  const options = {
    threshold: 0.2, // Trigger when 20% of the element is in view
  };
    const observing = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projects.classList.add("animated")
        }
      })
    }, options)
    observing.observe(projects)
})


//skills animation
document.addEventListener('DOMContentLoaded', function(){
  const skills = document.querySelector("#skills");
  const options = {
    threshold: 0.2, // Trigger when 20% of the element is in view
  };
    const observing = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skills.classList.add("animated")
        }
      })
    }, options)
    observing.observe(skills)
})


document.addEventListener('DOMContentLoaded', function(){
  const service = document.querySelector("#Services");
  const options = {
    threshold: 0.2, // Trigger when 20% of the element is in view
  };
    const observing = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          service.classList.add("animated")
        }
      })
    }, options)
    observing.observe(service)
})

document.addEventListener('DOMContentLoaded', function(){
  const contact = document.querySelector("#contact-me");
  const options = {
    threshold: 0.2, // Trigger when 20% of the element is in view
  };
    const observing = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contact.classList.add("animated")
        }
      })
    }, options)
    observing.observe(contact)
})





document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const skillRows = document.querySelectorAll('.skill-row');
  
    const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the element is visible
    };
  
    const animatePercent = (element, target) => {
      let start = 0;
      const duration = 1000; // Duration of the animation in milliseconds
      const incrementTime = Math.floor(duration / target); // Time between increments
  
      const interval = setInterval(() => {
        if (start < target) {
          start++;
          element.textContent = `${start}%`;
        } else {
          clearInterval(interval);
        }
      }, incrementTime);
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the progress bars and percentage numbers when the skills section is in view
          skillRows.forEach(skillRow => {
            const progress = skillRow.querySelector('.progress');
            const percent = progress.getAttribute('data-percent').replace('%', ''); // Get percentage as a number
            
            // Animate the progress bar width
            progress.style.width = `${percent}%`; // Set width to the specified percentage
  
            // Animate the percentage number
            const percentDisplay = skillRow.querySelector('.percent-display'); // Use skill-title to display percentage
            animatePercent(percentDisplay, parseInt(percent)); // Start animation
            
            progress.classList.add('show-percentage'); // Show percentage text
          });
          observer.unobserve(skillsSection); // Stop observing after animation
        }
      });
    }, options);
  
    observer.observe(skillsSection); // Start observing the skills section
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'scroll-button'
    const scrollButtons = document.querySelectorAll('.com-container button');
  
    // Add click event listener to each button
    scrollButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the target section from the button's data-target attribute
        const targetSection = document.querySelector(this.getAttribute('data-target'));
        
        // Scroll to the target section
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the class 'scroll-button'
    const scrollButtons = document.querySelectorAll('.button-proj');
  
    // Add click event listener to each button
    scrollButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the target section from the button's data-target attribute
        const targetSection = document.querySelector(this.getAttribute('data-target'));
        
        // Scroll to the target section
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const rightNavbar = document.querySelector('.right-navbar');
    const navbarLinks = document.querySelectorAll('.navbar-list a');
  
    hamburgerMenu.addEventListener('click', function () {
      this.classList.toggle('open');
      rightNavbar.classList.toggle('open');
    });
  
    // Close the hamburger menu when a navbar link is clicked
    navbarLinks.forEach(link => {
      link.addEventListener('click', function () {
        hamburgerMenu.classList.remove('open');
        rightNavbar.classList.remove('open');
      });
    });
  });
  
  // Select all sections and navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-list a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.navbar-list a[href="#${id}"]`);

    if (entry.isIntersecting) {
      // Remove 'active' from all links
      navLinks.forEach(link => link.classList.remove("active"));
      // Add 'active' class to the corresponding link
      link.classList.add("active");
    }
  });
}, {
  threshold: 0.6 // Trigger when 60% of the section is in view
});

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

  