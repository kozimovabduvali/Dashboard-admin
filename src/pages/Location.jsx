import FilterComponent from "../components/Location/FilterComponent"

function Location() {
  return (
    <div className="w-full h-screen min-h-full bg-white">
      <div className="max-w-base mx-auto px-4 lg:px-5 pt-6 md:pt-9 xl:pt-12">
        <FilterComponent />
      </div>
    </div>
  )
} 

export default Location 