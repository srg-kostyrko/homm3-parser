import { ObjectAttribute } from './ObjectAttributes'
import { MapObjectBodyAB, MapObjectBodyRoE, MapObjectBody } from './objects/Body'

export interface MapObject {
  x: number
  y: number
  z: number
  oaIndex: number
  attributes: ObjectAttribute
  body: MapObjectBody
}

export interface MapObjectAB {
  x: number
  y: number
  z: number
  oaIndex: number
  attributes: ObjectAttribute
  body: MapObjectBodyAB
}

export interface MapObjectRoE {
  x: number
  y: number
  z: number
  oaIndex: number
  attributes: ObjectAttribute
  body: MapObjectBodyRoE
}

export interface ObjectDetails {
  count: number
  entries: MapObject[]
}

export interface ObjectDetailsAB {
  count: number
  entries: MapObjectAB[]
}

export interface ObjectDetailsRoE {
  count: number
  entries: MapObjectRoE[]
}
