

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-Cred border-t-Saccent border-solid rounded-full animate-spin"></div>
        <p className="text-Ptext text-lg font-int mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
