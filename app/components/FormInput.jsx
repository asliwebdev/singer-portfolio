const FormInput = ({ label, name, type, inputRef }) => {
  return (
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          className="textarea bg-white placeholder:text-[#21202466] text-black"
          placeholder="Xabaringizni qoldiring..."
          required
          rows="6"
          ref={inputRef}
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          className="input bg-white text-black"
          ref={inputRef}
        />
      )}
    </div>
  );
};

export default FormInput;
