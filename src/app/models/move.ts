import { Type } from "./type";

export class Move{
    private _id: number;
    private _name: string;
    private _accuracy: string;
    private _desc: string;
    private _url: string;
    private _power: string;
    private _type: Type;

    constructor(id: number, name: string, accuracy: string, desc: string, url: string, power: string, type: Type){
        this._id = id;
        this._name = name;
        this._accuracy = accuracy;
        this._desc = desc;
        this._url = url;
        this._power = power;
        this._type = type;
    }

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }
    public get accuracy(): string { return this._accuracy; }
    public set accuracy(value: string) { this._accuracy = value; }
    public get desc(): string { return this._desc; }
    public set desc(value: string) { this._desc = value; }
    public get url(): string { return this._url; }
    public set url(value: string) { this._url = value; }
    public get power(): string { return this._power; }
    public set power(value: string) { this._power = value; }
    public get type(): Type { return this._type; }
    public set type(value: Type) { this._type = value; }
}