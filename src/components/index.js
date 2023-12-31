import {useState} from 'react'
import './index.css'

const Airport = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [availableVehicles, setAvailableVehicles] = useState([])

  const handleSearch = () => {
    // Here, you would make an API call to fetch the available vehicles based on the selected data
    // For this example, we'll use dummy data instead
    const dummyData = [
      {id: 1, type: 'Sedan', capacity: 4},
      {id: 2, type: 'SUV', capacity: 6},
      {id: 3, type: 'Minivan', capacity: 8},
    ]
    setAvailableVehicles(dummyData)
  }

  return (
    <div className="conatiner">
      <h1 className="heading">Airport Transfer Booking App</h1>
      <label>
        Point A:
        <input
          type="text"
          value={pointA}
          onChange={e => setPointA(e.target.value)}
        />
      </label>
      <label>
        Point B:
        <input
          type="text"
          value={pointB}
          onChange={e => setPointB(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </label>
      <button type="button" className="searchbtn" onClick={handleSearch}>
        Search
      </button>
      <h2 className="heading2">Available Vehicles:</h2>
      <ul>
        {availableVehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.type} (Capacity: {vehicle.capacity})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Airport