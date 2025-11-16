export default function Card() {
  return (
    <div className="bg-white rounded-xl shadow p-4 m-4 max-w-lg">
      <img
        src="https://i.ibb.co/7t22B5cS/coffee1-1.jpg"
        alt="Image"
        className="w-full rounded-md mb-6 text-gray-900"
      />

      <h2 className="text-2xl font-semibold text-center text-black mb-2">
        Coffee Speaks Newsletter
      </h2>

      <p className="text-black text-center mb-4">
        Get your daily fill of coffee news with all your favorite brews!
      </p>
      <div className="flex items-center justify-center">
        <button className="bg-blue-700 text-white px-5 py-3 rounded-md hover:bg-blue-800 transition">
          Steep On It
        </button>
      </div>
    </div>
  );
}
