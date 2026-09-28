export function countGs(str) {
    let compteur = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "G" || str[i] === "g") {
            compteur++;
        }
    }

    return compteur;
}
