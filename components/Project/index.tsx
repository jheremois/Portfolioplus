import {ArrowDownLeftIcon} from "@heroicons/react/24/outline"
import Link from "next/link"

interface projectProperties {
    imgBg: string
    title: string
    description: string
    bgColor: string
    projectUrl: string
    onLoad?: any
}

const Project = (prjct: projectProperties)=>{
    return(
        <>
            <div 
                style={{
                    backgroundImage: `url(${prjct.imgBg})`,
                    backgroundColor: `#${prjct.imgBg}`
                }}
                className="w-full bg rounded-xl h-80 bg-no-repeat bg-cover overflow-hidden"
            >
                <div 
                    className="h-2/5 p-6  bg-black"
                    style={{
                        background: `
                        linear-gradient(179.99deg, ${prjct.bgColor} 34.45%, ${prjct.bgColor}00 68.86%)`
                    }}
                >
                    <div 
                        className="flex items-center justify-between"
                    >
                        <div className="">
                            <p className="font-medium">
                                {prjct.title}
                            </p>
                            <p>
                                {prjct.description}
                            </p>
                        </div>
                        <Link
                            href={prjct.projectUrl}
                            target="_blank"
                            className="
                                bg-white rounded-full flex items-center justify-center
                                text-black p-2 -rotate-180 hover:scale-125 duration-150
                            "
                        >
                            <ArrowDownLeftIcon width={13}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project