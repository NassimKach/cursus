const countries: string[] = [
  "Australia",
  "Belgium",
  "Canada",
  "Egypt",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "New Zealand",
  "Russia",
  "United Kingdom",
  "United States",
];

const specializations: string[] = [
  "Accounting",
  "Business",
  "Computer Science",
  "Economics",
  "Engineering",
  "Finance",
  "Human Resources",
  "Information Systems",
  "International Business",
  "Management",
  "Marketing",
  "Operations Management",
  "Artificial Intelligence",
  "Other",
];

interface University {
  name: string;
  country: string;
  degree: string;
  specialization: string;
  logo: string;
  university: string;
  language: string;
  fees: number;
  duration: number;
  englishTest: boolean;
}

const universities: University[] = [
  {
    name: "University of California",
    country: "United States",
    degree: "Bachelor of Science",
    specialization: "Computer Science",
    logo: "california-logo.png",
    university: "california.jpg",
    language: "English",
    fees: 10000,
    duration: 4,
    englishTest: true,
  },
  {
    name: "University of Paris",
    country: "France",
    degree: "Master",
    specialization: "Finance",
    logo: "paris-logo.jpg",
    university: "paris.jpg",
    language: "French",
    fees: 5000,
    duration: 2,
    englishTest: false,
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    degree: "Diploma",
    specialization: "Human Resources",
    logo: "oxford-logo.png",
    university: "oxford.jpg",
    language: "English",
    fees: 8000,
    duration: 4,
    englishTest: true,
  },
  {
    name: "University of Toronto",
    country: "Canada",
    degree: "International year one",
    specialization: "Economics",
    logo: "toronto-logo.png",
    university: "toronto.jpg",
    language: "English , French",
    fees: 5000,
    duration: 1,
    englishTest: true,
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    degree: "Bachelor",
    specialization: "Engineering",
    logo: "tokyo-logo.jpg",
    university: "tokyo.jpg",
    language: "Japanese",
    fees: 10000,
    duration: 4,
    englishTest: true,
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    degree: "Diploma",
    specialization: "Marketing",
    logo: "melbourne-logo.png",
    university: "melbourne.jpg",
    language: "English",
    fees: 2000,
    duration: 1,
    englishTest: true,
  },
  {
    name: "Cairo University",
    country: "Egypt",
    degree: "Bachelor",
    specialization: "Human Resources",
    logo: "cairo-logo.jpg",
    university: "cairo.png",
    language: "Arabic",
    fees: 3000,
    duration: 3,
    englishTest: false,
  },
  {
    name: "Leipzig University",
    country: "Germany",
    degree: "Doctorate",
    specialization: "International Business",
    logo: "leipzig-logo.png",
    university: "leipzig.jpg",
    language: "German",
    fees: 10000,
    duration: 4,
    englishTest: false,
  },
];

export { countries, specializations, universities };
