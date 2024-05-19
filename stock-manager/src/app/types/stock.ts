export interface Stock {
    id: number;
    name: string;
    price: number;
    previousPrice?: number;
    side: string;
    date: Date;
    }