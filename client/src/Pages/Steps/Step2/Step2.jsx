import React from "react";
import Title from "../../../Components/Title/Title";
import "../styles.css";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Transition from "../../../Components/Transition/Transition";

export default function Step2() {
  return (
    <Transition direction='right'>
    <section className="steps-section">
    <div className="steps-container">
      <div className="step-title-container">
        <Title
          number="2"
          title="Enviar documentos"
          description="Com base nos dados informados na etapa anterior precisaremos de alguns documentos seus. 
                  Confira e anexe os documentos necessários."
        />
      </div>
      <div className="step-features">
        <div className="one">
          <div className="text">
            <h3>DOCUMENTOS NECESSÁRIOS</h3>
            <p>
              De acordo com as informações apresentadas, precisaremos dos
              documentos a seguir para comprovar seus bens e movimentações.
            </p>
          </div>
          <div className="pass-btns">
            <Link to="/step1">Retornar etapa anterior</Link>
            <Link to="/step3">
              <Button title="Continuar" />
            </Link>
          </div>
          <div className="box">
            <ul>
              <li>Informe de rendimentos Caixa Econômica</li>
              <li>Informe de rendimentos Nubank</li>
              <li>Importação fo Carnê Leão </li>
              <li>
                Comprovante de rendimentos da empresa que você trabalhou
              </li>
              <li>Comprovante de rendimentos MEI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </Transition>
  );
}
