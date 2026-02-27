import Profile2 from "./Profile2";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile2
        person={{
          name: "Maria Skłodowska-Curie",
          imageID: "szV5sdG",
          profession: "physicist and chemist",
          awards: 4,
          discovered: "polonium (chemical element)",
        }}
        size={100}
      />
      <Profile2
        person={{
          name: "Katsuko Saruhashi",
          imageID: "YfeOqp2",
          profession: "geochemist",
          awards: 2,
          discovered: "method for measuring carbon dioxide in seawater",
        }}
        size={70}
      />
    </div>
  );
}
