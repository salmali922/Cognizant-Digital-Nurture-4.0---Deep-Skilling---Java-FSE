import React from "react";

const App = () => {
  const offices = [
  {
    name: "Urban Hive",
    rent: 75000,
    address: "Connaught Place, New Delhi",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?fit=crop&w=800&q=80",
  },
  {
    name: "Startup Hub",
    rent: 45000,
    address: "Park Street, Kolkata, West Bengal",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=800&q=80",
  },
  {
    name: "BizNest",
    rent: 62000,
    address: "Hinjewadi, Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=800&q=80",
  },
];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
        Office Space Rental Listings
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {offices.map((office, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h2 style={{ color: "#34495e", marginTop: "10px" }}>
              {office.name}
            </h2>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
            <p>
              <strong>Rent:</strong>{" "}
              <span
                style={{
                  color: office.rent < 60000 ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                ₹{office.rent.toLocaleString()}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
