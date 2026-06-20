function App() {
  const arr = [5, 2, 8, 1, 7];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {arr.map((value, idx) => (
        <div
          key={idx}
          style={{
            width: "50px",
            height: `${value * 40}px`,
            backgroundColor: "skyblue",
          }}
        />
      ))}
    </div>
  );
}

export default App;