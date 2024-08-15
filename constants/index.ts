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
    image: "/assets/images/aby.jpeg",
    name: "Abyalew Tesafe",
  },
  {
    image: "/assets/images/sara.jpeg",
    name: "Sara Getacherw",
  },
  {
    image: "/assets/images/joel.jpeg",
    name: "Eyuel Nigusse",
  },
  {
    image: "/assets/images/henok.jpeg",
    name: "Henok Muhammed",
  },
  {
    image: "/assets/images/j.jpeg",
    name: "Eyerusalem Nigusse",
  },
  {
    image: "/assets/images/ftsa.jpeg",
    name: "HaileMickeal Zewdu",
  },
  {
    image: "/assets/images/asni.jpeg",
    name: "Asni Getu",
  },
  {
    image: "/assets/images/menal.jpeg",
    name: "Menal Ali",
  },
  {
    image: "/assets/images/bitu.jpeg",
    name: "Bitanya Honelign",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
