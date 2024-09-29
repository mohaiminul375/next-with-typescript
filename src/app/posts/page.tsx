import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// get api data
const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 10);
};

const page = async () => {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <section className="md:max-w-7xl mx-auto">
      <div className="my-10">
        <h1 className="text-center font-bold text-2xl">All Posts are here</h1>
      </div>
      {/* data */}
      <div className="grid grid-cols-3 gap-4">
        {
          posts?.map(({ title, body, id }) => <div
          className="border p-3 border-blue-500"
          key={id}>
            <h4>Title: {title}</h4>
            <p className="mb-2">description:{body}</p>
            <button><Link className="border bg-gray-400 p-2 rounded-md" href={`/posts/${id}`}>View Details</Link></button>
          </div>)
        }
      </div>
    </section>
  );
};

export default page;
