function SpellChecker(partialInput) {
  const Dictionary = [
        "a",
        "a / e",
        "ab",
        "aba",
        "abaci",
        "abacilik",
        "abadi",
        "aba guresi",
        "abajur",
        "abajurcu",
        "abajurculuk",
        "abajurlu",
        "abajursuz",
        "abakus",
        "abali",
        "Abana",
        "abanabilme",
        "abanabilmek",
        "abandirabilme",
        "abandirabilmek",
        "abandiriverme",
        "abandirivermek",
        "abandirma",
        "abandirmak",
        "abandone",
        "abanis",
        "abaniverme",
        "abanivermek",
        "abani",
        "abanma",
        "abanmak",
        "abanoz",
        "abanozgiller",
        "abanozlasiverme",
        "abanozlasivermek",
        "abanozlasma",
        "abanozlasmak",
        "abanozlastirabilme",
        "abanozlastirabilmek"
];

  const matchingWords = Dictionary.filter((word) => {
    const partialLength = partialInput.length;
    const wordLength = word.length;

    if (word.startsWith(partialInput)) {
      return true;
    }

    if (partialLength > 1 && wordLength > 1 && word.includes(partialInput)) {
      const partialChars = partialInput.split("");
      const wordChars = word.split("");

      let matchCount = 0;
      for (let i = 0; i < partialLength; i++) {
        if (wordChars.includes(partialChars[i])) {
          matchCount++;
        }
      }

      if (matchCount >= partialLength - 1) {
        return true;
      }
    }

    return false;
  });

  return matchingWords;
}


