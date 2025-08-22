// const zodiacBySound = {
//     "ARIES": ["Aa", "La", "Li", "Lu", "Le", "Lo", "Ci", "Cu", "O", "L",],
//     "TAURUS": ["Uu", "Ee", "Oo", "Ae", "Va", "Vi", "Vu", "Ve", "Vo", "Ba", "Bo", "Bu", "Bi", "U",
//         "I", "E", "A", "B",],
//     "GEMINI": ["Ka", "Ki", "Ke", "Ko", "Ku", "Gh", "Chh", "Chu", "Che", "Ha", "Ng", "Ch", "Gha", "Nga", "Cha", "K",],
//     "CANCER": ["Da", "Du", "De", "Do", "H", "Ha", "Hi", "Hu", "He", "Ho", "Dee", "Dho"],
//     "LEO": ["Ma", "Mi", "Mu", "Me", "Mo", "Ta", "Tu", "Te", "Tee", "M", "T"],
//     "VIRGO": ["Pa", "Pi", "Pe", "Pu", "Na", "Tha", "Po", "Pra", "Boo", "Baa", "P", "N"],
//     "LIBRA": ["Ra", "Ri", "Ru", "Re", "Ro", "Taa", "Ti", "R"],
//     "SCORPIO": ["To", "Ni", "Nu", "Ne", "No", "Jo", "Je", "Ju", "J", "T"],
//     "SAGITTARIUS": ["Ye", "Yo", "Bha", "Bhi", "Bhu", "Dha", "Pha", "Pho", "Dhha", "Bhe", "Dh", "BH", "Ph", "Rda", "Y"],
//     "CAPRICORN": ["Ja", "Joo", "Ji", "Khi", "Khu", "Khe", "Kho", "Kha", "Kh", "J"],
//     "AQUARIUS": ["Ga", "Gi", "Gu", "Ge", "Go", "Sa", "Si", "Soo", "Se", "So", "Da", "Sh", "Sha", "G"],
//     "PISCES": ["Di", "Du", "Thha", "Jha", "Jya", "Cho", "Chi", "Ny", "Jh", "Th", "D"],
// };

const zodiacBySound = {
    "ARIES": ["Chu", "Che", "Cho", "La", "Li", "Lu", "Le", "Lo"],
    "TAURUS": ["Ee", "Uu", "O", "Va", "Vi", "Vu", "Ve", "Vo", "Ba", "Bi", "Bu", "Bo"],
    "GEMINI": ["Ka", "Ki", "Ku", "Ke", "Ko", "Gh", "Chh", "Cha", "Nga"],
    "CANCER": ["Hi", "Hu", "He", "Ho", "Da", "De", "Di", "Do", "Dho"],
    "LEO": ["Ma", "Mi", "Mu", "Me", "Mo", "Ta", "Ti", "Tu", "Te"],
    "VIRGO": ["To", "Pa", "Pi", "Pu", "Pe", "Po", "Pra", "Na", "Ni", "Ne", "No", "Tha"],
    "LIBRA": ["Ra", "Ri", "Ru", "Re", "Ro", "Taa", "Ti"],
    "SCORPIO": ["Na", "Ni", "Nu", "Ne", "No", "To", "Ti", "Jo", "Ju", "Je"],
    "SAGITTARIUS": ["Ye", "Yo", "Ya", "Bha", "Bhi", "Bhu", "Bhe", "Dha", "Ph", "Pha"],
    "CAPRICORN": ["Kha", "Khi", "Khu", "Khe", "Kho", "Ja", "Ji", "Ju", "Joo"],
    "AQUARIUS": ["Ga", "Gi", "Gu", "Ge", "Go", "Sa", "Si", "Su", "Se", "So", "Sha", "Sh"],
    "PISCES": ["Di", "Du", "De", "Do", "Th", "Thha", "Cha", "Chi", "Cho", "Jha", "Jya", "Ny"],
};



export function getZodiacFromName(name) {
    if (!name || typeof name !== "string") {
        return "Please enter a valid name";
    }

    const cleanName = name.trim().toLowerCase();
    if (!/^[a-z\s]+$/.test(cleanName)) {
        return "Name should contain only letters.";
    }

    const firstWord = cleanName.split(/\s+/)[0];
    for (const zodiac in zodiacBySound) {
        for (const sound of zodiacBySound[zodiac]) {
            if (firstWord.startsWith(sound.toLowerCase())) {
                return zodiac;
            }
        }
    }
    return "No matching zodiac found";
}



