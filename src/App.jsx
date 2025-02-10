import { useState } from "react";
import { USERS } from "./config";
import { MapPin as MapPinIcon, Cake as CakeIcon, Search as SearchIcon } from "lucide-react";

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredUsers = USERS?.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  ) || [];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-300 min-h-screen">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-5">
        Search, Sort, Filter:
      </h1>

      <div className="relative w-[400px] mb-6">
        <SearchIcon className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((userData, index) => {
            const { name, city, age, avatar } = userData;
            return (
              <div key={index} className="bg-white shadow-lg mb-5 mx-6 px-5 py-4 rounded-lg w-[400px] flex items-center space-x-4">
                <img src={avatar} className="h-16 w-16 rounded-full object-cover" alt={name} />
                <div>
                  <h1 className="font-bold text-lg">{name}</h1>
                  <div className="flex text-gray-700">
                    <p className="flex items-center mr-4">
                      <CakeIcon className="inline mr-1 text-red-500" /> {age}
                    </p>
                    <p className="flex items-center">
                      <MapPinIcon className="inline mr-1 text-blue-500" /> {city}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-700 text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
