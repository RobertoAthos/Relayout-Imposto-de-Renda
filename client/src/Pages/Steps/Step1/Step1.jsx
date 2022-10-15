import React, { useState } from "react";
import Title from "../../../Components/Title/Title";
import "../styles.css";
import { data } from "./data";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import Transition from "../../../Components/Transition/Transition";

export default function Step1() {
  const [rendas] = useState(data.rendas);
  const [bens] = useState(data.bens);
  const [pagamentos] = useState(data.pagamentos);
  const [dividas] = useState(data.dividas);

  return (
    <Transition direction="right">
    <section className="steps-section">
    <div className="steps-container">
      <div className="step-title-container">
        <Title
          number="1"
          title="Movimentações e patrimônios"
          description="Veja todas as opções ao lado que correspondem a atividades de rendas recebidas."
        />
      </div>
      <div className="step-features">
        <div className="features">
          <div className="one">
            <div className="text">
              <h3>RENDAS E GANHOS</h3>
              <p>
                Veja todos os itens que correspondem a formas de rendas ou
                outros tipos de ganhos que você teve em 2021.
              </p>
            </div>
            <div className="items">
              {rendas.map((items, index) => (
                <div key={index} className="items-card">
                  <p>{items.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="one">
            <div className="text">
              <h3>BENS E DIREITOS</h3>
              <p>
                Veja todos os itens que correspondem a qualquer tipo de bens,
                direitos ou patrimônios que você possuía em 2021.
              </p>
            </div>
            <div className="pass-btns">
              <Link to="/welcome">Retornar etapa anterior</Link>
              <Link to="/step2">
                <Button title="Continuar" />
              </Link>
            </div>
            <div className="items">
              {bens.map((items, index) => (
                <div key={index} className="items-card">
                  <p>{items.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="one">
            <div className="text">
              <h3>PAGAMENTOS EFETUADOS</h3>
              <p>
                Veja todos os itens que correspondem a pagamentos ou impostos
                que você pagou em 2021.
              </p>
            </div>
            <div className="items">
              {pagamentos.map((items, index) => (
                <div key={index} className="items-card">
                  <p>{items.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="one">
            <div className="text">
              <h3>DÍVIDAS E PENDÊNCIAS</h3>
              <p>
                Veja todos os itens que correspondem a qualquer tipo de dívida
                ou pendências com a Receita Federal ou outros órgãos que você
                possuía em 2021.
              </p>
            </div>
            <div className="items">
              {dividas.map((items, index) => (
                <div key={index} className="items-card">
                  <p>{items.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </Transition>
  );
}
