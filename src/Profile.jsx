import React from "react";

export default function Profile() {
  const roles = [
    { name: "Admin", url: "https://ss-sage-eta.vercel.app/login" },
    { name: "Instructor", url: "https://ss-3yzn.vercel.app/login" },
    { name: "Public", url: "https://ss-7nqk.vercel.app" },
    { name: "Student", url: "https://ss-9jno.vercel.app/login" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-500 flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-white mb-14">
        Select Your Role
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {roles.map((role, index) => (
          <a
            key={index}
            href={role.url}
            target="_blank"  // opens in a new tab
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-6">{role.name}</h2>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Enter
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}
