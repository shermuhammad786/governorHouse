function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    const resumeHTML = `
        <h1>${fullName}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Education</h2>
        <p>${education}</p>
    `;

    const resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = resumeHTML;

    document.getElementById("downloadButton").style.display = "block";
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(document.getElementById("resumeOutput"), {
        callback: function (pdf) {
            pdf.save("resume.pdf");
        },
        x: 10,
        y: 10
    });
}
