export default function() {
    return {
        spaceText(val) {
            return String(val).split('').join(' ');
        }
    };
}