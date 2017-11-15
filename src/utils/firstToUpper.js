export default function (str) {
	const upper = str[0].toUpperCase();
	return upper + str.substring(1, str.length);
}
