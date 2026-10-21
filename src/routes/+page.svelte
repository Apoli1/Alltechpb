<script>
  import Logo from '$lib/components/Logo.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<section class="header">
  <div class="container">
    <Logo />
    <Navbar />
    <a href="https://wa.me/558386759992" class="btn-whatsapp" target="_blank" rel="noopener">Orçamento pelo WhatsApp</a>
  </div>
</section>

<section class="hero">
  <div class="container">
    <p class="hero-eyebrow">Tecnologia e Segurança</p>
    <h1>Proteção inteligente para sua residência ou empresa</h1>
    <p class="lead">Instalação e manutenção de CFTV, alarmes, cerca elétrica, controle de acesso, redes de computadores e energia solar com suporte técnico integrado em João Pessoa/PB.</p>
    <div class="hero-actions">
      <a href="https://wa.me/558386759992?text=Olá,%20gostaria%20de%20um%20orçamento%20de%20segurança%20e%20tecnologia." class="btn-primary" target="_blank" rel="noopener">Solicitar orçamento</a>
      <a href="/servicos" class="btn-ghost">Conhecer serviços</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="eyebrow">Serviços principais</p>
      <h2>Soluções completas de tecnologia e segurança</h2>
      <p>Fornecimento, instalação, configuração e manutenção integradas para residências, empresas e comércios.</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/cctv.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>CFTV</h3>
        <p>Instalação e manutenção de sistemas de circuito fechado de televisão com monitoramento remoto.</p>
      </div>
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/alarm.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>Alarmes</h3>
        <p>Sistemas de alarme intrusão com sensores e notificação para proteção patrimonial.</p>
      </div>
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/electric-fence.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>Cerca Elétrica</h3>
        <p>Cercas elétricas perimetrais com instalação certificada e manutenção preventiva.</p>
      </div>
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/access-control.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>Controle de Acesso</h3>
        <p>Biometria, cartões e senhas para gestão de entrada e saída de pessoas e veículos.</p>
      </div>
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/network.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>Redes / TI</h3>
        <p>Instalação e configuração de redes, roteadores, servidores e infraestrutura de TI.</p>
      </div>
      <div class="service-card">
        <div class="service-icon" aria-hidden="true">
          <img src="/icons/solar.svg" alt="" width="24" height="24" style="vertical-align: middle;" class="icon-gold">
        </div>
        <h3>Energia Solar</h3>
        <p>Projeto e instalação de sistemas fotovoltaicos para economia de energia.</p>
      </div>
    </div>
  </div>
</section>

<section class="section diferencial">
  <div class="container">
    <h2>Diferencial AllTech</h2>
    <p>Fornecimento, instalação, configuração e manutenção integradas, com atendimento técnico próximo e soluções personalizadas para cada cliente.</p>
    <a href="https://wa.me/558386759992" class="btn-primary" target="_blank" rel="noopener">Falar pelo WhatsApp</a>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="eyebrow">Atendemos</p>
      <h2>Quem confia na AllTech</h2>
      <p>Soluções adaptadas ao perfil e à necessidade de cada tipo de imóvel e negócio.</p>
    </div>
    <div class="audience-grid">
      <div class="audience-item"><strong>Residências</strong><span>Proteção para sua família</span></div>
      <div class="audience-item"><strong>Empresas</strong><span>Segurança patrimonial corporativa</span></div>
      <div class="audience-item"><strong>Condomínios</strong><span>Controle e monitoramento de áreas comuns</span></div>
      <div class="audience-item"><strong>Comércios</strong><span>Segurança para lojas e pontos de venda</span></div>
      <div class="audience-item"><strong>Escritórios</strong><span>Infraestrutura de rede e controle de acesso</span></div>
      <div class="audience-item"><strong>PMEs</strong><span>Pequenos e médios negócios</span></div>
    </div>
  </div>
</section>

<section class="cta-final">
  <div class="container">
    <h2>Quer um orçamento sem compromisso?</h2>
    <p>Fale com a AllTech pelo WhatsApp e solicite uma visita técnica em João Pessoa/PB.</p>
    <a href="https://wa.me/558386759992?text=Olá,%20gostaria%20de%20solicitar%20uma%20visita%20t%C3%A9cnica%20da%20AllTech." class="btn-primary" target="_blank" rel="noopener">Orçamento pelo WhatsApp</a>
  </div>
</section>

<Footer />