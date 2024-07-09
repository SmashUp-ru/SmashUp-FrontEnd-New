export function formatTime(seconds: number) {
    seconds = Math.floor(seconds);

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let hours = Math.floor(minutes / 60);
    minutes %= 60;

    let formattedHours = hours > 0 ? (hours > 9 ? hours.toString() : '0' + hours) + ':' : '';
    let formattedMinutes = (minutes > 9 ? minutes.toString() : '0' + minutes) + ':';
    let formattedSeconds = seconds > 9 ? seconds.toString() : '0' + seconds;

    return formattedHours + formattedMinutes + formattedSeconds;
}
