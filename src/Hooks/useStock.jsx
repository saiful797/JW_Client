import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useStock = () => {

    const{data: stocks = [], refetch } = useQuery({
        queryKey: ['stocks'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_SECURE_API}/stock-market-data`);
            return res.data;
        }
    })
    return [ stocks, refetch ];
};

export default useStock;