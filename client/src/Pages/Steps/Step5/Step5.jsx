import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
import "../styles.css";
import Transition from "../../../Components/Transition/Transition";

export default function Step5() {
  return (
   <Transition direction='right'>
   <section className="steps-section">
   <div className="steps-container">
     <div className="step-title-container">
       <Title
         number="5"
         title="Pendências e dívidas"
         description="Como saber se tenho pendência na Receita Federal ?"
       />
     </div>
     <div className="step-features">
       <div className="one">
         <div className="text">
           <h3>Pendências e dívidas</h3>
           <p>
             Para verificar pendência no Imposto de Renda é muito fácil:
             antes de tudo, você só vai precisar ter acesso ao portal e-CAC.
             Caso não tenha, precisará gerar um código de acesso. Para isso,
             você deve ter em mãos CPF ou CNPJ, bem como os números dos
             recibos de entrega das declarações do Imposto de Renda dos
             últimos dois anos.
             <br /> <br />
             Com o código de acesso e senha para o e-CAC, você poderá fazer o
             login no portal, utilizando seu CPF ou CNPJ. Aí, basta fazer a
             consulta:
           </p>
         </div>
         <div className="pass-btns">
           <Link to="/step4">Retornar etapa anterior</Link>
           <Link to="/final">
             <Button title="Continuar" />
           </Link>
         </div>
         <div className="box">
           <ul>
             <li>
               Ao logar, busque a opção “Certidões e Situação Fiscal” e,
               depois, clique em “Consulta Pendências – Situação Fiscal”.
             </li>
             <li>
               Você vai poder gerar um relatório com suas informações
               cadastrais e analisar se possui ou não pendências.
             </li>
             <li>
               Busque as orientações de regularização e as instruções
               necessárias para resolver pendências na Receita Federal ou
               como parcelar suas dívidas no próprio portal.{" "}
             </li>
             <li>
               Também é possível verificar quais processos administrativos
               você precisará cumprir, caso existam.
             </li>
             <li>
               Verifique quais são os programas do Leão necessários para se
               adequar às obrigações e baixe-os. Se tiver declaração de IR de
               anos anteriores não entregues, por exemplo, precisará baixar o
               programa do Imposto Renda correspondente ao ano não enviado.
             </li>
             <li>
               Se tiver valores devidos, você também vai poder emitir pelo
               portal o seu DARF para pagamento. O valor é calculado
               automaticamente.
             </li>
             <li>
               Pague o DARF pelo caixa eletrônico ou internet banking do seu
               banco até o vencimento informado para não gerar ainda mais
               juros.
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </section>
   </Transition>
  );
}
