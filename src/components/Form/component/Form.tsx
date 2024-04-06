import useForm from "../hook/useForm";
import "./Form.scss";

export const Form = () => {
  const { form, handleField, handleSubmit } = useForm();

  return (
    <form className="Form">
      <div className="field">
        <div className="label">Nombre: </div>
        <input
          type="text"
          onChange={(e) => handleField("name", e.target.value)}
        />
      </div>
      <div className="field">
        <div className="label">No. Cuenta:</div>
        <input
          type="number"
          onChange={(e) => handleField("account", e.target.value)}
        />
      </div>
      <div className="field">
        <div className="label">Clave:</div>
        <input
          type="password"
          onChange={(e) => handleField("password", e.target.value)}
        />
      </div>
      <div className="field">
        <div className="label">Color:</div>
        <input
          type="color"
          onChange={(e) => handleField("color", e.target.value)}
        />
      </div>
      <button
        style={{ background: form.color }}
        className="submit"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </form>
  );
};
