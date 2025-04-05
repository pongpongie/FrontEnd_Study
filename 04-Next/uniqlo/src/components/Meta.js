/**
 * <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
//import { Helmet, HelmetProvider } from "react-helmet-async";
import Head from "next/head";
// 미리보기 이미지 샘플
import sample from "../assets/img/sample.jpg";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = ({
  title = "uniqlo",
  description = "uniqlo project",
  author = "pongpongi",
  subject = "Next.js Frontend Programming",
  copyright = "Si hyun Lee",
  keywords = "Next.js",
  url = null,
  image = sample,
  icon = null,
  shortcutIcon = null,
  appleTouchIcon = null,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {/* SEO 태그 */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="subject" content={subject} />
      <meta name="copyright" content={copyright} />
      <meta name="content-language" content="ko" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {icon && <link rel="icon" href={icon} type="image/png" />}
      {shortcutIcon && (
        <link rel="shortcut icon" href={shortcutIcon} type="image/png" />
      )}
      {appleTouchIcon && (
        <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" />
      )}
      {/* 구글 웹폰트 적용 */}
    </Head>
  );
};

export default Meta;
