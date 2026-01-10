export function formatTag(input: string): string {
    const wordArray = input.split("-")
    const capitalisedWordArray = wordArray.map(w => `${w[0].toUpperCase()}${w.slice(1)}`)
    const capitalisedString = capitalisedWordArray.join(" ")
    const result = capitalisedString.replace("And", "&")

    return result
}