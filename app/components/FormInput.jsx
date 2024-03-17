const FormInput = ({ label, name, type }) => {
  return (
    <div className="form-control mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          className={`textarea bg-white placeholder:text-[#21202466]`}
          placeholder="Xabaringizni qoldiring..."
          required
          rows="6"
        />
      ) : (
        <input type={type} name={name} required className={`input bg-white`} />
      )}
    </div>
  );
};

export default FormInput;
