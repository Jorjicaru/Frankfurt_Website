/* --- MENIU MOBIL (Hamburger) --- */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* --- VALIDARE FORMULAR CONTACT --- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {

        // Nume
        let name = document.getElementById("name").value;
        if (name === "") {
            alert("Te rog introdu numele!");
            e.preventDefault();
        }
        
        // Telefon
        let phone = document.getElementById("phone").value;
        if (phone === "") {
            alert("Te rog introdu numărul de telefon!");
            e.preventDefault();
        }

        // Email
        let email = document.getElementById("email").value;
        if (email === "") {
            alert("Te rog introdu adresa de email!");
            e.preventDefault();
        }

        // Mesaj
        let message = document.getElementById("message").value;
        if (message === "") {
            alert("Te rog scrie un mesaj!");
            e.preventDefault();
        }
    });
}

/* --- VALIDARE FORMULAR CAZARE --- */
const cazareForm = document.getElementById("cazareForm");
if (cazareForm) {
    const dateIn = document.getElementById("date_in");  
    const dateOut = document.getElementById("date_out");

    if (dateIn && dateOut) {
        dateIn.addEventListener("change", function() {
            dateOut.min = this.value;
            if (dateOut.value && dateOut.value < this.value) {
                dateOut.value = "";
            }
        });
    }

    cazareForm.addEventListener("submit", function(e) {
        let name = document.getElementById("name").value;
        if (name === "") {
            alert("Te rog introdu numele!");
            e.preventDefault();
        }
        let phone = document.getElementById("phone").value;
        if (phone === "") {
            alert("Te rog introdu numărul de telefon!");
            e.preventDefault();
        }
        let email = document.getElementById("email").value;
        if (email === "") {
            alert("Te rog introdu adresa de email!");
            e.preventDefault();
        }
        let data_in = document.getElementById("date_in").value;
        if (data_in === "") {
            alert("Te rog selectează data de check-in!");
            e.preventDefault();
        }
        let data_out = document.getElementById("date_out").value;
        if (data_out === "") {
            alert("Te rog selectează data de check-out!");
            e.preventDefault();
        }
    });
}