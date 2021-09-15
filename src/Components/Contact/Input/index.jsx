export default function Input({ name, type, placeholder, id }) {
  return (
    <>
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        className="inputLog"
      />
    </>
  );
}
