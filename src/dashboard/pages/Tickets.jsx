import { FaPen} from 'react-icons/fa';

    const Tickets = () => {
        return (
            <div className="flex flex-col gap-4 px-2 bg-slate-400 md:px-0  md:w-7/12">
                <div className="header-info">
                    <h2 className='text-lg font-bold text-black'>My Profile</h2>
                </div>

                {/* personal information */}
                <div className="flex p-3 w-full ">
                    <div className="flex flex-col align-center justify-center    w-full px-3 py-4 border-[0.46px] border-surface rounded-md">
                        <div className="personal-info flex align-center justify-center">
                            <h2 className='text-primary font-bold text-sm'>Personal information</h2>
                            <div className="">
                                <p className="hover:bg-gray-800 px-4 flex align-center text-center py-3 rounded-full">
                                    <FaPen className="mr-3" /> Edit
                                </p>
                            </div>
                        </div>
                        <div className="user-info grid grid-cols-4 ">
                             <div className="name-content">
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="text-sm text-black">John Doe</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Tickets; 