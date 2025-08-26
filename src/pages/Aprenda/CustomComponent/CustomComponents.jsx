import Quizz from "../Quizz/Quizz";

export function CustomComponent({ type, className, data }) {
  switch (type) {
    case "quizz":
      return (
        <>
          <Quizz />
        </>
      );

    case "content":
      return (
        <>
          {data.map((url, idx) => (
            <iframe
              key={idx}
              className={className}
              width="560"
              height="315"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </>
      );

    default:
      return null;
  }
}
