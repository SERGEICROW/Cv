const Footer = () => {
    return (
        <div className="fixed bottom-0 backdrop-blur-sm flex items-center justify-center z-40 text-gray-400
         min-w-full max-w-none">
            &copy; {new Date().getFullYear()} Rodrigo Yanez. All Rights Reserved.
        </div>
    )
}

export default Footer