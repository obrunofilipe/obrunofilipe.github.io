const $ = (id) => document.getElementById(id);

$("hero-summary").textContent = siteData.summary;
$("about-text").textContent = siteData.about;
$("location").textContent = siteData.location;
$("languages").textContent = siteData.languages.join(" · ");

const emailHref = `mailto:${siteData.email}`;
$("email-link").textContent = siteData.email;
$("email-link").href = emailHref;
$("contact-email").textContent = siteData.email;
$("contact-email").href = emailHref;

$("phone-link").textContent = siteData.phone;
$("phone-link").href = `tel:${siteData.phone.replace(/\s/g, "")}`;

$("skills").innerHTML = siteData.skills.map((skill, i) => `
  <article class="skill-card">
    <span class="skill-number">${String(i + 1).padStart(2, "0")}</span>
    <h3>${skill}</h3>
  </article>
`).join("");

$("education-list").innerHTML = siteData.education.map(item => `
  <article class="timeline-item">
    <div class="timeline-meta">${item.period}</div>
    <div>
      <h3>${item.degree}</h3>
      <p class="institution">${item.institution}</p>
      ${item.description ? `<p>${item.description}</p>` : ""}
    </div>
  </article>
`).join("");

$("experience-list").innerHTML = siteData.experience.map(item => `
  <article class="timeline-item">
    <div class="timeline-meta">${item.period}</div>
    <div>
      <h3>${item.role}</h3>
      <p class="institution">${item.organization}</p>
      <p>${item.description}</p>
    </div>
  </article>
`).join("");

$("publication-list").innerHTML = siteData.publications.map(item => `
  <article class="publication">
    <div>
      <p class="publication-date">${item.date}</p>
      <h3>${item.title}</h3>
      <p>${item.authors}</p>
      <p class="institution">${item.venue}</p>
    </div>
    ${item.link ? `<a class="text-link" href="${item.link}" target="_blank" rel="noopener">View publication ↗</a>` : ""}
  </article>
`).join("");

$("year").textContent = new Date().getFullYear();
