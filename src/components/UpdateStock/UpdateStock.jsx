import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateStock = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        reset,
      } = useForm();

    const { data: stock = {} } = useQuery({
        queryKey: ['stock'],
        queryFn: async () => {
            const res = axios.get(`${import.meta.env.VITE_SECURE_API}/stock-data/${id}`);
            return (await res).data;
        }
    });

    const { date, trade_code, high, low, open, close, volume} = stock;

    const onSubmit = async (data) => {
        const res = await axios.patch(`${import.meta.env.VITE_SECURE_API}/stock-update/${id}`, data);
        // console.log(res.data);
        if(res.data.modifiedCount === 0){
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Stocked data does not changed!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        }
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Stocked updated successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        }
    }

    return (
        <div className="mt-5">
            <div className='md:w-2/3 mx-auto bg-blue-50 p-5 rounded-lg'>
                <form 
                    onSubmit={ handleSubmit(onSubmit) }
                >
                    <div className='gap-10 grid lg:grid-cols-2'> 
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='date' className='block text-gray-600'>
                                Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='date'
                                id='date'
                                type='date'
                                defaultValue={ date }
                                {...register("date", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='trade_code' className='block text-gray-600'>
                                Trade Code
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='trade_code'
                                id='trade_code'
                                type='text'
                                defaultValue={ trade_code }
                                placeholder='Enter trade code here.'
                                {...register("trade_code", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='high' className='block text-gray-600'>
                                High
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='high'
                                id='high'
                                type='number'
                                step={0.01}
                                defaultValue={ high }
                                placeholder='Enter high here.'
                                {...register("high", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='low' className='block text-gray-600'>
                                Low
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='low'
                                id='low'
                                type='low'
                                step={0.01}
                                defaultValue={ low }
                                placeholder='Enter low here.'
                                {...register("low", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='date' className='block text-gray-600'>
                                Open
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='open'
                                id='open'
                                type='number'
                                step={0.01}
                                defaultValue={ open }
                                placeholder='Enter open here.'
                                {...register("open", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='date' className='block text-gray-600'>
                                Close
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='close'
                                id='close'
                                type='number'
                                step={0.01}
                                defaultValue={ close }
                                placeholder='Enter close here.'
                                {...register("close", { required: true })}
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='date' className='block text-gray-600'>
                                Volume
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-yellow-300 focus:outline-yellow-600 rounded-md '
                                name='volume'
                                id='volume'
                                type='text'
                                defaultValue={ volume }
                                placeholder='Enter volume here.'
                                {...register("volume", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full flex justify-center items-center">
                        <button
                            type='submit'
                            className='md:w-1/2 p-2 mt-5 text-center font-medium text-white transition duration-200 rounded-b-md border-b-4 border-b-yellow-600 shadow-md bg-blue-950'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateStock;