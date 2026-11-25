
function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">

        <h1 className="text-3xl font-bold text-blue-600">
          ClassNotify Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome to ClassNotify!
        </p>

        <div className="grid grid-cols-3 gap-5 mt-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Total Announcements</h2>
            <p className="text-3xl text-blue-600 mt-3">12</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">New Announcements</h2>
            <p className="text-3xl text-green-600 mt-3">5</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Upcoming Events</h2>
            <p className="text-3xl text-purple-600 mt-3">3</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard;
