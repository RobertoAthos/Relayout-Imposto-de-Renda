import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
import Transition from "../../../Components/Transition/Transition";

export default function Step4() {
  return (
   <Transition direction='right'>
   <section className="steps-section">
   <div className="steps-container">
     <div className="step-title-container">
       <Title
         number="4"
         title="Bens e Direitos"
         description="Bens não são tributados, mas também precisam ser informados na declaração; saiba quais bens e direitos você precisa declarar e aprenda as regras para informar qualquer um deles."
       />
     </div>
     <div className="step-features">
       <div className="one">
         <div className="text">
           <h3>Bens e direitos no imposto de renda: o que informar ?</h3>
           <p>
             Na ficha de Bens e Direitos, você deverá optar pelo grupo e o
             código que melhor representam o bem que você está declarando.
             Mas, independentemente do tipo de bem ou direito, há algumas
             informações que você precisa prestar para todos eles. São elas:
           </p>
         </div>
         <div className="text">
           <div className="box">
             <ul>
               <li>
                 <strong className="strong-color">Localização:</strong>{" "}
                 informe o país onde se localiza o bem ou direito
               </li>
               <li>
                 <strong className="strong-color">Discriminação:</strong>{" "}
                 informe o bem ou direito, a espécie, além de data, valor e
                 circunstâncias de aquisição (por exemplo, se foi comprado à
                 vista ou a prazo, se foi recebido por doação ou herdado).
                 Informe também valor e circunstâncias de alienação (se venda
                 ou doação), quando for o caso.
               </li>
               <li>
                 <strong className="strong-color">
                   Situação em 31/12/2020:
                 </strong>{" "}
                 informe o valor constante nesta data na declaração de bens
                 do ano anterior. Caso o bem tenha sido adquirido em 2021,
                 este campo deve permanecer zerado.
               </li>
               <li>
                 <strong className="strong-color">
                   Situação em 31/12/2021:
                 </strong>{" "}
                 informe o valor do bem. Bens sempre devem ser declarados
                 pelo seu custo de aquisição. Seu valor na declaração de bens
                 não pode ser atualizado pelo preço de mercado. Caso o bem
                 tenha sido vendido ou doado em 2021, este campo deve
                 permanecer zerado.
               </li>
             </ul>
           </div>
         </div>
         <div className="text">
           <h3>
             Quais bens discriminar na declaração de imposto de renda 2022?
           </h3>
           <p>
             O contribuinte obrigado a entregar a declaração de imposto de
             renda 2022 precisa informar todos os bens e direitos localizados
             no Brasil ou no exterior pertencentes ao titular e também aos
             seus dependentes. São eles:
           </p>
         </div>
         <div className="text">
           <div className="box">
             <ul>
               <li>
                 Imóveis, veículos automotores, embarcações e aeronaves,
                 independentemente do seu valor de aquisição;
               </li>
               <li>
                 Outros bens móveis e direitos de valor de aquisição unitário
                 igual ou superior a R$ 5 mil;
               </li>
               <li>
                 Saldos de conta-corrente bancária, caderneta de poupança e
                 demais aplicações financeiras de valor individual superior a
                 R$ 140 em 31/12/2021;
               </li>
               <li>
                 Conjunto de ações, quotas ou quinhão de capital de uma mesma
                 empresa, negociados ou não em bolsa de valores, e de ouro,
                 ativo financeiro, cujo valor de aquisição unitário seja
                 igual ou superior a mil reais.
               </li>
             </ul>
           </div>
           <p>
             Bens de valores inferiores aos valores mínimos exigidos nas
             regras acima não precisam ser incluídos na declaração, embora
             incluí-los não gere prejuízo ao contribuinte.
           </p>

           <a
             href="https://www.seudinheiro.com/2022/imposto-de-renda/como-declarar-bens-e-direitos-no-imposto-de-renda-2022-julw/"
             _blank
           >
             Clique aqui para saber mais sobre !
           </a>
         </div>
         <div className="pass-btns">
           <Link to="/step3">Retornar etapa anterior</Link>
           <Link to="/step5">
             <Button title="Continuar" />
           </Link>
         </div>
       </div>
     </div>
   </div>
 </section>
   </Transition>
  );
}
