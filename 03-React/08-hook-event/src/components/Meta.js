/**
 * <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */
// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
// 미리보기 이미지 샘플
import sample from "../assets/img/sample.jpg";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = ({ title = "08-hook-event", description = "08-hook-event 예제 입니다.", author = "호쌤",
                subject = "React.js Frontend Programming", copyright = "Lee K.H",
                keywords = "React", url = window.location.href, image = sample,
                icon = null, shortcutIcon = null, appleTouchIcon = null }) => {

    let urlPrefix = "";

    if (window?.location) {
        urlPrefix = window.location.protocol+'//'+window.location.hostname+(window.location.port && ':'+window.location.port);
    }

    if (image && !image.startsWith('http') && urlPrefix) {
        image = urlPrefix + image;
    }

    if (url && !url.startsWith('http') && urlPrefix) {
        url = urlPrefix + url;
    }

    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
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
                {image && <meta property="og:image" content={image} /> }
                {icon && <link rel="icon" href={icon} type="image/png" /> }
                {shortcutIcon && <link rel="shortcut icon" href={shortcutIcon} type="image/png" /> }
                {appleTouchIcon && <link rel="apple-touch-icon" href={appleTouchIcon} type="image/png" /> }
                {/* 구글 웹폰트 적용 */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" rel="stylesheet" />
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;
