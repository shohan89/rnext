export default function Avatar() {
    const style = {
        width: 100,
        height: 100,
        borderRadius: 50
    }
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";
  return (
    <img
      style={style}
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}