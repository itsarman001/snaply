export const useAuth = () => {
  const isAuthenticated = useState("isAuthenticated", () => false);

  const login = () => {
    isAuthenticated.value = true;
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
