  <section id="contact">
        <div class="container">
            <h1>Contact Us</h1>
            <p>If you have any questions or would like to discuss a project, feel free to reach out to us:</p>
            <div class="contact-info">
                <p><strong>Phone:</strong> +251-0911773636</p>
                <p><strong>Address:</Kality Kafden Building 6th Floor, Addis Ababa, Ethiopia </p>
            </div>
            <div class="form-container">
                <h2>Please send us a message</h2>
                <form id="contact-form">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Sole IT Solution. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Smooth Scroll
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Highlight active section in navbar
        document.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');

            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Contact Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Send Successfully!');
                this.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    </script>
