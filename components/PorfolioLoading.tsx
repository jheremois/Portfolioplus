const PortfolioLoading = ()=>{
    return(
        <div className="bg-darkGray justify-center items-center fixed z-50 w-full h-screen flex">
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-150 -translate-y-16">
                <rect width="110" height="110" rx="5" fill="none" className="svg-elem-1"></rect>
                <path d="M96 18H18V92" stroke="#BABCBD" strokeWidth="9" strokeLinejoin="round" className="svg-elem-2"></path>
                <path d="M53 87.5001L92 87.5001L92 32.1001" stroke="#BABCBD" strokeWidth="9" strokeLinejoin="round" className="svg-elem-3"></path>
                <path d="M37.5 92V67.5V37H68V67.5H42" stroke="#BABCBD" strokeWidth="9" strokeLinejoin="round" className="svg-elem-4"></path>
            </svg>
        </div>
    )
}

export default PortfolioLoading