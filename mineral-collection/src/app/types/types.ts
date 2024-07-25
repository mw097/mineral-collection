export interface SimpleLocality {
    country?: string;
    region? : string;
    city? : string;
    mine? : string;
}

export interface ExtendedLocality extends SimpleLocality {
    id?: string;
}

export enum SpecimenType {
    UNDEFINED = 'UNDEFINED',
    MINERAL = 'MINERAL',
    METEORITE = 'METEORITE',
}

export interface SpecimenData {
    id: string;
    name: string[];
    locality: SimpleLocality | ExtendedLocality;
    mass: number;
    description: string;
    purchaseData: string[];
    type: SpecimenType;
    foundDate: string;
}
