import React from 'react'
import logo from '../assets/logo.png'

const FullPage = () => {
    // document.querySelector('header button').addEventListener("click", function => (
    //     document.querySelector('.form').classList.toggle('hide')
    // }
    return (
        <>
            <header>
                <img className="logo" src={logo} alt=" Imagem de DOE"/>
                <h2>A sua doação importa</h2>
                <p>Até 3 vidas com 1 doação</p>
                <p>Mais de 38.000 doações sao necessárias todos os dias</p>
                <p>Apenas 1,9% da população brasileira, doa sangue.</p>
                <button>Quero ajudar!</button>
            </header>

            <section className="form hide">
                <h2>Entre na lista de doadores</h2>
                <form action="/" method="">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nome Completo"
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                    />
                    <input 
                        type="text" 
                        name="blood"
                        placeholder="Tipo Sanguineo"
                    />
                    <button>Quero ajudar</button>
                </form>
            </section>

            <main>
                <h2>Ultimos <span>doadores</span></h2>
                <section className="donors">
                    <div className="donor">
                        <div className="blood">AB+</div>
                        <p>Diego Fernandes</p>
                    </div>
                    <div className="donor">
                        <div className="blood">B+</div>
                        <p>Cleiton Souza</p>
                    </div>
                    <div className="donor">
                        <div className="blood">A+</div>
                        <p>Robson Marques</p>
                    </div>
                    <div className="donor">
                        <div className="blood">O+</div>
                        <p>Mayk Brito</p>
                    </div>

                </section>
            </main>

            <footer>
                Com <span>❤️</span> Rocketseat
            </footer>
            
        </>
    )
            
}
export default FullPage