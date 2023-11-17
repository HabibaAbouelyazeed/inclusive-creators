const EventAllDetails = ({ event }) => {
  if (!event) return null;

  const {
    title,
    date,
    time,
    location,
    description,
    imagePath,
    host,
    category,
    hostAvatar,
  } = event;

  return (
    <div className="container mx-auto my-4 p-6 bg-white shadow-md rounded">
      <div className="flex flex-col md:flex-row">
        <div className="md:ml-6">
          <p className="text-olive font-semibold">
            {date} | {time}
          </p>
          <p className="my-2 text-neutral-800">{location}</p>
          <div className="bg-olive text-white px-2 py-1 inline-block rounded text-sm my-2">
            {category}
          </div>
          <p className="text-neutral-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventAllDetails;
