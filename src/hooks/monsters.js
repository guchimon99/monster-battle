import { useMemo } from 'react'

const monsters = [
  {
    name: 'gorilla',
    displayName: 'ゴリラ',
    attack: 75,
    defense: 80,
    speed: 50,
    hitPoint: 100
  }, {
    name: 'crocodile',
    displayName: 'ワニ',
    attack: 120,
    defense: 80,
    speed: 40,
    hitPoint: 75
  }, {
    name: 'dinosaur',
    displayName: '恐竜',
    attack: 999,
    defense: 0,
    speed: 60,
    hitPoint: 80
  }, {
    name: 'lion',
    displayName: 'ライオン',
    attack: 200,
    defense: 80,
    speed: 50,
    hitPoint: 120
  }, {
    name: 'hippopotamus',
    displayName: 'カバ',
    attack: 80,
    defense: 200,
    speed: 20,
    hitPoint: 200
  }
]

export const useMonsters = () => {
  return useMemo(() => monsters, [])
}

export const useMonster = name => {
  return useMemo(() => {
    return {
      ...monsters.find(monster => monster.name === name)
    }
  }, [name])
}
