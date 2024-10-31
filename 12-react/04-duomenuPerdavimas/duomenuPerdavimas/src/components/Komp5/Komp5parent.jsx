import Komp5child from "./Komp5child";

const Komp5parent = () => {
  let articles = [
    { id: 1, title: "pirmas", text: "abcabc" },
    { id: 2, title: "antras", text: "abcabcabc" },
    { id: 3, title: "trecias", text: "abcabcabcabc" },
    { id: 4, title: "ketvirtas", text: "abcabcabcabcabc" },
    { id: 5, title: "penktas", text: "abcabcabcabcabcabcabcabcabcabc" },
  ];
  return (
    <div>
      <div className="articles-list-v1">

        <Komp5child article={articles[0]} />
        <Komp5child article={articles[0]} />
        <Komp5child article={articles[1]} />
        <Komp5child article={articles[2]} />
        <Komp5child article={articles[3]} />
      </div>
      <div className="articles-list-v2">
        {articles.map((str) => {
          return <Komp5child key={str.id} article={str} />;
        })}
      </div>
    </div>
  );
};

export default Komp5parent;
