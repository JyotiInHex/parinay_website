const zodiacBySound = {
  Aries: ["Chu", "Che", "Cho", "La", "Li", "Lu", "Le", "Lo"],
  Taurus: [
    "Ee",
    "Uu",
    "O",
    "Va",
    "Vi",
    "Vu",
    "Ve",
    "Vo",
    "Ba",
    "Bi",
    "Bu",
    "Bo",
  ],
  Gemini: ["Ka", "Ki", "Ku", "Ke", "Ko", "Gh", "Chh", "Cha", "Nga"],
  Cancer: ["Hi", "Hu", "He", "Ho", "Da", "De", "Di", "Do", "Dho"],
  Leo: ["Ma", "Mi", "Mu", "Me", "Mo", "Ta", "Ti", "Tu", "Te"],
  Virgo: [
    "To",
    "Pa",
    "Pi",
    "Pu",
    "Pe",
    "Po",
    "Pra",
    "Na",
    "Ni",
    "Ne",
    "No",
    "Tha",
  ],
  Libra: ["Ra", "Ri", "Ru", "Re", "Ro", "Taa", "Ti"],
  Scorpio: ["Na", "Ni", "Nu", "Ne", "No", "To", "Ti", "Jo", "Ju", "Je"],
  Sagittarius: [
    "Ye",
    "Yo",
    "Ya",
    "Bha",
    "Bhi",
    "Bhu",
    "Bhe",
    "Dha",
    "Ph",
    "Pha",
  ],
  Capricorn: ["Kha", "Khi", "Khu", "Khe", "Kho", "Ja", "Ji", "Ju", "Joo"],
  Aquarius: [
    "Ga",
    "Gi",
    "Gu",
    "Ge",
    "Go",
    "Sa",
    "Si",
    "Su",
    "Se",
    "So",
    "Sha",
    "Sh",
  ],
  Pisces: [
    "Di",
    "Du",
    "De",
    "Do",
    "Th",
    "Thha",
    "Cha",
    "Chi",
    "Cho",
    "Jha",
    "Jya",
    "Ny",
  ],
};

const bioTemplates = {
  male: [
    "Hi, I’m {name}, {age} years old. I hold a {education} degree and work as a {occupation}. From a {familyType} family with {familyValues} values and {familyBackground} background, I live in {city}. I enjoy {hobbies} and {myDiet}. Looking for someone {preferredAge} with {preferredQualities} and interests in {preferredHobbies}.",
    "{name}, {age}. I’m a {occupation} with a {education} background. Based in {city}, I spend time enjoying {hobbies} and {myDiet}. My family is {familyType}, upholding {familyValues} values and {familyBackground} background. Seeking a partner {preferredAge} with {preferredQualities}, who loves {preferredHobbies}.",
    "Hello! I’m {name}, a {education} graduate and {occupation} by profession. I belong to a {familyType} family with {familyValues} values and {familyBackground} background, living in {city}. My hobbies include {hobbies}, and I love {myDiet}. Hoping to meet someone {preferredAge} with {preferredQualities} and fond of {preferredHobbies}.",
    "Hey, I’m {name}, {age}. After completing {education}, I pursued {occupation}. I come from a {familyType} family with {familyValues} values and {familyBackground} background. In {city}, I enjoy {hobbies} and {myDiet}. Looking for {preferredAge} with {preferredQualities}, who shares an interest in {preferredHobbies}.",
    "I’m {name}, {age}, a {occupation} in {city}. I have a {education} background and belong to a {familyType} family with {familyValues} values and {familyBackground} background. My hobbies are {hobbies} and {myDiet}. Seeking someone {preferredAge} with {preferredQualities} and love for {preferredHobbies}.",
    "Hello! I’m {name}, {age}, working as a {occupation}. I hold a {education} degree and come from a {familyType} family with {familyValues} values and {familyBackground} background. Based in {city}, I enjoy {hobbies} and {myDiet}. Looking for a partner {preferredAge} with {preferredQualities} and interests in {preferredHobbies}.",
  ],
  female: [
    "Hi! I’m {name}, {age}. I have a {education} degree and work as a {occupation}. My family is {familyType} with {familyValues} values and {familyBackground} background. Living in {city}, I enjoy {hobbies} and {myDiet}. Looking for someone {preferredAge} with {preferredQualities} and interested in {preferredHobbies}.",
    "{name}, {age}, currently a {occupation} with {education} qualification. I come from a {familyType} family with {familyValues} values and {familyBackground} background. Based in {city}, I love {hobbies} and {myDiet}. Seeking a partner {preferredAge} with {preferredQualities} and fond of {preferredHobbies}.",
    "Hello! I’m {name}, {age}. I completed {education} and now work as {occupation}. I belong to a {familyType} family with {familyValues} values and {familyBackground} background, living in {city}. I enjoy {hobbies} and {myDiet}. Hoping to meet someone {preferredAge} with {preferredQualities}, who loves {preferredHobbies}.",
    "Hey, I’m {name}, {age}. After finishing {education}, I pursued a career as {occupation}. I come from a {familyType} family with {familyValues} values and {familyBackground} background. In {city}, I enjoy {hobbies} and {myDiet}. Looking for someone {preferredAge} with {preferredQualities} and interested in {preferredHobbies}.",
    "I’m {name}, {age}, a {occupation} in {city}. I have a {education} background and my family is {familyType} with {familyValues} values and {familyBackground} background. My hobbies include {hobbies} and {myDiet}. Seeking a partner {preferredAge} with {preferredQualities} who enjoys {preferredHobbies}.",
    "Hello! I’m {name}, {age}, working as {occupation}. I hold a {education} degree and belong to a {familyType} family with {familyValues} values and {familyBackground} background. Based in {city}, I love {hobbies} and {myDiet}. Hoping to meet someone {preferredAge} with {preferredQualities}, interested in {preferredHobbies}.",
  ],
};

export function getZodiacFromName(name) {
  if (!name || typeof name !== "string") {
    return null; // invalid name
  }

  const cleanName = name.trim().toLowerCase();
  if (!/^[a-z\s]+$/.test(cleanName)) {
    return null; // invalid characters
  }

  const firstWord = cleanName.split(/\s+/)[0];

  for (const zodiac in zodiacBySound) {
    for (const sound of zodiacBySound[zodiac]) {
      if (firstWord.startsWith(sound.toLowerCase())) {
        return zodiac;
      }
    }
  }

  return null;
}


export function generateUserBio(data) {
  const today = new Date();
  const birthDate = new Date(data.dob);
  const age =
    birthDate instanceof Date && !isNaN(birthDate)
      ? today.getFullYear() -
      birthDate.getFullYear() -
      (today <
        new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? 1
        : 0)
      : "N/A";

  const templates = data.gender?.toLowerCase() === "female" ? bioTemplates.female : bioTemplates.male
  const template =
    templates[Math.floor(Math.random() * templates.length)];

  const replacements = {
    name: data.name?.split(" ")[0] || "Someone",
    age: age || "N/A",
    education: data.education || "educated",
    occupation: data.occupation || "professional",
    hobbies:
      Array.isArray(data.hobbies) && data.hobbies.length
        ? data.hobbies.join(", ")
        : data.hobbies || "exploring new things",
    preferredHobbies:
      Array.isArray(data.preferredHobbies) && data.preferredHobbies.length
        ? data.preferredHobbies.join(", ")
        : data.preferredHobbies || "fun adventures",
    preferredQualities:
      Array.isArray(data.preferredQualities) && data.preferredQualities.length
        ? data.preferredQualities.join(", ")
        : data.preferredQualities || "kindness and warmth",
    city: data.city || "your city",
    myDiet: data.myDiet || "food lover",
    preferredAge: data.preferredAge || "any",
    familyType: data.familyType || "loving family",
    familyValues: data.familyValues || "moderate",
    familyBackground: data.familyBackground || "middle-class",
  };

  return template.replace(/{(.*?)}/g, (_, key) => replacements[key] || "");

}
