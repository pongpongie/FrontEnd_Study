import React, { memo, useCallback } from "react";

import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img1 from "../../assets/img/img1.png";

const SweetAlertExContainer = styled.div`
  .btn {
  }
`;

const SweetAlertEx = memo(() => {
  const MySwal = withReactContent(Swal);

  const onButton1Click = useCallback(() => {
    MySwal.fire({
      title: "Promise",
      text: "sweet alert를 사용한 메시지 박스 테스트입니다",
      icon: "info",
      footer:
        "<a href='https://sweetalert2.github.io'>sweetalert2에 대해 궁금해?</a>",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        MySwal.fire("확인 버튼을 눌렀습니다.");
      } else if (result.isDismissed && result.dismiss == "backdrop") {
        MySwal.fire("화면의 빈 공간을 눌렀습니다.");
      }
    });
  });

  const onButton2Click = useCallback(async () => {
    const result = await MySwal.fire({
      title: "Async Await",
      text: "sweet alert를 사용한 메시지 박스 테스트입니다",
      icon: "success",
      footer:
        "<a href='https://sweetalert2.github.io'>sweetalert2에 대해 궁금해?</a>",
    });
  });

  const onButton3Click = useCallback(async () => {
    const result = await MySwal.fire({
      imageUrl: img1,
      imageWidth: "95%",
      imageAlt: "Photo",
      title: "My photo",
    });
  });

  const onButton4Click = useCallback(async () => {
    const result = await MySwal.fire({
      title: "확인",
      icon: "question",
      showCloseButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "네",
      denyButtonText: "아니오",
      cancelButtonText: "나중에",
    });
  });

  const onButton5Click = useCallback(async () => {
    const result = await MySwal.fire({
      title: "<strong style='color:#fff'>HTML <u>example </u></strong>",
      icon: "info",
      html: "<p style='color:#fff' > you can use <b>bold text </b> , <a href='https://sweetalert2.github.io'>links</a> and another html tags</p>",
      background: `url(${img1})`,
    });
  });

  return (
    <SweetAlertExContainer>
      <h2>SweetAlertEx</h2>
      <button type="button" onClick={onButton1Click}>
        Button1
      </button>
      <button type="button" onClick={onButton2Click}>
        Button2
      </button>
      <button type="button" onClick={onButton3Click}>
        Button3
      </button>
      <button type="button" onClick={onButton4Click}>
        Button4
      </button>
      <button type="button" onClick={onButton5Click}>
        Button5
      </button>
    </SweetAlertExContainer>
  );
});

export default SweetAlertEx;
