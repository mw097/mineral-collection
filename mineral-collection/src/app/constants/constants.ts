import { SpecimenData, SpecimenType } from "../types/types";

// TODO(mw097) Move static data to DB.
export const MINERALS: SpecimenData[] = [
    {
        id: '1',
        name: ['Cavansyt'],
        locality: {country: 'India', city: 'Pune'},
        mass: 0,
        description: '',
        purchaseData: [''],
        type: SpecimenType.MINERAL,
        foundDate: '',
    },
];

// TODO(mw097) Move static data to DB.
export const METEORITES: SpecimenData[] = [
    {
        id: '1',
        name: ['NWA 6963'],
        locality: {country: '?', city: '?'},
        mass: 0,
        description: '',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '?',
    },
];

