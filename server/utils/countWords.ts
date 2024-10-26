/**
 * Compte le nombre de mots dans le texte brut envoyé par l'utilisateur.
 *
 * @param {string} text - Le texte brut à analyser.
 * @returns {number} Le nombre de mots contenu dans le texte.
 */
export function countWords(text: string): number {
    if(!text)
        return 0;
    else
    {
        const wordsArray = text.trim().split(/\s+/);
        return wordsArray[0] === "" ? 0 : wordsArray.length;
    }
}