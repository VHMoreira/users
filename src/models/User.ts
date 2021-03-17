export interface Name {
    first: string;
    last: string;
}

export interface Location {
    city: string;
    state: string;
}

export interface Picture {
    medium: string;
}

export interface User {
    name: Name;
    location: Location;
    email: string;
    cell: string;
    picture: Picture;
}