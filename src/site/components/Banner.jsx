export default function Banner() {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 banner-text">
            <h1>
              Uma plataforma de CRM simples de configurar e fácil de usar.
            </h1>
            <br />

            <button type="button" className="btn btn-dark btn-lg btn-banner">
              Criar uma conta
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-lg btn-banner"
            >
              Fazer login
            </button>

            <br />
            <i>Gerencie seus clientes em um único lugar.</i>
          </div>

          <div className="col-lg-6 banner-img">
            <img src="/image/web.png" alt="imagem de um computador" />
          </div>
        </div>
      </div>
    </section>
  )
}
