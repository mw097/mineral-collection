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
        id: 'ME-1',
        name: ['Muonionalusta'],
        locality: {country: 'Sweden', city: '?'},
        mass: 7.02,
        description: 'Octaedrite IVA',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '1906',
        timeline: '',
    },
    {
        id: 'ME-2',
        name: ['Morasko'],
        locality: {country: 'Poland', city: '?'},
        mass: 1.35,
        description: 'Octaedrite IIICD',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '1914',
        timeline: '',
    },
    {
        id: 'ME-3',
        name: ['NWA 11788'],
        locality: {country: 'Mali', city: '?'},
        mass: 0.4,
        description: 'Lunar, feldspathic breccia',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2017',
        timeline: '',
    },
    {
        id: 'ME-4',
        name: ['NWA 869'],
        locality: {country: 'North-West Africa', city: '?'},
        mass: 6.7,
        description: 'Chondrite L3-6',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2000',
        timeline: '',
    },
    {
        id: 'ME-5',
        name: ['Seymchan'],
        locality: {country: 'Russia', city: '?'},
        mass: 15.9,
        description: 'Pallasite',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '1967',
        timeline: '',
    },
    {
        id: 'ME-6',
        name: ['Campo del Cielo'],
        locality: {country: 'Argentina', city: '?'},
        mass: 18.06,
        description: 'Octaedrite IVA',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: 'before 1576',
        timeline: '',
    },
    {
        id: 'ME-7',
        name: ['NWA 6963'],
        locality: {country: 'Morocco', city: '?'},
        mass: 0.029,
        description: 'Martian, shergottite',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2011',
        timeline: '',
    },
    {
        id: 'ME-8',
        name: ['NWA 14678'],
        locality: {country: 'Mauretania', city: '?'},
        mass: 2.55,
        description: 'Chondrite Rumuruti, R3',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2021',
        timeline: '',
    },
    {
        id: 'ME-9',
        name: ['NWA 15658'],
        locality: {country: 'Morocco', city: '?'},
        mass: 0.2,
        description: 'Achondrite, eucrite breccia',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2022',
        timeline: '',
    },
    {
        id: 'ME-10',
        name: ['El Menia'],
        locality: {country: 'Algeria', city: '?'},
        mass: 5.4,
        description: 'Ordinary chondrite, L5',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '11.03.2023',
        timeline: '',
    },
    {
        id: 'ME-11',
        name: ['NWA 14414'],
        locality: {country: 'North-West Africa', city: '?'},
        mass: 5.2,
        description: 'Howardite',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2020',
        timeline: '',
    },
    {
        id: 'ME-12',
        name: ['Gebel Kamil'],
        locality: {country: 'Egypt', city: '?'},
        mass: 7.02,
        description: 'Iron, ungrouped',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '2009',
        timeline: '',
    },
    {
        id: 'ME-13',
        name: ['Pułtusk'],
        locality: {country: 'Poland', city: '?'},
        mass: 7.02,
        description: 'Ordinary chondrite, H5',
        purchaseData: ['?'],
        type: SpecimenType.METEORITE,
        foundDate: '30.01.1868',
        timeline: '',
    },
];

export const STATIC_TIMELINE_DATA = [
    {
        year: '13,82 bln years ago',
        text: 'The age of the Universe',
        numberOfLines: 3
    },
    {
        year: '4,6 bln years ago',
        text: 'The age of the Solar system',
        numberOfLines: 3
    },
];

/** 
 * Meteorite timeline constants.
 */

/** The gap between screen edge and timeline. */
export const SIDE_MARGIN = 100;

/** The height of tick line. */
export const TICK_HEIGHT = 50;

/** The size of font in px. */
export const FONT_SIZE = 24;
