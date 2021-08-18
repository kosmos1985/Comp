export interface Object {
    
    discriminator: string;
    platesNumber: string;
    sideNumber: string;
    color: string;
    type: string;
    picture: {
    id: string;
        name: string;
        extension: null;
        contentType: null
    },
    rangeKm: number;
batteryLevelPct: number;
reservationEnd: null;
reservation: null;
status: string;
locationDescription: null;
address: null;
    mapColor: {
        rgb: string;
        alpha: number;
    },
promotion: null,
id: string;
name: string;
description: null,
    location: {
        latitude: number;
        longitude: number;
    },
    metadata: null;

}
