import React from 'react'

const Navbar = () => {
  return (
  <div className="w-full bg-blue-500 py-16 px-4 relative overflow-hidden">
      {/* <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-400 opacity-20 -mr-12 -mt-12"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400 opacity-20 -mb-24 -mr-24"></div> */}
      
      <div className="max-full px-20 md:px-10 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-white text-sm font-medium mb-4">Blog</div>
            <h1 className="text-white text-4xl font-bold mb-6">
              The Journal: Design Resources, Interviews, and Industry News
            </h1>
            
            <form  className="flex flex-col sm:flex-row gap-2 mt-8">
              <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md text-gray-800 w-full sm:w-64"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="flex items-center justify-end">
            <div className="text-white max-w-md">
              <p className="text-lg">
                Subscribe to learn about new product features, 
                the latest in technology, solutions, and updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;