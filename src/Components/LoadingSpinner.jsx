const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-300 border-t-blue-500"></div>
        </div>
    );
};

export default LoadingSpinner;