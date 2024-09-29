interface Params {
    id: string;
}
interface Details{
    title:string;
    body:string;
}
const getDetails = async (id: string): Promise<Details> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

const page = async ({ params }: { params: Params }) => {
    const {title,body} =await getDetails(params.id)
    // console.log(title,body)
    return (
        <div className="">
         <h1 className="font-bold">Title: {title}</h1>
         <p>Description: {body}</p>
        </div>
    );
};

export default page;