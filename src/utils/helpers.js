const zodiacBySound = {
    "ARIES": ["O", "Aa", "L", "La", "Li", "Lu", "Le", "Lo", "Ci", "Cu"],
    "TAURUS": ["U", "Uu", "I", "E", "A", "B", "Ee", "Oo", "Ae", "Va", "Vi", "Vu", "Ve", "Vo", "Ba", "Bo", "Bu", "Bi"],
    "GEMINI": ["K", "Ka", "Ki", "Ke", "Ko", "Ku", "Gh", "Chh", "Chu", "Che", "Ha", "Ng", "Ch", "Gha", "Nga", "Cha"],
    "CANCER": ["Da", "Du", "De", "Do", "H", "Ha", "Hi", "Hu", "He", "Ho", "Dee", "Dho"],
    "LEO": ["M", "Ma", "Mi", "Mu", "Me", "Mo", "T", "Ta", "Tu", "Te", "Tee"],
    "VIRGO": ["P", "Pa", "Pi", "Pe", "N", "Pu", "Na", "Tha", "Po", "Pra", "Pho", "Boo", "Baa"],
    "LIBRA": ["Ra", "Ri", "Ru", "Re", "Ro", "Taa", "Ti", "R"],
    "SCORPIO": ["T", "To", "Ni", "Nu", "Ne", "No", "Jo", "Je", "Ju", "J"],
    "SAGITTARIUS": ["Y", "Ye", "Yo", "Bha", "Bhi", "Bhu", "Dha", "Pha", "Dhha", "Bhe", "Dh", "BH", "Ph", "Rda"],
    "CAPRICORN": ["Ja", "Joo", "Ji", "Khi", "Khu", "Khe", "Kho", "Kha", "Kh", "J"],
    "AQUARIUS": ["Ga", "Gi", "G", "Gu", "Ge", "Go", "Sa", "Si", "Soo", "Se", "So", "Da", "G", "Sh", "Sha"],
    "PISCES": ["D", "Di", "Du", "Thha", "Jha", "Jya", "Cho", "Chi", "Ny", "Jh", "Th", "D"],
};

export function getZodiacFromName(name) {
    const startSound = name.slice(0, 2).toUpperCase();
    for (const zodiac in zodiacBySound) {
        if (zodiacBySound[zodiac].some(sound => startSound.startsWith(sound.toUpperCase()))) {
            return zodiac;
        }
    }
    return "Select";
}


