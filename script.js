// services
// small-title
$(document).ready(function () {
  let title = document.createElement(`div`);
  let titleSmall = document.createElement(`div`);
  title.classList.add(`services`);
  titleSmall.classList.add(`bookkeep`);
  title.textContent = `Why is O2A the best solution for your company?`;
  titleSmall.textContent = `We are a company that encompasses all the benefits of outsourced accounting for CPA firms.  `;
  let last = document.getElementsByClassName(`last-section`)[0];
  last.appendChild(title);
  last.appendChild(titleSmall);
  let titleArray = [
    `Focus on quality`,
    `Affordable prices`,
    `Individual approach`,
    `Guaranteed data protection, privacy and confidentiality`,
    `IT-oriented`,
    `Established communication and business culture`,
    `Access to experts`,
  ];
  let contentArray = [
    `We provide qualified accountants, bookkeepers and managers who are experienced in their field.
`,
    `As we work with a global market, we know how important communication can be. That’s why our employees know all the subtleties of effective communication and are proficient in English.

​

`,
    `Only with the use of high technologies is offshore outsourcing possible. We implement main applications, but we are still open to coming up with new creative and effective ways to do things more productively. What you need to do is involve us in your process.`,
    `We guarantee the safety of your data. There will be no unauthorized access to the information provided.
`,
    `We do our best to understand the needs and requirements of each accounting firm and approach their problems individually.
`,
    `Armenian market is famous for its competitive cost of labor and low service prices. As our company resides in Armenia, we are not an exception, either. We offer outsourced accounting services for the global market at affordable prices.

​

`,
    `There are many university programs specialized in finance and accounting in Armenia. Since our students get quality education, they later become professionals at our firm who provide quality work to customers.
`,
  ];
  for(let i = 0; i< 7; i++){
    let flex = document.createElement(`div`);
    flex.classList.add(`news-divs`);
    let paragraphs = document.createElement(`p`);
    let titlePars = document.createElement(`p`);
    titlePars.classList.add(`title-p`)
    paragraphs.classList.add(`in-style`);
    flex.appendChild(titlePars);
    flex.appendChild(paragraphs);
    titlePars.textContent = titleArray[i]
    paragraphs.textContent = contentArray[i];
    let secondDiv = document.getElementById(`last-div`);
    secondDiv.appendChild(flex)
  }

});
