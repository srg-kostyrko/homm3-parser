import {
  byte,
  uint8,
  uint32,
  branch,
  array,
  when,
  struct,
  ctx,
  bytes,
  enums,
  flag,
  skip,
} from 'binary-markup'
import { H3M_MAX_PLAYERS, genderEnum } from './constants'
import {
  isRoE,
  isNotRoE,
  isSoD,
  primarySkills,
  secondarySkill,
  artifacts,
  hero,
  hommString,
} from './common.bml'
import { loseConditionsEnum } from './enums/lose'
import { loseConditionsBranches } from './additionalInfo/loseConditions.bml'
import { winConditionsEnum } from './enums/win'
import { winConditionsBranches } from './additionalInfo/winConditions.bml'
import { spellsMask } from './enums/spell'
import { skillsMask } from './enums/skill'

const rumor = struct(
  //
  hommString`name`,
  hommString`desciption`,
)

const customHero = struct(
  //
  hero`hero`,
  uint8`face`,
  hommString`name`,
  uint8`allowed_players`,
)

const secondarySkills = struct(
  //
  uint32`count`,
  array(secondarySkill, ctx`count`)`entries`,
)

const heroData = struct(
  flag`hasExperience`,
  when(ctx`hasExperience`, uint32)`experience`,
  flag`hasSecondarySkills`,
  when(ctx`hasSecondarySkills`, secondarySkills)`secondarySkills`,
  flag`hasArtifacts`,
  when(ctx`hasArtifacts`, artifacts)`artifacts`,
  flag`hasBiography`,
  when(ctx`hasBiography`, hommString)`biography`,
  enums(uint8, genderEnum)`gender`,
  flag`hasSpells`,
  when(ctx`hasSpells`, spellsMask)`spells`,
  flag`hasPrimarySkills`,
  when(ctx`hasPrimarySkills`, primarySkills)`primarySkills`,
)

const heroSettings = struct(
  //
  flag`hasSettings`,
  when(ctx`hasSettings`, heroData)`settings`,
)
export const additionalInfo = struct(
  enums(uint8, winConditionsEnum)`winCondition`,
  branch(ctx`winCondition`, winConditionsBranches)`winConditionData`,
  enums(uint8, loseConditionsEnum)`loseCondition`,
  branch(ctx`loseCondition`, loseConditionsBranches)`loseConditionData`,
  uint8`teamsCount`,
  when(ctx`teamsCount`.gt(0), array(byte, H3M_MAX_PLAYERS))`teams`,
  bytes(context => (isRoE(context) ? 16 : 20))`availableHeroes`,
  when(isNotRoE, uint32),
  when(isSoD, uint8)`customHeroesCount`,
  when(isSoD, array(customHero, ctx`customHeroesCount`))`customHeroes`,
  skip(31),
  when(isNotRoE, bytes(context => (isSoD(context) ? 18 : 17)))`availableArtifacts`,
  when(isSoD, spellsMask)`availableSpells`,
  when(isSoD, skillsMask)`availableSkills`,
  uint32`rumorsRount`,
  array(rumor, ctx`rumorsRount`)`rumors`,
  when(isSoD, array(heroSettings, 156))`heroSettings`,
)
