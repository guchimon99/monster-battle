import { Link } from 'react-router-dom'
import { useArena } from '../hooks/arena'

const Arena = ({ location }) => {
  const {
    monsters: {
      red,
      blue
    },
    logs,
    winner
  } = useArena(location.state)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b p-4">闘技場</div>
      <div className="flex border-b px-1 py-2">
        <div className="w-1/2 p-1">
          <div className="bg-red-200 p-2 text-sm text-gray-800">赤コーナー</div>
          <div className="text-2xl bg-red-100 font-bold text-center p-2">{red.displayName}</div>
        </div>
        <div className="w-1/2 p-1">
          <div className="bg-blue-200 p-2 text-sm text-gray-800">青コーナー</div>
          <div className="text-2xl bg-blue100 font-bold text-center p-2">{blue.displayName}</div>
        </div>
      </div>
      <div className="text-xs">
        {logs.map(({ red, blue, message }, i) =>
          <div key={i} className="flex border-b">
            <div className="p-1 bg-gray-100 w-16 text-right">{red.hitPoint}</div>
            <div className="p-1 flex-grow">{message}</div>
            <div className="p-1 bg-gray-100 w-16 text-right">{blue.hitPoint}</div>
          </div>
        )}
      </div>
      <div className="p-2 mb-8">
        <div className="bg-gray-200 text-sm p-2">勝者</div>
        <div className="bg-gray-100 text-3xl p-2 text-center font-bold">
          {winner.displayName}
        </div>
      </div>
      <Link to="/" className="text-center p-2 block bg-gray-100">戻る</Link>
    </div>
  )
}

export default Arena
