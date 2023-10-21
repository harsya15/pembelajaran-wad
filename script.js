document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".show-details");
    const detailsSection = document.getElementById("details");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            detailsSection.classList.toggle("hidden");
            if (detailsSection.classList.contains("hidden")) {
                button.textContent = "Lihat Biodata";
            } else {
                button.textContent = "HARSYA ARVIN NUGROHO, SI4506, 1202213340";
            }
        });
    });
});
