document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        });
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Experience timeline interaction
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const detailsBtn = item.querySelector('.details-btn');

        detailsBtn.addEventListener('click', () => {
            showDetails(detailsBtn.dataset.details);
        });
    });

    // Modal functionality
    const modal = document.getElementById('details-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function showDetails(detailsType) {
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        // Set modal content based on details type
        switch(detailsType) {


            case 'senior_executive_vocm':
                modalTitle.textContent = 'Senior Executive, Voice of Customer Management';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>Developing and implementing strategies to capture and analyze customer feedback, creating and maintaining dashboards to track customer satisfaction metrics, collaborating with cross-functional teams to implement customer-centric improvements, and presenting insights and recommendations to senior management.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <li>Designed and implemented data-driven dashboards to monitor and improve customer satisfaction metrics.</li>
                        <li>Collaborated with cross-functional teams to optimize CX processes and policies.</li>
                        <li>Reduced query resolution time by 15% through streamlined workflows.</li>
                        <li>Presented quarterly reviews to leadership, highlighting trends and proposing actionable solutions.</li>
                    </ul>
                `;
                break;



            case 'senior_executive_tqm':
                modalTitle.textContent = 'Senior Executive, Training and Quality Management';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>designing and executing strategic training initiatives to align employee capabilities with organizational goals, creating interactive learning content, evaluating training effectiveness through data-driven insights, and partnering with teams to enhance workforce performance and engagement.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <li>Conducted strategic training sessions to onboard and upskill employees.</li>
                        <li>Developed engaging, interactive learning materials to improve employee retention and performance.</li>
                        <li>Partnered with other teams to align training initiatives with evolving organizational goals.</li>
                    </ul>
                `;
                break;

                
            case 'executive_tqm':
                modalTitle.textContent = 'Executive, Training and Quality Management';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>Leading the development and execution of learning strategies aligned with business objectives, manage and mentor a team of learning and development professionals, collaborate with senior leadership to identify and address organizational development needs, and oversee the budget and resource allocation for learning initiatives.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <li>Led organization-wide training programs, training 228 employees in 86 sessions over 315 hours.</li>
                        <li>Spearheaded the "Synergy Project," streamlining SOPs and unifying CX operations.</li>
                        <li>Maintained a training satisfaction score of 90%+ throughout the year.</li>
                    </ul>
                `;
                break;



            case 'junior_executive_tqm':
                modalTitle.textContent = 'Junior Executive, Training and Quality Management';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>Conducting training sessions to improve agent performance, creating and maintaining dashboards for quality assurance metrics, facilitating onboarding for internal role transfers, and supporting process improvements to enhance service quality.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <liIntroduced advanced, interactive training modules to improve agent performance.</li>
                        <li>Managed onboarding for internal transfers across roles and business verticals.</li>
                        <li>Developed and maintained data-friendly QA dashboards to enhance reporting accuracy.</li>
                    </ul>
                `;
                break;



            case 'cs_pathao':
                modalTitle.textContent = 'Customer Service Officer';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>Providing multichannel support to resolve customer queries, managing order logistics across business verticals, maintaining knowledge bases and SOPs for the CX team, and ensuring high standards of customer satisfaction through effective communication.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <li>Provided multichannel support for users via live chat, reports, emails, and calls.</li>
                        <li>Managed order processing and logistics across Pathao Rides, Food, Courier, and Shop verticals.</li>
                        <li>Developed internal knowledge bases and SOPs to streamline CX workflows.</li>
                    </ul>
                `;
                break;


                case 'cs_genex':
                modalTitle.textContent = 'Customer Service Officer';
                modalBody.innerHTML = `
                    <h3>Key Responsibilities</h3>
                    <p>delivering live chat support for foodpanda Bangladesh, efficiently resolving customer complaints, managing task assignments, and ensuring high service quality through professional communication and problem-solving skills.</p>
                    <h3>Accomplishments</h3>
                    <ul>
                        <li>Delivered high-quality live chat support for foodpanda Bangladesh, ensuring swift resolution of customer queries.</li>
                        <li>Managed task assignments and successfully resolved customer complaints, maintaining high service standards.</li>
                        <li>Played a key role in improving customer satisfaction through efficient issue resolution and professional communication.</li>
                    </ul>
                `;
                break;




            default:
                modalTitle.textContent = 'Job Details';
                modalBody.innerHTML = '<p>Details coming soon.</p>';
        }

        modal.style.display = "block";
    }

    // Typewriter effect for hero subtitle
    const subtitle = document.querySelector('.hero h2');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
