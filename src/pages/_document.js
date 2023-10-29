import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="purplevery" />
        <meta property="og:url" content={"team.purplevery.co.kr"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/ogImage.png" />
        <meta
          property="og:description"
          content="사랑하는 사람들과 성공으로 가는 과정을 계획하는데 함께하겠습니다."
        />
        <meta property="og:site_name" content="PURPLEVERY" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale" content="en_US" />
        {/* <meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" />  */}
        <meta name="twitter:title" content="purplevery" />
        <meta
          property="twitter:description"
          content="사랑하는 사람들과 성공으로 가는 과정을 계획하는데 함께하겠습니다."
        />
        <meta name="twitter:image" content="/images/ogImage.png" />
        <link rel="canonical" href="team.purplevery.co.kr" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" sizes="180x180" />
        <meta
          property="description"
          content="사랑하는 사람들과 성공으로 가는 과정을 계획하는데 함께하겠습니다."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
