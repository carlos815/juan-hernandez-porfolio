import userData from "../userData/userData";

export const getYoutubeData = async () => {
  const youtubeSearchApi = "https://www.googleapis.com/youtube/v3/search";
  const channelId = userData.channelId;

  userData.channelId;
  if (!process.env.DEV_ENV) {
    console.log("Request to youtube");
    const youtubeRes = await fetch(
      `${youtubeSearchApi}?part=snippet&maxResults=50&channelId=${channelId}&key=${process.env.YOUTUBE_API_KEY}`
    );
    if (youtubeRes.status !== 200) {
      console.log(youtubeRes);
    }

    const youtubeData = await youtubeRes.json();
    return youtubeData;
  } else {
    //Mock data for dev mode
    console.log("Using mock data for youtube");
    const youtubeData = {
      kind: "youtube#searchListResponse",
      etag: "qm0I965nvsqKjllBWCjFg3d87wk",
      regionCode: "CO",
      pageInfo: {
        totalResults: 6,
        resultsPerPage: 6,
      },
      items: [
        {
          kind: "youtube#searchResult",
          etag: "NDnbvx7I14TbjZjRUQLrhgD_4PA",
          id: {
            kind: "youtube#channel",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
          },
          snippet: {
            publishedAt: "2021-09-28T21:31:03Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "Juan Hernández",
            description: "",
            thumbnails: {
              default: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuf2GmMYRfdFOMK9Yjl-1h02Sxb18NJpRlTQOgZnFciwA8V5zxP_r0bhx0a7FT=s88-c-k-c0xffffffff-no-rj-mo",
              },
              medium: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuf2GmMYRfdFOMK9Yjl-1h02Sxb18NJpRlTQOgZnFciwA8V5zxP_r0bhx0a7FT=s240-c-k-c0xffffffff-no-rj-mo",
              },
              high: {
                url: "https://yt3.ggpht.com/ytc/AKedOLRuf2GmMYRfdFOMK9Yjl-1h02Sxb18NJpRlTQOgZnFciwA8V5zxP_r0bhx0a7FT=s800-c-k-c0xffffffff-no-rj-mo",
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2021-09-28T21:31:03Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "OAZTwhGap6lEmZ7prPTkf4EiO2I",
          id: {
            kind: "youtube#video",
            videoId: "--gwwIal4UU",
          },
          snippet: {
            publishedAt: "2021-09-30T21:11:02Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "MOCK",
            description:
              "En este tutorial vamos a diseñar una página de inicio de sesión utilizando Figma! Secciones: (00:00) Introducción (00:00) ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/--gwwIal4UU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/--gwwIal4UU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/--gwwIal4UU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2021-09-30T21:11:02Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "NQuCnlgUq0HCHWas41Ye66d3VI8",
          id: {
            kind: "youtube#video",
            videoId: "lAf9FG8xf8g",
          },
          snippet: {
            publishedAt: "2021-12-28T18:44:19Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "MOCK DATA",
            description:
              "Ya sabemos qué tenemos que diseñar, así que ya podemos crear nuestra interfaz: ⌨️(0:00:08) Left Panel ⌨️(0:12:25) Header ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/lAf9FG8xf8g/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/lAf9FG8xf8g/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/lAf9FG8xf8g/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2021-12-28T18:44:19Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "y20agt17v6b0rF355HddCAaDK3M",
          id: {
            kind: "youtube#video",
            videoId: "L9bhRqGmLJI",
          },
          snippet: {
            publishedAt: "2022-01-10T23:12:04Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "MOCK DATA",
            description:
              "Y finalmente, este es el video final donde ya podemos ver cómo quedó este diseño una vez maquetado. En este video, no solo ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/L9bhRqGmLJI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/L9bhRqGmLJI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/L9bhRqGmLJI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2022-01-10T23:12:04Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "kR2bnHqb8_K88_nphQjtyD7jwEc",
          id: {
            kind: "youtube#video",
            videoId: "Sf-6n_KjPLM",
          },
          snippet: {
            publishedAt: "2021-12-28T18:44:17Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "MOCK DATA",
            description:
              "Ahora, veamos cómo, a partir de un boceto hecho a mano creamos el wireframe de baja fidelidad para identificar qué ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2021-12-28T18:44:17Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "K3veUBeYP_jAY8wwCZR3Vi5HtJY",
          id: {
            kind: "youtube#video",
            videoId: "6eI3qIJanjI",
          },
          snippet: {
            publishedAt: "2021-12-28T18:44:13Z",
            channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
            title: "MOCK DATA",
            description:
              "Este es primer video, hablamos un poco de las fundaciones sobre las que vamos a crear nuestro proyecto; una vista rápida a los ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6eI3qIJanjI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6eI3qIJanjI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6eI3qIJanjI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Juan Hernández",
            liveBroadcastContent: "none",
            publishTime: "2021-12-28T18:44:13Z",
          },
        },
      ],
    };
    return youtubeData;
  }
};
