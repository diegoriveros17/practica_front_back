import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      navigate("/login", { replace: true });
    }
  };
  return (
    <>
      <div>HomePage</div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </>
  );
};
