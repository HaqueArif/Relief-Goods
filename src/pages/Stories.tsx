const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "A Helping Hand During Tough Times",
      author: "Sarah Johnson",
      content:
        "I lost my job unexpectedly due to the pandemic and was struggling to make ends meet. Thanks to the relief goods provided by this website, my family and I had food on the table during those difficult months. I'm forever grateful for the support we received.",
      date: "2023-08-15",
    },
    {
      id: 2,
      title: "Neighbors Coming Together",
      author: "Michael Smith",
      content:
        "After a natural disaster struck our neighborhood, our community was devastated. However, through the generosity of our neighbors and the resources provided by this website, we were able to rebuild and support each other. It's incredible how people come together during tough times.",
      date: "2023-11-22",
    },
    {
      id: 3,
      title: "Grateful for a Second Chance",
      author: "Emily Rodriguez",
      content:
        "As a single parent, I was struggling to provide for my children after losing my home in a fire. The relief goods and support offered by this website gave us hope and a second chance. I'll always be thankful for the kindness and compassion shown to us during our darkest days.",
      date: "2024-02-10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {stories.map((story, i) => (
        <div key={i} className="shadow">
          <div className=" px-3 py-5">
            <h2 className="text-xl font-semibold text-gray-500">
              {story.title}
            </h2>

            <div className="flex justify-between mb-3">
              <span className="italic ">{story.author}</span>
              <span className=" text-right">{story.date}</span>
            </div>
            <p>{story.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
