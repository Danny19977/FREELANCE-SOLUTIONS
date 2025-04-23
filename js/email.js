(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("send-button").addEventListener("click", function () {
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  emailjs.send("service_y5hzndu", "template_wfh9msf", {
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    user_phone: formData.get("user_phone"),
    message: formData.get("message"),
  })
  .then(function (response) {
    alert("Message sent successfully!");
  })
  .catch(function (error) {
    alert("Failed to send message. Please try again.");
  });
});
