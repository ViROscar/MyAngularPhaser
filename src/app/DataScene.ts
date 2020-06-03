import { Platform } from './Platform';
import { GameLocation } from './GameLocation';
import { Enemy } from './Enemy';
import { Point } from './Point';

export interface DataScene{
    Name:string;
    InitialLocation:GameLocation;
    Platforms:Platform[];
    Enemies:Enemy[];
    Points:Point[];
}