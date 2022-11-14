function Loading(props) {
  return (
    <section className="grid place-items-center min-h-[80vh]">
      <div className="p-4 sm:p-6 md:p-8 w-80 md:w-[401px] max-w-md max-h-[144px] bg-white rounded-xl shadow-custom">
        <h1 className="font-poppins font-medium text-lg leading-[27px] tracking-[-0.035em] text-[#4F4F4F]">
          Uploading...
        </h1>

        <div className="w-72 md:w-[341px] h-1.5 bg-[#F2F2F2] rounded-lg my-8">
          <div className="w-24 md:w-[101px] h-1.5 bg-[#2F80ED] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
