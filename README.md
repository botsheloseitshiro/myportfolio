# Botshelo Seitshiro - Professional Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases professional experience, projects, skills, and provides a contact form for potential employers or clients.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance and user experience

## Sections

1. **Hero Section**: Introduction and call-to-action buttons
2. **About**: Personal information and statistics
3. **Experience**: Professional work history with timeline
4. **Projects**: Featured projects with technologies used
5. **Skills**: Technical skills organized by categories
6. **Contact**: Contact information and contact form

## Customization Guide

### 1. Personal Information

Update the following in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">Hi, I'm Botshelo Seitshiro</h1>
<p class="hero-subtitle">Information Technology Professional</p>
<p class="hero-description">
    Your personal description here...
</p>
```

#### About Section
```html
<p>
    Your detailed about me text...
</p>
<div class="about-stats">
    <div class="stat">
        <h3>3+</h3>
        <p>Years Experience</p>
    </div>
    <!-- Update with your actual stats -->
</div>
```

### 2. Professional Experience

Replace the timeline items in the Experience section with your actual work history:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">2022 - Present</p>
        <ul>
            <li>Your responsibility/achievement</li>
            <li>Another responsibility/achievement</li>
        </ul>
    </div>
</div>
```

### 3. Projects

Update the project cards with your actual projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### 4. Skills

Update the skills section with your actual technical skills:

```html
<div class="skills-category">
    <h3>Programming Languages</h3>
    <div class="skills-grid">
        <div class="skill-item">
            <i class="fab fa-js-square"></i>
            <span>JavaScript</span>
        </div>
        <!-- Add more skills -->
    </div>
</div>
```

### 5. Contact Information

Update the contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+27 XX XXX XXXX</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your Location</span>
</div>
```

### 6. Social Links

Update the social media links:

```html
<div class="social-links">
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-twitter-url" class="social-link">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

## Styling Customization

### Colors

The main color scheme can be customized in `styles.css`. The primary color is defined as `#2563eb` (blue). You can change this throughout the file to match your brand colors.

### Fonts

The portfolio uses the Inter font family. You can change this by updating the Google Fonts link in the HTML head and the font-family property in CSS.

### Layout

The layout is responsive and uses CSS Grid and Flexbox. You can adjust spacing, padding, and margins in the CSS file to match your preferences.

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose the main branch
6. Your site will be available at `https://yourusername.github.io/repositoryname`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You can set up a custom domain later

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Deploy with one click

## Contact Form Setup

The contact form currently shows a success message. To make it functional, you have several options:

### Option 1: Netlify Forms
Add `netlify` attribute to the form:
```html
<form netlify>
```

### Option 2: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action with your Formspree endpoint

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Configure email templates
3. Update the JavaScript to use EmailJS API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use tools to minify your files for production
3. **Enable Gzip**: Configure your server to enable Gzip compression
4. **Use CDN**: Consider using a CDN for faster loading

## SEO Optimization

The portfolio includes basic SEO elements. For better optimization:

1. Add more meta tags
2. Include Open Graph tags for social media
3. Add structured data (JSON-LD)
4. Create a sitemap.xml
5. Submit to Google Search Console

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio, feel free to:

1. Check the code comments for guidance
2. Modify the CSS variables for easy customization
3. Use browser developer tools to experiment with changes

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Inter font family
- Modern CSS techniques and animations

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio. This includes your real experience, projects, skills, and contact details.




