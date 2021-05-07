import { useMemo } from 'react'
import { useMonster } from './monsters'

function getDamage (attacker, defender) {
  const attack = attacker.attack * (0.8 + Math.random() * 0.2)
  const defense = defender.defense * (0.6 + Math.random() * 0.2)
  return Math.max(0, Math.floor(attack - defense))
}

export const useLogs = (red, blue) => {
  return useMemo(() => {
    const logs = []

    red.actionPoint = 0
    blue.actionPoint = 0

    while (red.hitPoint > 0 && blue.hitPoint > 0) {
      red.actionPoint += red.speed
      blue.actionPoint += blue.speed

      if (red.actionPoint < 100 && blue.actionPoint < 100) continue

      const attacker = red.actionPoint > blue.actionPoint ? red : blue
      const defender = red === attacker ? blue : red
      const damage = getDamage(attacker, defender)
      attacker.actionPoint = 0
      defender.hitPoint = Math.max(0, defender.hitPoint - damage)
      logs.push({
        message: `${attacker.displayName} が ${defender.displayName} に攻撃。${damage}のダメージ。`,
        red: { ...red },
        blue: { ...blue }
      })
    }

    return logs
  }, [red, blue])
}

export const useWinner = logs => {
  return useMemo(() => {
    const { red, blue } = logs[logs.length - 1]
    return red.hitPoint > 0 ? red : blue
  }, [logs])
}

export const useArena = ({ red, blue }) => {
  const redMonster = useMonster(red)
  const blueMonster = useMonster(blue)

  const logs = useLogs(redMonster, blueMonster)
  const winner = useWinner(logs)

  return {
    monsters: {
      red: redMonster,
      blue: blueMonster
    },
    logs,
    winner
  }
}
