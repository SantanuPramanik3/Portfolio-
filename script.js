document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbarcollapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new
bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Run once on page load
    
    // Performance optimizations
    document.addEventListener('touchstart', function() {}, { passive:
true });
    
    // Request animation frame for smooth animations
    function animate() {
        requestAnimationFrame(animate);
        // Any continuous animations would go here
    }
    animate();
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize home section animations
    initHomeSection();
    
    // Fix for mobile tap delays
    setupFastClick();
});
function initHomeSection() {
    // Check if prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefersreduced-motion: reduce)').matches;
    
    // Initialize floating elements if motion is allowed
    if (!prefersReducedMotion) {
        initFloatingElements();
    }
    
    // Setup social icon interactions
    setupSocialIcons();
    
    // Setup button hover effects
    setupButtonHovers();
}
function initFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    
    elements.forEach(el => {
        // Ensure elements are visible
        el.style.opacity = '0.15';
        
        // Add will-change for performance
        el.style.willChange = 'transform';
    });
}
function setupSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        // Add touch support
        icon.addEventListener('touchstart', function() {
            this.classList.add('active');
        }, { passive: true });
        
        icon.addEventListener('touchend', function() {
            this.classList.remove('active');
        }, { passive: true });
        
        // Keyboard navigation support
        icon.addEventListener('focus', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 4px 8px rgba(138, 43, 226, 0.15)';
        });
        
        icon.addEventListener('blur', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}
function setupButtonHovers() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Touch feedback
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(0)';
        }, { passive: true });
    });
}
function setupFastClick() {
    // Remove 300ms tap delay on touch devices
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }
    
    // Alternative if FastClick isn't available
    document.addEventListener('touchstart', function() {}, { passive:
true });
}
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize about section animations
    initAboutSection();
});
function initAboutSection() {
    // Check if prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefersreduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Animate background dots
        const bgDots = document.querySelectorAll('.bg-dot');
        
        bgDots.forEach((dot, index) => {
            // Add will-change for performance
            dot.style.willChange = 'transform';
            
            // Randomize animation duration slightly
            const duration = 15 + Math.random() * 10;
            dot.style.animationDuration = `${duration}s`;
            
            // Randomize delay
            dot.style.animationDelay = `${index * 2}s`;
        });
        
        // Add hover effect to info cards
        const infoCards = document.querySelectorAll('.info-card');
        
        infoCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
}
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize skills section animations
    initSkillsSection();
});
function initSkillsSection() {
    // Animate progress bars when section is in view
    const skillsSection = document.querySelector('.skills-section');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Add hover effect to skill categories
    const skillCategories = document.querySelectorAll('.skillcategory');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
        
        // Add glow effect
        const glow = document.createElement('div');
        glow.classList.add('progress-glow');
        bar.appendChild(glow);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Video Autoplay with Error Handling
    const video = document.querySelector('.video-container video');
    
    const handleVideoPlay = () => {
        if (video) {
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Autoplay was prevented - show fallback
                    video.controls = true;
                    console.log('Autoplay prevented, showing controls:',
error);
                });
            }
        }
    };
    // Try autoplay when page loads
    handleVideoPlay();
    
    // Fallback: Play when user interacts with page
    document.addEventListener('click', function firstInteraction() {
        handleVideoPlay();
        document.removeEventListener('click', firstInteraction);
    }, { once: true });
    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects with animation
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category')
=== filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    // Intersection Observer for Smooth Animations
    const prefersReducedMotion = window.matchMedia('(prefersreduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3,1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(card);
        });
    }
    // Thumbnail Hover Effects
    const thumbnailContainers =
document.querySelectorAll('.thumbnail-container');
    
    thumbnailContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            const img = container.querySelector('.thumbnail-img');
            const overlay = container.querySelector('.thumbnailoverlay');
            
            img.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
        });
        
        container.addEventListener('mouseleave', () => {
            const img = container.querySelector('.thumbnail-img');
            const overlay = container.querySelector('.thumbnailoverlay');
            
            img.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });
        // Touch support
        container.addEventListener('touchstart', () => {
            const img = container.querySelector('.thumbnail-img');
            const overlay = container.querySelector('.thumbnailoverlay');
            
            img.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
            
            // Remove the effect after 1 second
            setTimeout(() => {
                img.style.transform = 'scale(1)';
                overlay.style.opacity = '0';
            }, 1000);
        }, { passive: true });
    });
    // Handle browser tab visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && video) {
            handleVideoPlay();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Order button animations
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 10px 20px rgba(138, 43, 226,0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
        
        // Touch support
        button.addEventListener('touchstart', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 10px 20px rgba(138, 43, 226,0.3)';
            setTimeout(() => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'none';
            }, 300);
        }, { passive: true });
    });
    // Card hover animations
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3), inset 00 0 1px rgba(138, 43, 226, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
    // Intersection Observer for animations
    const prefersReducedMotion = window.matchMedia('(prefersreduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3,1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(card);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to yousoon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    // Button hover effect
    const submitBtn = document.querySelector('.submit-btn');
    
    if (submitBtn) {
        submitBtn.addEventListener('mouseenter', () => {
            submitBtn.style.transform = 'translateY(-3px)';
            submitBtn.style.boxShadow = '0 10px 20px rgba(138, 43, 226,0.3)';
        });
        
        submitBtn.addEventListener('mouseleave', () => {
            submitBtn.style.transform = 'translateY(0)';
            submitBtn.style.boxShadow = 'none';
        });
        
        // Touch support
        submitBtn.addEventListener('touchstart', () => {
            submitBtn.style.transform = 'translateY(-3px)';
            submitBtn.style.boxShadow = '0 10px 20px rgba(138, 43, 226,0.3)';
            setTimeout(() => {
                submitBtn.style.transform = 'translateY(0)';
                submitBtn.style.boxShadow = 'none';
            }, 300);
        }, { passive: true });
    }
    // Info card hover effects
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3), inset 00 0 1px rgba(138, 43, 226, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
    // Intersection Observer for animations
    const prefersReducedMotion = window.matchMedia('(prefersreduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.contact-form, .infocard').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1,0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(element);
        });
    }
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // ======================
  // Scroll to Top Button
  // ======================
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
      scrollTopBtn.style.transform = 'translateY(0)';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
      scrollTopBtn.style.transform = 'translateY(20px)';
    }
  });
  // Smooth scroll to top
  scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  // ======================
  // Link Hover Effects
  // ======================
  const footerLinks = document.querySelectorAll('.footer-links a');
  
  footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#ffffff';
      this.style.textShadow = '0 0 8px rgba(138, 43, 226, 0.6)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.color = 'rgba(255, 255, 255, 0.8)';
      this.style.textShadow = 'none';
    });
  });
  // ======================
  // Social Media Icons
  // ======================
  const socialIcons = document.querySelectorAll('.social-icons a');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.1)';
      this.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.4)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });
  // ======================
  // Particle Animation
  // ======================
  const particles = document.querySelectorAll('.footer-bg-particle');
  
  function animateParticles() {
    particles.forEach(particle => {
      const speed = parseFloat(particle.style.animationDuration) ||
15;
      const currentTransform =
getComputedStyle(particle).transform;
      
      // Only update if not reduced motion
      if (!window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
        particle.style.transform = currentTransform === 'none' ? 
          'translate(5px, 5px)' : 
          currentTransform.replace(/\)$/, '0.5)');
      }
    });
    
    requestAnimationFrame(animateParticles);
  }
  
  // Start animation if particles exist
  if (particles.length > 0) {
    animateParticles();
  }
  // ======================
  // Responsive Adjustments
  // ======================
  function handleResponsive() {
    const footerCols = document.querySelectorAll('.footer-col');
    
    if (window.innerWidth < 768) {
      // Mobile adjustments
      footerCols.forEach(col => {
        col.style.textAlign = 'center';
      });
    } else {
      // Desktop reset
      footerCols.forEach(col => {
        col.style.textAlign = '';
      });
    }
  }
  
  // Run on load and resize
  window.addEventListener('load', handleResponsive);
  window.addEventListener('resize', handleResponsive);
});

// ======================
// Performance Optimizations
// ======================
// Use requestAnimationFrame for smooth animations
(function() {
  const throttle = function(type, name, obj = window) {
    let running = false;
    const func = function() {
      if (running) return;
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  // Throttle scroll and resize events
  throttle('scroll', 'optimizedScroll');
  throttle('resize', 'optimizedResize');
})();