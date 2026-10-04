// ===============================
// APPOINTMENT POPUP
// ===============================

const modal = document.getElementById("appointmentModal");

function openAppointment() {
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeAppointment() {
    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


// Close popup when clicking outside

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeAppointment();
    }

});


// ===============================
// APPOINTMENT FORM
// ===============================

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const department =
        document.getElementById("department").value;

    const date =
        document.getElementById("date").value;


    // Check details

    if (
        name === "" ||
        phone === "" ||
        department === "" ||
        date === ""
    ) {

        alert("Please fill all the details.");

        return;
    }


    // Success message

    alert(
        "Appointment request received! 😊\n\n" +
        "Patient: " + name + "\n" +
        "Department: " + department + "\n" +
        "Date: " + date + "\n\n" +
        "Our hospital team will contact you soon."
    );


    // Clear form

    form.reset();

    // Close popup

    closeAppointment();

});


// ===============================
// ESC KEY CLOSE
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeAppointment();
    }

});