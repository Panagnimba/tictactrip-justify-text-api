/**
 *  Fonction pour justifier le texte passé en paramètre à une largeur spécifiée.
 * @param text {string} text - Le texte à justifier.
 * @param width {number} width - La largeur à laquelle justifier le texte.
 * @returns {string} - Le texte justifié.
 */

function justifyText(text:string, width = 80) {
    const words = text.split(/\s+/);
    let line:any = [];
    let result = "";

    words.forEach((word) => {
        const lineLength = line.join(" ").length;
        
        // If adding the next word exceeds the width, justify the current line
        if (lineLength + word.length + 1 > width) {
            let spacesToAdd = width - lineLength;
            let i = 0;
            
            // Distribute spaces between words without adding trailing spaces
            while (spacesToAdd > 0 && line.length > 1) {
                line[i] += " ";
                spacesToAdd--;
                i = (i + 1) % (line.length - 1);
            }
            
            // Add justified line to the result with no trailing spaces
            result += line.join(" ").trimEnd() + "\n";
            line = [];
        }
        
        line.push(word);
    });
    
    // Add any remaining words as the final line (not justified)
    result += line.join(" ").trimEnd();
    return result;
}


export {justifyText}