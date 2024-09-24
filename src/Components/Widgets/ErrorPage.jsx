

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-Cred text-7xl font-bold mb-6">404</h1>
        <h2 className="text-xl text-Ptext font-int mb-2">Page Not Found</h2>
        <p className="text-md text-Stext font-body mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button 
          className="px-6 py-3 text-md font-bold text-Cbackground bg-Saccent rounded-lg hover:bg-Cred hover:text-Ptext transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
