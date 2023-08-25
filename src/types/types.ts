export interface ICountry {
    flags: IFlag;
    name: IName;
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    currencies: ICurrency[];
    languages: string[];
    borders: string[];
}
interface IFlag {
    alt: string;
    png: string;
    svg: string;
}
export interface ICurrency {
    name: string;
    symbol: string;
}
interface IName {
    common: string;
    official: string;
}
