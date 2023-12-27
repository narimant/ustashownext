import Link from "next/link";

const Pager = async ({ data ,searchParams} ) => {

  const PostLength = data.length;
  const a = Math.ceil(PostLength / 10);

  const numberarr = Array.from({ length: a }, (value, index) => ++index);

  return (
    <div className="text-center">
      {numberarr.map((item, index) => (
        <Link
          href={`?page=${item}`}
          key={index}
          className={`py-1 px-3 rounded-full bg-blue-600 text-white m-2 ${searchParams.page==item ? 'bg-gray-600': 'bg-blue-600'}`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Pager;
