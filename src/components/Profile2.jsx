function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export default function Profile2({ person, size }) {
  return (
    <>
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(`${person.imageID}`)}
          alt={person.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards} </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </>
  );
}
