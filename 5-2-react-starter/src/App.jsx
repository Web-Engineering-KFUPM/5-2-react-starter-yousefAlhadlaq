import './App.css'
import StudentCard from './components/StudentCard'
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
           <StudentCard name="yousef" id="202274280" department="Computer Science" />
    <StudentCard name="Bob Smith" id="S67890" department="Mathematics" />
    <StudentCard name="Charlie Brown" id="S54321" department="Physics" />
        </div>
      </main>
    </div>
  )
}

export default App
