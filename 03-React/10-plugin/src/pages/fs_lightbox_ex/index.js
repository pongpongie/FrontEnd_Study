import React, { memo, useState } from "react";

import styled from "styled-components";

import FsLightBox from "fslightbox-react";

const FsLightboxExContainer = styled.div``;

import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";

const FsLightboxEx = memo(() => {
  const [singleToggler, setSingleToggler] = useState(false);

  const [multiToggler, setMultiToggler] = useState({ open: false, index: 1 });

  const [youtubeToggler, setYoutubeToggler] = useState(false);

  const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
    open: false,
    index: 1,
  });

  return (
    <FsLightboxExContainer>
      <h1>FsLightboxEx</h1>
      <h2>Single Gallery</h2>

      <div>
        <button
          className="btn"
          onClick={(e) => {
            setSingleToggler(!singleToggler);
          }}
        >
          <img src={img1} alt="img1" width={150} />
        </button>
        <FsLightBox sources={[img1]} toggler={singleToggler}></FsLightBox>
      </div>

      <h2>Multi Gallery</h2>
      <div>
        <button
          className="btn"
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 1 })
          }
        >
          <img src={img1} alt="img1" width={150} />
        </button>
        <button
          className="btn"
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 2 })
          }
        >
          <img src={img2} alt="img2" width={150} />
        </button>
        <button
          className="btn"
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 3 })
          }
        >
          <img src={img3} alt="img3" width={150} />
        </button>
        <button
          className="btn"
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 4 })
          }
        >
          <img src={img4} alt="img4" width={150} />
        </button>
        <button
          className="btn"
          onClick={(e) =>
            setMultiToggler({ open: !multiToggler.open, index: 5 })
          }
        >
          <img src={img5} alt="img5" width={150} />
        </button>
        <FsLightBox
          toggler={multiToggler.open}
          sources={[img1, img2, img3, img4, img5]}
          slide={multiToggler.index}
        />
      </div>
      <h2>Youtube Single Link</h2>
      <div>
        <button
          className="btn"
          onClick={(e) => setYoutubeToggler(!youtubeToggler)}
        >
          <img
            src="https://img.youtube.com/vi/MFqfFUTGp2M/maxresdefault.jpg"
            alt="img1"
            width="150"
          />
        </button>
        <FsLightBox
          toggler={youtubeToggler}
          sources={[
            "https://www.youtube.com/watch?v=MFqfFUTGp2M&ab_channel=isn%27tart%3F",
          ]}
        />
      </div>
    </FsLightboxExContainer>
  );
});

export default FsLightboxEx;
