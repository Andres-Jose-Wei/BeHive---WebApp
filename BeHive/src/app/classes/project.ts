import { Position } from './position';

export class Project {
    name: string;
    status: string;
    description: string;
    isPublic: boolean;
    team: Array<string>;
    availableSpots: Map<string, number>;
    positions: Array<Position>;

    constructor()
    {
        this.team = Array<string>();
        this.availableSpots = new Map<string, number>();
        this.positions = new Array<Position>();
    }
}
