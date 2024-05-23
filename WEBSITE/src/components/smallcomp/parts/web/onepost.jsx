import { Link, useParams } from "react-router-dom";
import Footerdashbord from "../../smallcompindashbord/footerdashbord";
import { useEffect, useState } from "react";
import axios from "axios";
import { Event, RemoveRedEyeSharp } from "@mui/icons-material";
import { TextCard } from "../../smallcompindashbord/postcard";

function OnePost() {
  const [newdata, setnewData] = useState([]);
  const [Loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://51.20.138.46/post/list");
        setnewData(response.data);
        setLoding(false);
      } catch (error) {
        setLoding(false);

        console.error(error);
      }
    };

    fetchData();
  }, []);



  const [data, setData] = useState(null);
  const { postid } = useParams();
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://51.20.138.46/post/postnum/${postid}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [postid]);

  return (
    <div className="bg-base-200  text-base-content pt-1 pt-20" dir="rtl">
      {data ? (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-white sm:text-base-content text-lg font-semibold   md:text-2xl ">
                {data["title"]}
              </h1>
              <p className="text-sm text-white sm:text-base-content leading-4 font-medium   ">
                پۆست
              </p>
            </div>
            <div style={{overflow: "hidden"}} className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2  lg:row-span-6 lg:mb-0">
              <img
                src={`http://51.20.138.46/${data["image"]}`}
                alt=""
                className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                loading="lazy"
              />
            

            <div className="hidden lg:flex flex-col w-full rounded-lg sm:col-span-2 lg:col-span-full justify-center " style={{ overflowY: "scroll" }}>
          {newdata &&
            newdata
              .slice(0, 5)
              .map((post) => (
                <TextCard Id={post.id} Title={post.title} Text={post.paragraph} />
              ))}
        </div>
              


            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dl className="flex items-center">
                <dt className="sr-only"> location</dt>
                <dd className="flex items-center">
                
                  
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-slate-400 dark:text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  جیهانی
                </dd>

                <dt className="sr-only">Date</dt>
                <dd className="flex items-center ml-4">
                  <svg
                    width={2}
                    height={2}
                    aria-hidden="true"
                    fill="currentColor"
                    className="mx-3 text-slate-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                 <Event style={{'width': '18px'}} className="ml-2"/> 
                  {formatDate(data.time)}
                </dd>

                <dt className="sr-only">Viewers</dt>
                <dd className="flex items-center ml-4">
                  <svg
                    width={2}
                    height={2}
                    aria-hidden="true"
                    fill="currentColor"
                    className="mx-3 text-slate-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <RemoveRedEyeSharp style={{'width': '18px'}}  className="ml-2"/> 
                  50
                </dd>
              </dl>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <Link
                to={"/home"}
                className="bg-indigo-600  text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                گەڕانەوە بۆ سەرەتا
              </Link>
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
              {data["paragraph"]}
            </p>
          </div>
        </main>
      ) : (
        <>
         {Loding ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) :  <p>No data available.</p>}
        
       
        
        </>
        
      )}

      <footer>
        <Footerdashbord />
      </footer>
    </div>
  );
}

export default OnePost;
