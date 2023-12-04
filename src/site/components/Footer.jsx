export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <section id="footer" className="footer">
      <ul>
        <a href="">
          <iconify-icon icon="ic:baseline-facebook"></iconify-icon>
        </a>
        <a href="">
          <iconify-icon icon="ri:instagram-fill"></iconify-icon>
        </a>
        <a href="">
          <iconify-icon icon="formkit:whatsapp"></iconify-icon>
        </a>
        <a href="">
          <iconify-icon icon="mdi:github"></iconify-icon>
        </a>
      </ul>

      <a className="footer-tag" href="">
        contato@webdev.com.br.com
      </a>

      <i>Desenvolvido pela Web.Dev - {ano}</i>
    </section>
  )
}
