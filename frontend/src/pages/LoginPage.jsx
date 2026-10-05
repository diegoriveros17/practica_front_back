import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Envía las credenciales al backend; si son válidas, el backend setea la cookie de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      navigate("/home");
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
  };

  return (
    <>
      <h1 className="">Login</h1>
      <form className="flex flex-col gap-1.5 mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-red-700 font-bold">Credenciales invalidas</p>
        )}

        <button className="bg-blue-400 rounded-2xl p-1" type="submit">
          {loading ? "cargando..." : "Login"}
        </button>
      </form>
    </>
  );
};
