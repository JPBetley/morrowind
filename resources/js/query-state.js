// Reads and writes the character planner state to the URL query string.
// Arrays are encoded as repeated keys (e.g. ?major=axe&major=block), which
// matches the format produced by earlier versions of the planner, so old
// shared links keep working.

export function readState(href) {
    const params = new URL(href).searchParams;

    return {
        sex: params.get('sex') ?? '',
        race: params.get('race') ?? '',
        birthsign: params.get('birthsign') ?? '',
        specialization: params.get('specialization') ?? '',
        favored: params.getAll('favored'),
        major: params.getAll('major'),
        minor: params.getAll('minor'),
    };
}

export function writeState(href, state) {
    const url = new URL(href);
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(state)) {
        for (const item of [value].flat()) {
            if (item !== '' && item != null) {
                params.append(key, item);
            }
        }
    }

    url.search = params.toString();

    return url.toString();
}
