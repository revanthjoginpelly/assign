function handleSUbmit(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  const fname = form.elements["fname"].value;
  const lname = form.elements["lname"].value;
  const dob = form.elements["dob"].value;
  const country = form.elements["country"].value;
  const maleCheckbox = document.getElementById("male");
  const femaleCheckbox = document.getElementById("female");
  const otherCheckbox = document.getElementById("other");
  let selectedGender = "";

  if (maleCheckbox.checked) {
    selectedGender = "Male";
  } else if (femaleCheckbox.checked) {
    selectedGender = "Female";
  } else if (otherCheckbox.checked) {
    selectedGender = "Other";
  }
  const profession = form.elements["profession"].value;
  const email = form.elements["email"].value;
  const number = form.elements["phone"].value;

  const formDetails = {
    FirstName: fname,
    LastName: lname,
    DateOfBirth: dob,
    Country: country,
    Gender: selectedGender,
    Profession: profession,
    Email: email,
    Number: number,
  };

  function isValidNumber(number) {
    if (number.length === 10) {
      return true;
    }
  }

  function validateForm(formDetails) {
    for (const key in formDetails) {
      if (formDetails[key] === "") {
        alert(`Please enter a valid value for ${key}`);
        return false;
      }

      if (key === "Number" && !isValidNumber(formDetails[key])) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
      }
    }
    return true;
  }

  if (validateForm(formDetails)) {
    const detailsModal = document.getElementById("detailsModal");
    const detailsContent = document.getElementById("detailsContent");

    let detailsHTML = "<h2>Form Details</h2>";
    for (const key in formDetails) {
      detailsHTML += `<p><strong>${key}:</strong> ${formDetails[key]}</p>`;
    }

    detailsContent.innerHTML = detailsHTML;
    detailsModal.style.display = "block";

    // Close the modal when clicking the close button (×)
    const closeModal = document.getElementById("closeModal");
    closeModal.onclick = function () {
      form.reset();
      detailsModal.style.display = "none";
    };
  }
}

function resetForm(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  form.reset();
  const detailsModal = document.getElementById("detailsModal");
  detailsModal.style.display = "none";
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSUbmit);
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetForm);
