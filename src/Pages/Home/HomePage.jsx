import { ScaleLoader } from "react-spinners";
import useStock from "../../Hooks/useStock";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [ stocks, refetch ] = useStock();
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
                stocks.length > 0 && <div className="overflow-x-auto">
                <div className="my-3">
                    <p className="text-center font-bold text-yellow-500">Total Stocks: {stocks.length}</p>
                </div>
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
                                <div className="flex justify-between">
                                    <Link className="cursor-pointer bg-green-50 py-1 px-2 text-green-500 badge badge-outline">
                                        Update
                                    </Link>
                                    <Link className="cursor-pointer bg-re-50 py-1 px-2 text-red-500 badge badge-outline">
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