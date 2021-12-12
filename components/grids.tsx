import NextLink from 'next/link'
import Image from 'next/image'



export const WorkGridItems = ({ children, id, title, image }) => (
    <div className="mb-5 sm:w-full text-center border border-dashed border-green-400 hover:hue-rotate-180 ">
        <NextLink href={`/projects/${id}`}>
            <div className="p-1 cursor-pointer">
                <Image
                    className="rounded-b-3xl"
                    src={image}
                    alt={title}
                />
                <NextLink href={`/projects/${id}`}>
                    <div className="text-yellow-400 text-3xl animate-pulse">
                        {title}
                    </div>
                </NextLink>
                <div className="text-white text-xl mb-5">{children}</div>
            </div>
        </NextLink>
    </div>
)

export const TrendsGrid = ({ children, id, title, image }) => (
    <div className="mb-5 sm:w-full text-center border border-dashed border-green-400 hover:hue-rotate-180 ">
        <NextLink href={`/projects/${id}`}>
            <div className="p-1 cursor-pointer">
                <Image
                    className="rounded-b-3xl"
                    src={image}
                    alt={title}
                />
                <NextLink href={`/projects/${id}`}>
                    <div className="text-yellow-400 text-3xl animate-pulse">
                        {title}
                    </div>
                </NextLink>
                <div className="text-white text-xl mb-5">{children}</div>
            </div>
        </NextLink>
    </div>
)