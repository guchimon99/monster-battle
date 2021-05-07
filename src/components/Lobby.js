import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useMonsters } from '../hooks/monsters'

const MonsterSelect = ({ register, name, ...props }) => {
  const monsters = useMonsters()

  return (
    <select className="block p-2 bg-gray-100 w-full rounded" {...register(name)} {...props}>
      {monsters.map(monster =>
        <option key={monster.name} value={monster.name}>{monster.displayName}</option>
      )}
    </select>
  )
}

const Lobby = ({ history }) => {
  const { handleSubmit, register } = useForm()

  const submitHandler = useCallback(data => {
    const { red, blue } = data
    history.push({
      pathname: '/arena',
      state: { red, blue }
    })
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b p-4">控え室</div>
      <div className="p-2">戦わせるモンスターを選んでください</div>
      <form className="px-2" onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-4">
          <label className="block p-2 mb-1">赤コーナー</label>
          <MonsterSelect {...{ register, name: 'red' }} />
        </div>
        <div className="mb-4">
          <label className="block p-2 mb-1">青コーナー</label>
          <MonsterSelect {...{ register, name: 'blue' }} />
        </div>
        <button className="p-2 bg-gray-200 rounded text-center w-full">戦う</button>
      </form>
    </div>
  )
}

export default Lobby
