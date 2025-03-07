export class PokemonDetail{
    private _id: number;
    private _name: string;
    private _weight: string;
    private _height: string;
    private _image: string;
    private _types: string[];
    private _moves: string[];

    constructor(id: number, name: string, weight: string, height: string, image: string, types: string[], moves: string[]){
        this._name = name;
        this._id = id;
        this._weight = weight;
        this._height = height;
        this._image = image;
        this._types = types;
        this._moves = moves;
    }

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }
    public get weight(): string { return this._weight; }
    public set weight(value: string) { this._weight = value; }
    public get height(): string { return this._height; }
    public set height(value: string) { this._height = value; }
    public get image(): string { return this._image; }
    public set image(value: string) { this._image = value; }
    public get types(): string[] { return this._types; }
    public set types(value: string[]) { this._types = value; }
    public get moves(): string[] { return this._moves; }
    public set moves(value: string[]) { this._moves = value; }
    
}