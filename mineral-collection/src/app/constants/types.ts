/**
 * This interface is used to define the structure of mineral specimen data.
 */
export interface MineralData {
    id: string;
    name: string;
    namePl: string;
    locality: string;
    country: string;
    countryPl: string;
    description: string;
}

/**
 * This interface is used to define the structure of meteorite specimen data.
 */
export interface MeteoriteData {
    id: string;
    name: string;
    mass: number;
    locality: string;
    country: string;
    countryPl: string;
    description: string;
}
