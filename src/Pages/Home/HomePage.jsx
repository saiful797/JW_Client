import { ScaleLoader } from "react-spinners";
import useStock from "../../Hooks/useStock";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const HomePage = () => {
    const [ stocks, refetch ] = useStock();

    // handle stocks Delete
    const handleStocksDelete = ( id ) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`${import.meta.env.VITE_SECURE_API}/specific-stock-delete/${id}`);
                if(res.data.deletedCount > 0)
                {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            }
          });
    }
    return (
        <div className="min-h-screen">
            {
                stocks.length === 0 && <div className="flex justify-center items-center min-h-screen">
                    <ScaleLoader
                        color='#eb3867'
                        height={40}
                        width={3}
                    />
                </div>
            }
            {
                stocks.length > 0 && <div className="my-3">
                    <p className="text-center font-bold text-yellow-500">Total Stocks: {stocks.length}</p>
                </div>
            }
            {
                stocks.length > 0 && <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="rounded-t-2xl">
                        <tr className="border-2 border-yellow-500 bg-blue-950 text-white text-center">
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                #
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Date
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Trade Code
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                High
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Low
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Open
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Close
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Volume
                            </th>
                            <th className="border-2 border-yellow-500 text-lg text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        stocks?.map( (stock, index ) => <tr key={stock._id}>
                            <th className="border-2 border-yellow-500 text-center">
                                {index + 1}
                            </th>
                            <th className="border-2 border-yellow-500 text-center">
                                {stock.date}
                            </th>
    
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.trade_code}
                            </td>
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.high}
                            </td>
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.low}
                            </td>
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.open}
                            </td>
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.close}
                            </td>
                            <td className="border-2 border-yellow-500 text-center">
                                {stock.volume}
                            </td>
                            <th className="border-2 border-yellow-500 text-center">
                                <div className="flex justify-evenly">
                                    <Link to={`/update-stock/${stock._id}`} className="cursor-pointer bg-green-50 py-1 px-2 text-green-500 badge badge-outline">
                                        Update
                                    </Link>
                                    <Link 
                                        onClick={() => handleStocksDelete(stock._id)}
                                        className="cursor-pointer bg-red-50 py-1 px-2 text-red-500 badge badge-outline"
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </th>
                        </tr>)
                    }
                    </tbody>    
                </table>
            </div>
            }
        </div>
    );
};

export default HomePage;