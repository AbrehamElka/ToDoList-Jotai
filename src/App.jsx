import Display from "./components/Display"
import AddButton from "./components/addPopup/AddButton"
import FilterButton from "./components/filterButtons/FilterButton"
function App() {
  
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <AddButton />
          <FilterButton />
        </div>
        <Display />
      </div>
    </div>
  )
}

export default App
