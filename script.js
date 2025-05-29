const treatments = {
  "rabies": { treatment: "Immediate veterinary care; isolate pet; vaccination if exposed.", doctor: "Dr. Aminul, Dhaka" },
  "parvovirus": { treatment: "Hydration, antibiotics; urgent vet visit.", doctor: "Dr. Sumiya, Chattogram" },
  "distemper": { treatment: "Supportive care; antibiotics; isolation.", doctor: "Dr. Shahin, Rajshahi" },
  "fleas": { treatment: "Flea shampoo or topical treatments.", doctor: "Dr. Kamal, Sylhet" },
  "mange": { treatment: "Medicated baths; ivermectin treatment.", doctor: "Dr. Rafiq, Khulna" },
  "feline_cold": { treatment: "Warm environment; fluids; vet if persists.", doctor: "Dr. Lina, Barishal" },
  "worms": { treatment: "Deworming medications.", doctor: "Dr. Tania, Mymensingh" },
  "ear_infection": { treatment: "Clean ears; prescribed ear drops.", doctor: "Dr. Jewel, Dhaka" },
  "diarrhea": { treatment: "Hydration; bland diet; vet if prolonged.", doctor: "Dr. Nabila, Cumilla" },
  "vomiting": { treatment: "Small meals; vet check if persistent.", doctor: "Dr. Reza, Rangpur" },
  "kennel_cough": { treatment: "Antibiotics and cough suppressants.", doctor: "Dr. Hasan, Dhaka" },
  "canine_arthritis": { treatment: "Pain relievers and physical therapy.", doctor: "Dr. Parvez, Chattogram" },
  "feline_leukemia": { treatment: "Supportive care; vaccination prevention.", doctor: "Dr. Afia, Rajshahi" },
  "hot_spots": { treatment: "Topical antibiotics; clean affected area.", doctor: "Dr. Rumi, Sylhet" },
  "ringworm": { treatment: "Antifungal creams and shampoos.", doctor: "Dr. Imran, Khulna" },
  "ear_mites": { treatment: "Ear cleaning and acaricide drops.", doctor: "Dr. Nishi, Barishal" },
  "conjunctivitis": { treatment: "Eye drops; keep area clean.", doctor: "Dr. Shakil, Mymensingh" },
  "heat_stroke": { treatment: "Cool pet; vet emergency.", doctor: "Dr. Karim, Dhaka" },
  "hypoglycemia": { treatment: "Sugar supplements; vet care.", doctor: "Dr. Farhana, Cumilla" },
  "obesity": { treatment: "Diet control and exercise.", doctor: "Dr. Tasnim, Rangpur" },
  "feline_diabetes": { treatment: "Insulin injections; diet management.", doctor: "Dr. Rashed, Dhaka" },
  "ear_hematoma": { treatment: "Veterinary surgery required.", doctor: "Dr. Nabil, Chattogram" },
  "cat_fight_wounds": { treatment: "Clean wounds; antibiotics.", doctor: "Dr. Saba, Rajshahi" },
  "tapeworms": { treatment: "Deworming tablets.", doctor: "Dr. Munna, Sylhet" },
  "heartworm": { treatment: "Veterinary treatment; prevention.", doctor: "Dr. Amin, Khulna" },
  "hypothermia": { treatment: "Warm pet; vet if severe.", doctor: "Dr. Sadia, Barishal" },
  "urinary_tract_infection": { treatment: "Antibiotics; increased water intake.", doctor: "Dr. Hasan, Mymensingh" },
  "cystitis": { treatment: "Vet prescribed antibiotics.", doctor: "Dr. Rahim, Dhaka" },
  "feline_asthma": { treatment: "Inhalers and vet supervision.", doctor: "Dr. Laila, Cumilla" },
  "dog_allergies": { treatment: "Antihistamines; avoid allergens.", doctor: "Dr. Imtiaz, Rangpur" },
  "cat_allergies": { treatment: "Allergy meds; environmental control.", doctor: "Dr. Jahan, Dhaka" },
  "parasitic_infestation": { treatment: "Dewormers; flea control.", doctor: "Dr. Farid, Chattogram" },
  "tick_bites": { treatment: "Remove ticks; antibiotics if infected.", doctor: "Dr. Mahi, Rajshahi" },
  "eye_injury": { treatment: "Vet emergency; eye drops.", doctor: "Dr. Ria, Sylhet" },
  "fractures": { treatment: "Immobilize; vet surgery likely.", doctor: "Dr. Tanvir, Khulna" },
  "skin_allergy": { treatment: "Medicated shampoos; antihistamines.", doctor: "Dr. Sumaiya, Barishal" },
  "fungal_infections": { treatment: "Antifungal meds.", doctor: "Dr. Rakib, Mymensingh" },
  "ear_polyp": { treatment: "Surgical removal.", doctor: "Dr. Nadia, Dhaka" },
  "anemia": { treatment: "Vet prescribed meds and diet.", doctor: "Dr. Faisal, Cumilla" },
  "pyoderma": { treatment: "Antibiotic creams.", doctor: "Dr. Rasheda, Rangpur" },
  "hypothyroidism": { treatment: "Thyroid hormone supplements.", doctor: "Dr. Salman, Dhaka" },
  "hip_dysplasia": { treatment: "Weight management and meds.", doctor: "Dr. Naima, Chattogram" },
  "cataracts": { treatment: "Surgical removal if severe.", doctor: "Dr. Asif, Rajshahi" },
  "glaucoma": { treatment: "Eye pressure meds.", doctor: "Dr. Shirin, Sylhet" },
  "ear_cancer": { treatment: "Surgery and chemotherapy.", doctor: "Dr. Rafi, Khulna" },
  "oral_ulcers": { treatment: "Pain relief and vet check.", doctor: "Dr. Sami, Barishal" },
  "gingivitis": { treatment: "Dental cleaning; antibiotics.", doctor: "Dr. Labiba, Mymensingh" },
  "toxoplasmosis": { treatment: "Antiparasitic meds.", doctor: "Dr. Noor, Dhaka" },
  "blastomycosis": { treatment: "Antifungal drugs.", doctor: "Dr. Tamim, Cumilla" },
  "ringworm_cat": { treatment: "Antifungal shampoos.", doctor: "Dr. Salma, Rangpur" },
  "feline_panleukopenia": { treatment: "Supportive care; hydration.", doctor: "Dr. Rifat, Dhaka" },
  "canine_heart_disease": { treatment: "Medication and diet.", doctor: "Dr. Zaman, Chattogram" },
  "cat_obesity": { treatment: "Diet and exercise.", doctor: "Dr. Nahid, Rajshahi" },
  "hypocalcemia": { treatment: "Calcium supplements.", doctor: "Dr. Joy, Sylhet" },
  "kennel_cough_dog": { treatment: "Antibiotics; cough meds.", doctor: "Dr. Morshed, Khulna" },
  "feline_fleas": { treatment: "Topical flea treatment.", doctor: "Dr. Sumon, Barishal" },
  "skin_tumor": { treatment: "Veterinary diagnosis; possible surgery.", doctor: "Dr. Ayesha, Mymensingh" },
  "ear_inflammation": { treatment: "Ear cleaning and anti-inflammatory meds.", doctor: "Dr. Salim, Dhaka" },
  "canine_distemper": { treatment: "Supportive care and vet supervision.", doctor: "Dr. Nasim, Cumilla" },
  "cat_constipation": { treatment: "Hydration and diet change.", doctor: "Dr. Farid, Rangpur" },
  "parvovirus_dog": { treatment: "Hydration and antibiotics; emergency vet.", doctor: "Dr. Raju, Chattogram" },
  "feline_panleukopenia_virus": { treatment: "Supportive care; fluids.", doctor: "Dr. Shathi, Rajshahi" },
  "dog_diabetes": { treatment: "Insulin therapy and diet.", doctor: "Dr. Tahmid, Sylhet" },
  "feline_kidney_disease": { treatment: "Special diet and fluids.", doctor: "Dr. Manisha, Khulna" },
  "dog_ear_infection": { treatment: "Ear drops and cleaning.", doctor: "Dr. Aslam, Barishal" },
  "feline_urinary_syndrome": { treatment: "Vet meds and diet change.", doctor: "Dr. Hasan, Mymensingh" },
  "dog_skin_allergy": { treatment: "Antihistamines and medicated baths.", doctor: "Dr. Kamal, Dhaka" },
  "cat_ear_infection": { treatment: "Cleaning and antibiotics.", doctor: "Dr. Lina, Cumilla" },
  "dog_parvovirus": { treatment: "Urgent vet care; fluids.", doctor: "Dr. Shakil, Rangpur" },
  "feline_respiratory_infection": { treatment: "Antibiotics and fluids.", doctor: "Dr. Rumi, Chattogram" },
  "dog_tapeworm": { treatment: "Deworming medications.", doctor: "Dr. Parvez, Rajshahi" },
  "feline_ear_mite": { treatment: "Ear cleaning and treatment drops.", doctor: "Dr. Nabila, Sylhet" },
  "canine_heartworm": { treatment: "Veterinary treatment; prevention.", doctor: "Dr. Hasan, Khulna" },
  "cat_fleas": { treatment: "Topical flea control.", doctor: "Dr. Tania, Barishal" },
  "dog_arthritis": { treatment: "Pain meds and exercise control.", doctor: "Dr. Farid, Mymensingh" },
  "cat_skin_infection": { treatment: "Antibiotics and medicated baths.", doctor: "Dr. Sami, Dhaka" },
  "dog_fungal_infection": { treatment: "Antifungal treatment.", doctor: "Dr. Rashed, Cumilla" },
  "cat_eye_infection": { treatment: "Eye drops and cleaning.", doctor: "Dr. Laila, Rangpur" },
  "dog_hot_spots": { treatment: "Clean affected area and antibiotics.", doctor: "Dr. Zaman, Chattogram" },
  "cat_cancer": { treatment: "Veterinary diagnosis and treatment.", doctor: "Dr. Sumaiya, Rajshahi" },
  "dog_heat_stroke": { treatment: "Cool pet immediately; emergency vet.", doctor: "Dr. Karim, Sylhet" },
  "cat_cystitis": { treatment: "Antibiotics and diet change.", doctor: "Dr. Rafiq, Khulna" }
};

// Populate dropdown with disease options
const diseaseSelect = document.getElementById('disease');
for (const disease in treatments) {
  const option = document.createElement('option');
  option.value = disease;
  // Make a nicer display name by replacing underscores with spaces and capitalizing words
  option.textContent = disease.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  diseaseSelect.appendChild(option);
}

const treatmentResult = document.getElementById('treatmentResult');
const locationResult = document.getElementById('locationResult');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener('click', () => {
  const selectedDisease = diseaseSelect.value;
  if (!selectedDisease) {
    treatmentResult.textContent = "Please select a disease.";
    locationResult.textContent = "";
    return;
  }

  const info = treatments[selectedDisease];
  treatmentResult.innerHTML = `<strong>Primary Treatment:</strong> ${info.treatment}<br><strong>Recommended Doctor:</strong> ${info.doctor}`;
  locationResult.textContent = "Fetching nearest vet hospital location...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Using Google Maps search query limited to Bangladesh
      const mapsUrl = `https://www.google.com/maps/search/veterinary+hospital+near+me+Bangladesh/@${lat},${lon},15z`;

      locationResult.innerHTML = `<a href="${mapsUrl}" target="_blank">Click here to see nearby veterinary hospitals in Bangladesh on Google Maps</a>`;
    }, () => {
      locationResult.textContent = "Unable to retrieve your location. Please allow location access.";
    });
  } else {
    locationResult.textContent = "Geolocation is not supported by this browser.";
  }
});
