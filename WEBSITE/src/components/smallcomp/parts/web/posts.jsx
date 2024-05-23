import Addcenter from "../../smallcompindashbord/addcenter";
import Footerdashbord from "../../smallcompindashbord/footerdashbord";
import image from "../../../../assets/images/ad/ad3.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextCard } from "../../smallcompindashbord/postcard";

function Posts() {
  const [data, setData] = useState([]);
  const [Loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://51.20.138.46/post/list");
        setData(response.data);
        setLoding(false);
      } catch (error) {
        setLoding(false);

        console.error(error);
      }
    };

    fetchData();
  }, []);

  function thepoststhatinslide () {
    return ( <div className="hidden lg:inline w-80 pl-4 pt-10 " dir="rtl">
            <div class="block max-w-[18rem] rounded-lg border-[#0000002d]	border-2 pb-3">
              <div class="border-b-2 border-[#0000002d] px-6 py-3  ">
                نوێترین بڵاوکراوەکان
              </div>
  
              {data &&
                data.slice(0, 6).map((post) => (
                  <div class="flex justify-content-center my-2">
                    <div>
                      <img
                        src={`http://51.20.138.46/${post.image}`}
                        alt="diagno"
                        className="rounded-lg flex-initial w-24 mr-2 "
                      />
                    </div>
  
                    <h6 class=" justify-start flex-initial w-64 mb-2   align-middle FONTREG leading-tight   mr-3">
                      <Link className="link-info" to={`../onepost/${post.id}`}>
                        {post.title}
                      </Link>
                    </h6>
                  </div>
                ))}
  
             
            </div>
            <div dir="ltr" style={{ marginTop: "10px" }}>
              <Addcenter height={"300px"} />
            </div>
            <img src={image} alt="asia" />
  
            <div className="hidden lg:flex flex-col w-full rounded-lg sm:col-span-2 lg:col-span-full justify-center ">
            {data &&
              data
                .slice(0, 5)
                .map((post) => (
                  <TextCard Id={post.id} Title={post.title} Text={post.paragraph} />
                ))}
          </div>
                
          </div>)
  }
  return (
      <div class="mt-14">
        <h2 class="mb-4 text-center text-3xl font-bold pt-10">بڵاوکراوەکان </h2>
  
        {Loding ? (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : null}
        <div className="container-fluid flex">
  
  
         {thepoststhatinslide()}


        <div className=" grow h-100  pl-4 pt-10 pr-3 w-80">
          <div className="bg-base-200 text-base-content ">


            <div class="container md:px-6">
              <section class="mb-32">
                <div class="grid gap-6 lg:grid-cols-3 px-3 ">
                  {data &&
                    data
                      .sort(() => Math.random() - 0.5)
                      .slice(0, 6)
                      .map((post) => (
                        <div
                          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <img
                            src={`http://51.20.138.46/${post.image}`}
                            class="w-full h-full align-middle transition duration-300 ease-linear"
                            alt="diagnocar"
                          />
                          <Link
                            className="link-info"
                            to={`../onepost/${post.id}`}
                          >
                            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                              <div class="flex h-full items-end justify-end">
                                <div class="m-6 text-white text-right">
                                  <h5 class="mb-3 text- FONTREG">
                                    {post.title}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                          </Link>
                        </div>
                      ))}

                
                </div>
              </section>
            </div>

            {data &&
              data
                .sort(() => Math.random() - 0.5)
                .slice(0, 1)
                .map((singlepost) => (
                  <div
                    className="card lg:card-side bg-base-100 shadow-xl"
                    id={`${singlepost.id}`}
                  >
                    <figure>
                      <img
                        src={`http://51.20.138.46/${singlepost.image}`}
                        alt="DiagnocarImage"
                      />
                    </figure>
                    <div className="card-body text-right">
                      <h2 className="card-title">{singlepost.title}</h2>
                      <p>{singlepost.paragraph.slice(0, 250)}</p>...
                      <div className="card-actions justify-end">
                        <Link
                          to={`/onepost/${singlepost.id}`}
                          className="btn btn-primary"
                        >
                          خوێنەربە
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}


                
            <div class="container my-24 mx-auto md:px-6">
              <section class="mb-32 text-center md:text-left">
                {data &&
                  data
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 10)
                    .map((post) => (
                      <div class="mb-6 flex flex-wrap">
                        <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                          <div
                            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            <img
                              src={`http://51.20.138.46/${post.image}`}
                              class="w-full"
                              alt="Louvre"
                            />
                            <Link
                              className="link-info"
                              to={`../onepost/${post.id}`}
                            >
                              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                            </Link>
                          </div>
                        </div>

                        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                          <h5 class="mb-3 text-lg font-bold">{post.title}</h5>

                          <p class="text-base-content truncate" dir="rtl">
                            {post.paragraph}
                          </p>
                        </div>
                      </div>
                    ))}
                {data &&
                  data
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5)
                    .map((singlepost) => (
                      <div
                        className="card lg:card-side bg-base-100 shadow-xl mt-5"
                        id={`${singlepost.id}`}
                      >
                        <figure>
                          <img
                            src={`http://51.20.138.46/${singlepost.image}`}
                            alt="DiagnocarImage"
                          />
                        </figure>
                        <div className="card-body text-right">
                          <h2 className="card-title">{singlepost.title}</h2>
                          <p>{singlepost.paragraph.slice(0, 250)}</p>...
                          <div className="card-actions justify-end">
                            <Link
                              to={`/onepost/${singlepost.id}`}
                              className="btn btn-primary"
                            >
                              خوێنەربە
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
              </section>
            </div>




          </div>
        </div>
      </div>
      <footer>
        <Footerdashbord />
      </footer>
    </div>
  );
}

export default Posts;
