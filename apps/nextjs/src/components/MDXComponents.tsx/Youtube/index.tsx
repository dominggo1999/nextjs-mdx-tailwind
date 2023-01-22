const YouTube = ({ id }: { id: string }) => {
  return (
    <div className="relative my-10 h-0 max-w-full overflow-hidden rounded-lg pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 left-0 h-full w-full border-0"
      />
    </div>
  );
};

export default YouTube;
