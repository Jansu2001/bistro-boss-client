import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";
const useCarts = () => {
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (!user) return [];
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCarts;
