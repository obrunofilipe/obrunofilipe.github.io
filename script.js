const $ = (id) => document.getElementById(id);

$("about-text").textContent = siteData.about;
$("languages").textContent = siteData.languages.join(", ");

const emailHref = `mailto:${siteData.email}`;
for (const id of ["email-side", "email-main"]) {
  $(id).textContent = siteData.email;
  $(id).href = emailHref;
}

//$("skills").innerHTML = siteData.skills.map(skill => `<li>${skill}</li>`).join("");

$("research_interests").innerHTML = siteData.research_interests.map(research_interests => `<li>${research_interests}</li>`).join("");

$("education-list").innerHTML = siteData.education.map(item => `
  <div class="item">
    <div class="item-head">
      <h3>${item.degree}</h3>
      <span class="period">${item.period}</span>
    </div>
    <p class="institution">${item.institution}</p>
    ${item.description ? `<p class="description">${item.description}</p>` : ""}
  </div>
`).join("");

$("experience-list").innerHTML = siteData.experience.map(item => `
  <div class="item">
    <div class="item-head">
      <h3>${item.role}</h3>
      <span class="period">${item.period}</span>
    </div>
    <p class="institution">${item.organization}</p>
    <p class="description">${item.description}</p>
  </div>
`).join("");

$("publication-list").innerHTML = siteData.publications.map(item => `
  <div class="item publication">
    <h3>${item.title}${item.link ? ` <a href="${item.link}" target="_blank" rel="noopener">↗</a>` : ""}</h3>
    <p>${item.authors}</p>
    <p>${item.venue} · ${item.date}</p>
  </div>
`).join("");

$("year").textContent = new Date().getFullYear();
