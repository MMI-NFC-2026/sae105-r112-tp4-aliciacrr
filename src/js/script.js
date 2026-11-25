// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

if (accordeon) {
  const detailsList = accordeon.querySelectorAll("details");

  detailsList.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        detailsList.forEach((autreDetails) => {
          if (autreDetails !== details) {
            autreDetails.open = false;
          }
        });
      }
    });
  });
}
