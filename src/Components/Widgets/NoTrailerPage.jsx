const NoTrailerPage = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-lg text-Ptext font-int mb-4">{props.h1}</h1>
        <p className="text-md text-Stext font-body mb-8">
          {props.p}
        </p>


      </div>
    </div>
  );
};

export default NoTrailerPage;
