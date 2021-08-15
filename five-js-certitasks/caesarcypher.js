function ceasar(str, shift) {

    if (shift > 26 || shift < -26) {
        shift = shift % 26;
    }

    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, logic);


    function logic(input) {
        return String.fromCharCode(
            ...input.split('').map(char => ((char.charCodeAt() - 65 + shift + 26) % 26) + 65),
        );

    }
}
