import { Resource } from './enums/resource'
import { Omit } from '../../../helpers/types'

export interface Event {
  name: string
  message: string
  resources: Resource[]
  appliesToPlayers: boolean
  appliesToHuman: boolean
  appliesToComputer: boolean
  firstOccurrence: number
  subsequentOccurrences: number
}

export type EventABARoE = Omit<Event, 'appliesToHuman'>

export interface Events {
  count: number
  entries: Event[]
}

export interface EventsABRoE {
  count: number
  entries: EventABARoE[]
}
