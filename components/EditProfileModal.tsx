const EditProfileModal = ()=> {
    return(
        <>
            <div className="fixed w-screen h-screen bg-gray-800 bg-opacity-60 z-50 flex justify-center">
                <div className="bg-darkGray p-4 absolute top-6 shadow-md rounded-xl">
                    <div className="flex justify-between">
                        <h3 className=" text-lg font-semibold">
                            Edit profile
                        </h3>
                        <button className="">
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.55298 1.54205L18.553 18.5421M1.55298 18.5421L18.553 1.54205" stroke="#BBBDBE" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileModal