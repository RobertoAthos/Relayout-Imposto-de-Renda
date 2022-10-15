import React from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'
import Button from '../../../Components/Button/Button'
import Title from '../../../Components/Title/Title'
import Transition from "../../../Components/Transition/Transition";

export default function Step3() {
  return (
    <Transition direction='right'>
    <section className='steps-section'>
    <div className='steps-container'>
        <div className='step-title-container'>
            <Title
              number='3'
              title='Rendas e Ganhos'
              description='Veja as opções de renda e ganhos que você provavelmente teve em 2021.'
            />
        </div>
        <div className='step-features'>
            <div className='one'>
                <div className='text'>
                  <h3>Imposto de Renda 2022</h3>
                  <p>São tributáveis pelo IRPF os rendimentos (como salários, benefícios e remuneração por serviços prestados), ganhos de capital, juros e outras rendas (como aluguéis e direitos autorais) ou proventos (como aposentadoria).</p>
                </div>
                <div className='text'>
                  <h3>Alcance</h3>
                  <p>As pessoas físicas domiciliadas ou residentes no Brasil, titulares de disponibilidade econômica ou jurídica de renda ou proventos de qualquer natureza, inclusive rendimentos e ganhos de capital, são contribuintes do imposto de renda, sem distinção da nacionalidade, sexo, idade, estado civil ou profissão.
                  São também contribuintes as pessoas físicas que perceberem rendimentos de bens de que tenham a posse como se lhes pertencessem, de acordo com a legislação em vigor.</p>
                </div>
                <div className='text'>
                  <h3>Obrigatoriedade</h3>
                  <p>Está obrigada a apresentar a Declaração de Ajuste Anual do Imposto sobre a Renda referente ao exercício de 2022 a pessoa física residente no Brasil que, no ano-calendário de 2021:</p>
                  <div className='box'>
                  <ul>
                        <li>Recebeu rendimentos tributáveis sujeitos ao ajuste anual na declaração, cuja soma foi superior a R$ 28.559,70, tais como: rendimentos do trabalho assalariado, não assalariado, proventos de aposentadoria, pensões, aluguéis, atividade rural;</li>
                        <li>Recebeu rendimentos isentos, não tributáveis ou tributados exclusivamente na fonte, cuja soma foi superior a R$ 40.000,00;</li>
                        <li>Realizou em qualquer mês do ano-calendário:- alienação de bens ou direitos em que foi apurado ganho de capital, sujeito à incidência do imposto; ou operações em bolsa de valores, de mercadorias, de futuros e assemelhadas;</li>
                        <li>Teve a posse ou a propriedade de bens ou direitos, em 31/12/2021, inclusive terra nua, cujo valor total foi superior a R$ 300.000,00;</li>
                        <li>Passou à condição de residente no Brasil e encontrava-se nessa condição em 31 de dezembro.</li>
                        <li> Relativamente à atividade rural, com o preenchimento do Demonstrativo da Atividade Rural: - obteve receita bruta superior a R$ 142.798,50; ou - pretenda compensar, no ano-calendário de 2021 ou posteriores, prejuízos de anos calendário anteriores ou do próprio ano-calendário de 2020;</li>
                        <li>optou pela isenção do imposto sobre a renda incidente sobre o ganho de capital auferido na venda de imóveis residenciais, cujo produto da venda seja aplicado na aquisição de imóveis residenciais localizados no País, no prazo de 180 dias contados da celebração do contrato de venda, nos termos do art. 39 da Lei nº 11.196, de 21 de novembro de 2005;</li>
                        <li>recebeu auxílio emergencial para enfrentamento da emergência de saúde pública de importância internacional decorrente da doença causada pelo Coronavírus identificado em 2019 (Covid-19), em qualquer valor, e outros rendimentos tributáveis em valor anual superior a R$ 22.847,76 (vinte e dois mil, oitocentos e quarenta e sete reais e setenta e seis centavos).</li>
                </ul>
                </div>  
                </div>
                <div className="pass-btns">
                    <Link to='/step2'>Retornar etapa anterior</Link>
                    <Link to='/step4'><Button title='Continuar'/></Link>
                </div>
               
            </div>
        </div>
    </div>

</section>
    </Transition>
  )
}
