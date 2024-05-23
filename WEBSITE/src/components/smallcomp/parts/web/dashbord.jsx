import { Box, Chip, CssBaseline, Typography } from "@mui/material";
import exampleImage from "../../../../assets/images/image.jpg";
import exampleImage2 from "../../../../assets/images/image2.jpg";
import {
  MultiActionAreaCard,
  TextCard,
} from "../../smallcompindashbord/postcard";
import Posttabs from "../../smallcompindashbord/posttabs";
import Footerdashbord from "../../smallcompindashbord/footerdashbord";
import Imagedashbord from "../../smallcompindashbord/imagedashbord";
import { getValueFromAccsess } from "../../../../assets/js/userauth";
import Calender from "@mui/icons-material/Event";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Addcenter from "../../smallcompindashbord/addcenter";
import Packages from "../system/packages";
import Buttons from "../../smallcompindashbord/appdownlode";

document.addEventListener("DOMContentLoaded", function () {
  const stats = document.querySelectorAll(".stat-value");

  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"));
    let current = 0;
    const increment = target / 100; // Change the increment for smoother animation

    const updateStat = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateStat);
      } else {
        stat.textContent = target;
      }
    };

    updateStat();
  });
});

var usernameProfile = getValueFromAccsess("username");

function Dashbord() {
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
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };
  function postscrollefttoright () {
    return ( <div className="flex" style={{ overflow: "scroll" }}>
          {data &&
            data
              .slice(0, 10)
              .map((post) => (
                <TextCard Id={post.id} Title={post.title} Text={post.paragraph} />
              ))}
        </div>)
  }
  
  return (
        <div className=" text-base-content ">
          <CssBaseline />
    
          {usernameProfile ? null : (
            <>
              <Imagedashbord
                image={exampleImage}
                text="لە بری تـۆ !ئـێـمــە  بەدوای کێشــەی ئۆتـۆمبێلەکەت دەگەڕێین"
                loc="right"
               
              />
              <Imagedashbord
                image={exampleImage2}
                text=" دایاگنۆ کار هەنگاوێکی نوێ لە بواری ئۆتۆمبێل لەهەرێمی کوردستان"
              />
            </>
          )}
    
          <div dir="rtl">
            <div class="container mx-auto md:px-6 px-3 pt-20">
              <section class="mb-32 text-right ">
                {data &&
                  data
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 1)
                    .map((post) => (
                      <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div class="mb-6 md:mb-0">
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
    
                        <div>
                          <h3 class="mb-3 text-2xl font-bold">{post.title}</h3>
    
                          <p class="text-base-content  hover:text-clip ">
                            {post.paragraph.slice(0, 250)} ...
                          </p>
                          <div class="flex justify-end items-center">
                            <div dir="ltr">
                              <Chip
                                color="primary"
                                icon={<Calender />}
                                label={formatDate(post.time)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
    
                <div dir="ltr" className="my-2 w-25">
                  <Addcenter height={"300px"} />
                </div>
              </section>
            </div>
            <Typography
              className="bg-base-200 text-base-content"
              sx={{
                textAlign: "center",
                marginTop: "20px",
              }}
              variant="h4"
            ></Typography>
            {Loding ? (
              <div className="flex justify-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : null}
            <Box
              sx={{
                display: "flex",
                padding: "5%",
                flexDirection: "row", // Default direction: horizontal for desktop
                flexWrap: "wrap", // Allows items to wrap to the next line if space is insufficient
                justifyContent: "space-between", // Adjust spacing between items
                "@media (max-width: 600px)": {
                  flexDirection: "column", // Change to vertical direction for mobile (below 600px)
                  alignItems: "center",
                  justifyContent: "space-between", // Center items in the column for mobile view
                },
              }}
            >
              {data &&
                data
                  .slice(0, 4)
                  .map((post) => (
                    <MultiActionAreaCard
                      Id={post.id}
                      imageSource={`http://51.20.138.46/${post.image}`}
                      Title={post.title}
                      Text={post.paragraph}
                    />
                  ))}
            </Box>
          </div>
          <div style={{ overflow: "hidden", width: "100%" }} dir="rtl">
            <Posttabs />
          </div>
          <div class="container pt-10  md:px-6">
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
                        <Link className="link-info" to={`../onepost/${post.id}`}>
                          <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                            <div class="flex h-full items-end justify-end text-right">
                              <div class="m-6 text-white">
                                <h5 class="mb-3 text- FONTREG">{post.title}</h5>
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
          <Packages/>
         {postscrollefttoright()}
      {Buttons()}

      <footer>
        <Footerdashbord />
      </footer>
    </div>
  );
}

export default Dashbord;
