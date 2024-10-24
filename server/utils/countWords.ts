
export function countWords(text: string): number {
    if(!text)
        return 0;
    else
    {
        const wordsArray = text.trim().split(/\s+/);
        return wordsArray[0] === "" ? 0 : wordsArray.length;
    }
}