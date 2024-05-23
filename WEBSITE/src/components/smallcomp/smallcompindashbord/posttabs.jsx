import Box from "@mui/material/Box";
import { MultiActionAreaCard } from "./postcard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BasicTabs() {
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

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {Loding ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : null}
      <input style={{width:'120px'}}
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab max-sm:text-sm "
        aria-label="نوێترین بڵاوکراوە"
        checked
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            },
          }}
        >
          {data &&
            data
              .slice(4, 8)
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

      <input style={{width:'120px'}}
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab max-sm:text-sm"
        aria-label="زۆرترین بینراو"
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
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


    </div>
  );
}
