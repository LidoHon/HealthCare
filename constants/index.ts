export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "female" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhyisician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Abyalew Tesafe",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Sara Getacherw",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Eyuel Nigusse",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Henok Muhammed",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Eyerusalem Nigusse",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Fitsum Demeke",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Yabsera Gudeta",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Menal Ali",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Muluken Ayenew",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
