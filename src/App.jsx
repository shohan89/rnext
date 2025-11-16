import Form from "./components/Form";

export default function App() {
  const statuses = ["empty", "typing", "submitting", "error", "success"];
  return (
    <div>
      {statuses.map((status) => (
        <Form key={status} status={status} />
      ))}
    </div>
  );
}
