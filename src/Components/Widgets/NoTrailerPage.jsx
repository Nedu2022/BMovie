const NoTrailerPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-lg text-Ptext font-int mb-4">No Trailer Available</h1>
        <p className="text-md text-Stext font-body mb-8">
          Sorry, the trailer for this movie is not currently available.
        </p>


      </div>
    </div>
  );
};

export default NoTrailerPage;
