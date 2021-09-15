import React from "react";

const Contacto = () => (
  <>
    <br/>
    <h2 style={{textAlign: "center"}}>Llena el formulario y un asesor se pondrá en contacto</h2>
    <br/>
    <form>
      <div className="ed-container">
        <div className="ed-item l-50 form__item">
          <label className="t4">
            Nombre:
            <input type="text" name="nombre" />
          </label>
        </div>
        <div className="ed-item l-50 form__item">
          <label className="t4">
            Apellidos:
            <input type="text" name="apellidos" />
          </label>
        </div>
        <div className="ed-item l-50 form__item">
          <label className="t4">
            Número personal:
            <input type="number" name="numero" />
          </label>
        </div>
        <div className="ed-item l-50 form__item">
          <label className="t4">
            Correo:
            <input type="email" name="correo" />
          </label>
        </div>
        <div className="ed-item l-100 form__item">
          <textarea placeholder="Escriba su mensaje"></textarea>
        </div>
        <div className="ed-item l-20 form__item">
          <input
            className="button small center"
            type="submit"
            value="Enviar Información"
          />
        </div>
      </div>
    </form>
  </>
);

export default Contacto;
