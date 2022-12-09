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

export interface University {
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
    university: "California.jpg",
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
    logo: "Paris-logo.jpg",
    university: "Paris.jpg",
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
    logo: "Oxford-logo.png",
    university: "Oxford.jpg",
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
    logo: "Toronto-logo.png",
    university: "Toronto.jpg",
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
    logo: "Tokyo-logo.jpg",
    university: "Tokyo.jpg",
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
    logo: "Melbourne-logo.png",
    university: "Melbourne.jpg",
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
    logo: "Cairo-logo.jpg",
    university: "Cairo.png",
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
    logo: "Leipzig-logo.png",
    university: "Leipzig.jpg",
    language: "German",
    fees: 10000,
    duration: 4,
    englishTest: false,
  },
];

export { countries, specializations, universities };
