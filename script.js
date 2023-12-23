function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const department = document.getElementById("department").value;
    const subscribe = document.getElementById("subscribe").checked;

    const alertMessage = `
        Thank you, ${name}, for your submission!\n
        We'll get back to you at ${email} regarding your inquiry on "${subject}".\n
        Phone: ${phone}\n
        Your message: ${message}\n
        Department: ${department}\n
        ${subscribe ? 'You are subscribed to our newsletter.' : 'You are not subscribed to our newsletter.'}
    `;

    alert(alertMessage);
}

