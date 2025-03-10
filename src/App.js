import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Card, Container, Button, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { ArrowBelow, ArrowSide, CruzRojaLogo, IconoHeader, Isotipo, LogoCorreo, LogoFace, LogoFotter, LogoInsta, LogoLinkedin, LogoMedicare, LogoSinIsotipo, MedicalConsultation, MedicalTourism, MedicareNatual, MenuButton, SMI, Telemedicine, VirtualHospital, VirtualPharmacy } from './images/images';
import './style.css'

const App = () => {

  const [language, setLanguage] = useState('en');
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991); // Mobile breakpoint
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };


  const texts = {
    en: {
      about: 'About Us',
      services: 'Our Services',
      strategicAlliances: 'Strategic Alliances',
      clients: 'Our Clients',
      app: 'App',
      contact: 'Contact',
      heroTitle: 'Global technology solutions for Health and Business Productivity',
      heroSubtitle: 'We provide today the medical services of tomorrow',
      buttonText: 'Go to consultation',
      aboutTitle: 'At Medacare, we offer <strong>comprehensive health solutions,</strong> combining cutting-edge <strong>technology with quality medical care.</strong>',
      aboutSubtitle: 'Our goal is to enhance business productivity and quality of life through our innovative health services, accessible anytime and anywhere.',
      servicesTitle1: '<strong>Accessible</strong>, personalized,',
      servicesTtle2: 'and <strong>barrier-free health care</strong>',
      serviceTitles: {
        telemedicine: 'Telemedicine',
        virtualHospital: 'Virtual Hospital',
        virtualPharmacy: 'Virtual Pharmacy',
        medicalTourism: 'Medical Tourism',
        medicareNatural: 'Medacare Natural',
        medicalConsultation: 'Medical Consultation',
      },
      strategicAlliancesTitle1: 'For your <strong>well-being</strong>',
      strategicAlliancesTitle2: '<strong>and trust</strong>',
      clientsDescription: 'Medacare is ideal for companies and groups from various sectors. Our program is designed to provide medical care to employees and collaborators efficiently and accessibly.',
      telemedicineAppTitle: 'Telemedicine App',
      telemedicineAppTitle2: 'Go to the App',
      telemedicineAppDescription: 'Register to get unlimited access to medical consultations with our specialists, all from the comfort of your home or workplace.',
      footerDescription: 'We innovate healthcare, transform lives, and empower businesses.',
      footerContact: 'info@medacarehealth.com',
      footerAddressUS: '78370 Highway 111 Suite 270, La Quinta, CA, 92253',
      footerAddressMX: 'México: Ave Rayón No. 472, Zona Centro, Ensenada, B.C. CP. 22800',
      servicesDescriptions: {
        telemedicine: [
          'Medical consultations remotely without the need to travel.',
          '24/7 accessibility for you and your family.',
          'Available on any device (cell phone, computer, tablet).',
        ],
        virtualHospital: [
          'Direct connection between patients and doctors 24/7.',
          'Pre- and post-medical intervention service remotely.',
        ],
        virtualPharmacy: [
          'Quick and efficient medication dispensing without lines or delays.',
          'Virtual prescriptions sent directly to your pharmacy of choice.',
        ],
        medicalTourism: [
          'Medical services for tourists at their travel destination.',
          'Coverage throughout the stay in hotels and with travel operators.',
        ],
        medicareNatural: [
          'Alternative therapies, natural medicine, and holistic treatments.',
          'Online sale of botanical products.',
        ],
        medicalConsultation: [
          'Primary and specialized care in various health areas.',
          'Mental health services, nutritional counseling, and psychological therapy.',
        ],
      },
      ourClientsTitle1: 'Our Clients',
      ourClientsTitle: 'We care for those who <strong>trust us</strong>',
      ourClientsDescription: 'Medacare is ideal for companies and groups from various sectors. Our program is designed to provide medical care to employees and collaborators efficiently and accessibly.',
      clientsList: [
        'Schools',
        'Unions',
        'Government Departments',
        'Manufacturing Plants',
        'Medical Organizations',
        'Hospitals, Clinics, and Medical Offices',
        'Insurance Companies',
        'Banks',
        'Hotels and Travel Operators',
      ],
      telemedicineAppSubtitle: 'Access our',
      footerText: 'We innovate healthcare, transform lives, and empower businesses.',

    },
    es: {
      about: 'About us',
      services: 'Nuestros Servicios',
      strategicAlliances: 'Alianzas Estratégicas',
      clients: 'Nuestros Clientes',
      app: 'Aplicación',
      contact: 'Contacto',
      heroTitle: 'Soluciones globales de la tecnología para la Salud y Productividad Empresarial',
      heroSubtitle: 'Proveemos hoy los servicios médicos del mañana',
      buttonText: 'Ir a consulta',
      aboutTitle: 'En Medacare, ofrecemos <strong>soluciones integrales</strong> en el ámbito de la salud, combinando <strong>tecnología</strong> de punta con <strong>atención médica de calidad.</strong>',
      aboutSubtitle: 'Nuestro objetivo es mejorar la productividad empresarial y la calidad de vida a través de nuestros servicios de salud innovadores, accesibles en cualquier momento y lugar.',
      servicesTitle1: '<strong>Salud</strong> accesible,',
      servicesTtle2: 'personalizada y <strong>sin barreras.</strong>',
      serviceTitles: {
        telemedicine: 'Telemedicina',
        virtualHospital: 'Hospital Virtual',
        virtualPharmacy: 'Farmacia Virtual',
        medicalTourism: 'Turismo Médico',
        medicareNatural: 'Medacare Natural',
        medicalConsultation: 'Consulta Médica',
      },
      strategicAlliancesTitle1: 'Para tu <strong>bienestar</strong>',
      strategicAlliancesTitle2: '<strong>y confianza</strong>',

      clientsDescription: 'Medacare es ideal para empresas y grupos de diversos sectores. Nuestro programa está diseñado para brindar atención médica a empleados y colaboradores de manera eficiente y accesible.',
      telemedicineAppTitle: 'App de Telemedicina',
      telemedicineAppTitle2: 'Ir a la App',
      telemedicineAppDescription: 'Regístrate para obtener acceso ilimitado a consultas médicas con nuestros especialistas, todo desde la comodidad de tu hogar o lugar de trabajo.',
      footerDescription: 'Innovamos la atención médica, transformamos vidas y empoderamos empresas.',
      footerContact: 'info@medacarehealth.com',
      footerAddressUS: '78370 Highway 111 Suite 270, La Quinta, CA, 92253',
      footerAddressMX: 'México: Ave Rayón No. 472, Zona Centro, Ensenada, B.C. CP. 22800',
      servicesDescriptions: {
        telemedicine: [
          'Consultas médicas a distancia sin necesidad de desplazamientos.',
          'Acceso 24/7 para ti y tu familia.',
          'Disponibilidad en cualquier dispositivo (celular, computadora, tablet).',
        ],
        virtualHospital: [
          'Conexión directa entre pacientes y médicos las 24 horas.',
          'Servicio pre y post intervención médica a distancia.',
        ],
        virtualPharmacy: [
          'Surtido rápido y eficiente de medicamentos sin filas ni demoras.',
          'Recetas virtuales enviadas directamente a tu farmacia de elección.',
        ],
        medicalTourism: [
          'Servicios médicos para turistas en su destino de viaje, con atención médica internacional.',
          'Cobertura durante toda la estancia en hoteles y operadores de viaje.',
        ],
        medicareNatural: [
          'Terapias alternativas, medicina natural y tratamientos holísticos.',
          'Venta en línea de productos botánicos.',
        ],
        medicalConsultation: [
          'Atención primaria y especializada en diversas áreas de la salud (bronquitis, alergias, problemas menstruales, estrés, etc.).',
          'Servicios de salud mental, asesoramiento nutricional y terapia psicológica.',
        ],
      },
      ourClientsTitle1: 'Nuestros Clientes',
      ourClientsTitle: 'Nos preocupamos por aquellos que <strong>confían en nosotros</strong>',
      ourClientsDescription: 'Medacare es ideal para empresas y grupos de diversos sectores. Nuestro programa está diseñado para proporcionar atención médica a empleados y colaboradores de manera eficiente y accesible.',
      clientsList: [
        'Escuelas',
        'Sindicatos',
        'Departamentos gubernamentales',
        'Plantas manufactureras',
        'Organizaciones médicas',
        'Hospitales, clínicas y consultorios médicos',
        'Compañías de seguros',
        'Bancos',
        'Hoteles y operadores turísticos',
      ],
      telemedicineAppSubtitle: 'Accede a nuestra',
      footerText: 'Innovamos la salud, transformamos vidas y potenciamos empresas.',

    }
  };



  return (
    <div className="container-fluid p-0 contesnt m-0">
      <Container style={{ padding: 0, margin: 0 }}>
        <Navbar expand="lg" onToggle={handleNavbarToggle} expanded={isNavbarCollapsed}>
          <Navbar.Brand href="#" className="navbar-brand-container">
            <Container className="isotipo-container mobile-logo">
              <Isotipo />
            </Container>
            <Container className="">
              <span className="desktop-logo"><LogoMedicare /></span>
              <Container className='logo-center'>
                <span className="mobile-logo"><LogoSinIsotipo /></span>
              </Container>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom" >
            <MenuButton />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="#about" className="mx-3 text-dark text-wrapper">{texts[language].about}</Nav.Link>
              <Nav.Link href="#services" className="mx-3 text-dark text-wrapper">{texts[language].services}</Nav.Link>
              <Nav.Link href="#strategicalliances" className="mx-3 text-dark text-wrapper">{texts[language].strategicAlliances}</Nav.Link>
              <Nav.Link href="#ourClients" className="mx-3 text-dark text-wrapper">{texts[language].clients}</Nav.Link>
              <Nav.Link href="#app" className="mx-3 text-dark text-wrapper">{texts[language].app}</Nav.Link>
              <Nav.Link href="#contact" className="mx-3 text-dark text-wrapper">{texts[language].contact}</Nav.Link>
            </Nav>
            <div className="language-switcher">
              <ToggleButtonGroup type="radio" name="language" value={language} onChange={handleLanguageChange}>
                <ToggleButton id="lang-es" value="es" className={`toggle-btn ${language === 'es' ? 'active' : ''}`}>Spanish</ToggleButton>
                <ToggleButton id="lang-en" value="en" className={`toggle-btn ${language === 'en' ? 'active' : ''}`}>English</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      {/* Hero Section */}
      <header className="hero-section">
        <Container className="text-center hero-content">
          <Container className="hero-icon">
            <IconoHeader />
          </Container>
          <h1 className="hero-title">
            {texts[language].heroTitle}
          </h1>
          <p className="hero-subtitle">
            {texts[language].heroSubtitle}
          </p>
          <Button onClick={() => window.open("https://app.medacarehealth.com/", "_blank")}
            variant="dark" className="hero-button">{texts[language].buttonText}</Button>
        </Container>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <Container className="about-container">
          <Card className="about-box">
            <Row className="align-items-center">
              {/* "About Us" Button */}
              <Container className="about-usButton">{texts[language].about}</Container>

              {/* Arrow Icon */}
              <Container className="about-usButton about-ArrowButton">
                <ArrowBelow />
              </Container>
            </Row>

            {/* Title and Subtitle */}
            <h2 className="highlightText" dangerouslySetInnerHTML={{ __html: texts[language].aboutTitle }}></h2>

            <p className="subtitle">
              {texts[language].aboutSubtitle}
            </p>
          </Card>
        </Container>
      </section>

      <section id="services" className="services-section">
        <Container className="text-center">
          <Container className="ourServices mx-auto">{texts[language].services}</Container>
          <Container className='text-ourservicestitle'>
            <h2 className="textServices" dangerouslySetInnerHTML={{ __html: texts[language].servicesTitle1 }}></h2>
            <h2 className="textServices" dangerouslySetInnerHTML={{ __html: texts[language].servicesTtle2 }}></h2>

            {isMobile ? (
              <Container className="services-grid">
                <Card className="service-box service-0" style={{ backgroundColor: "#FBAE1C" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <div className="service-icon"><Telemedicine /></div>
                    </Col>
                    <Col>
                      <h5 className="title-services">{texts[language].serviceTitles.telemedicine}</h5>
                    </Col>
                  </Row>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.telemedicine.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-1" style={{ backgroundColor: "#E8EDEC" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">

                      <div className="service-icon"><VirtualHospital /></div>
                    </Col>
                    <Col>

                      <h5 className="title-services">{texts[language].serviceTitles.virtualHospital}</h5>
                    </Col>
                  </Row>

                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.virtualHospital.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>
                <Card className="service-box service-3" style={{ backgroundColor: "#FBAE1C" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">

                      <div className="service-icon"><MedicalTourism /></div>
                    </Col>
                    <Col>

                      <h5 className="title-services">{texts[language].serviceTitles.medicalTourism}</h5>
                    </Col>
                  </Row>

                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicalTourism.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>


                <Card className="service-box service-2" style={{ backgroundColor: "#E8EDEC" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">

                      <div className="service-icon"><VirtualPharmacy /></div>
                    </Col>
                    <Col>

                      <h5 className="title-services">{texts[language].serviceTitles.virtualPharmacy}</h5>
                    </Col>
                  </Row>

                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.virtualPharmacy.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>


                <Card className="service-box service-4" style={{ backgroundColor: "#6BC652" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">

                      <div className="service-icon"><MedicareNatual /></div>
                    </Col>
                    <Col>

                      <h5 className="title-services">{texts[language].serviceTitles.medicareNatural}</h5>
                    </Col>
                  </Row>

                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicareNatural.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-5" style={{ backgroundColor: "#E8EDEC" }}>
                  <Row className="align-items-center">
                    <Col xs="auto">

                      <div className="service-icon"><MedicalConsultation /></div>
                    </Col>
                    <Col>

                      <h5 className="title-services">{texts[language].serviceTitles.medicalConsultation}</h5>
                    </Col>
                  </Row>

                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicalConsultation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Container>

            ) : (
              <Container className="services-grid">
                <Card className="service-box service-0" style={{ backgroundColor: "#FBAE1C" }}>
                  <div className="service-icon"><Telemedicine /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.telemedicine}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.telemedicine.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-1" style={{ backgroundColor: "#E8EDEC" }}>
                  <div className="service-icon"><VirtualHospital /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.virtualHospital}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.virtualHospital.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-2" style={{ backgroundColor: "#E8EDEC" }}>
                  <div className="service-icon"><VirtualPharmacy /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.virtualPharmacy}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.virtualPharmacy.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-3" style={{ backgroundColor: "#FBAE1C" }}>
                  <div className="service-icon"><MedicalTourism /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.medicalTourism}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicalTourism.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-4" style={{ backgroundColor: "#6BC652" }}>
                  <div className="service-icon"><MedicareNatual /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.medicareNatural}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicareNatural.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="service-box service-5" style={{ backgroundColor: "#E8EDEC" }}>
                  <div className="service-icon"><MedicalConsultation /></div>
                  <h5 className="title-services">{texts[language].serviceTitles.medicalConsultation}</h5>
                  <ul className='text-boxes'>
                    {texts[language].servicesDescriptions.medicalConsultation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Container>

            )}

          </Container>
        </Container>
      </section>


      {/* Strategic Alliances Section */}
      <section id="strategicalliances" className="services-section">
        <Container className="text-center">
          <div className="ourServices mx-auto">{texts[language].strategicAlliances}</div>

          <h2 className="textServices" dangerouslySetInnerHTML={{ __html: texts[language].strategicAlliancesTitle1 }}></h2>
          <h2 className="textServices" dangerouslySetInnerHTML={{ __html: texts[language].strategicAlliancesTitle2 }}></h2>


          <div className='strategic-alliance'>
            <Row>
              <Col className='svg-cruz' >
                <CruzRojaLogo />
              </Col>
              <Col className='svg-smi' >
                <SMI />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section id="ourClients" className="about-section">
        <Container className="about-container">
          <div className="ourClients-box">
            <Row className="clients-content d-flex align-items-center">

              {/* Left Side - Image & Text */}
              <Col lg={6} md={12} className="clients-image">
                <div className="ourClients-header">

                  <Row><Container className="ourClients-usButton">
                    {texts[language].ourClientsTitle1}
                  </Container>
                    <Container className="ourClients-usButton ourClients-ArrowButton">
                      <ArrowSide />
                    </Container>
                  </Row>
                </div>


                {isMobile ? (
                  <>
                    <h2 className="highlightTexts" dangerouslySetInnerHTML={{ __html: texts[language].ourClientsTitle }}></h2>
                    <p className="clients-description">{texts[language].ourClientsDescription}</p>
                    <img src="/images/familyimage.png" alt="Our Clients" className="clients-img" />
                  </>
                ) : (
                  <>
                    <h2 className="highlightTexts" dangerouslySetInnerHTML={{ __html: texts[language].ourClientsTitle }}></h2>
                    <img src="/images/familyimage.png" alt="Our Clients" className="clients-img" />
                    <p className="clients-description">{texts[language].ourClientsDescription}</p>
                  </>
                )}
              </Col>

              {/* Right Side - Clients List */}
              <Col lg={6} md={12} className="clients-list-wrapper">
                <div className="clients-list">
                  <ul>
                    {texts[language].clientsList.map((client, index) => (
                      <li key={index}>{client}</li>
                    ))}
                  </ul>
                </div>
              </Col>

            </Row>
          </div>
        </Container>
      </section>

      <section id="app" className="app-section">
        <Container className="text-center">
          <Row className='hello'>
            <div className="apptelemedicine mx-auto">{texts[language].telemedicineAppTitle}</div>

            <h2 className="textServices">{texts[language].telemedicineAppSubtitle}</h2>
            <h2 className="textServices"><strong>{texts[language].telemedicineAppTitle}</strong></h2>
          </Row>

          <div className='strategic-alliance'>
            <Row>
              <Container className='emptysquare'>
                {/* Espacio vacío según diseño */}
              </Container>
            </Row>

            <Row className='mx-auto'>
              <Col className='mx-auto'>
                <p className='textapp'>
                  {texts[language].telemedicineAppDescription}
                </p>
              </Col>
            </Row>

            <Row className='mx-auto'>
              <Col className='mx-auto'>
                <Container
                  className="yellowApp mx-auto"
                  onClick={() => window.open("https://app.medacarehealth.com/", "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  {texts[language].telemedicineAppTitle2}</Container>
              </Col>
            </Row>
            <Row>
              <Container className='emptysquare2'>
                {/* Espacio vacío según diseño */}
              </Container>
            </Row>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <footer id="contact" className="text-white p-4" style={{ backgroundColor: "#131313" }}>
        <Container className="">
          {isMobile ? (

            <>
              <Row className="justify-content-center text-center">
                <Col className="footer-column">
                  <h5 className="footer-logo"><LogoFotter /></h5>
                  <p className="fotter-text"> {texts[language].footerText}</p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col md={2} className="footer-column fotter-mexico">
                  <h5 className="footer-title">United States</h5>
                  <p className="fotter-text">78370 Highway 111 Suite 270,</p>
                  <p className="fotter-text"> La Quinta, CA, 92253</p>
                </Col>
                <Col md={2} className="footer-column fotter-mexico">
                  <h5 className="footer-title">México</h5>
                  <p className="fotter-text1"><strong>Management:</strong> Ave Rayón No. 472, Zona Centro, Ensenada, B.C. CP. 22800</p>
                  <p className="fotter-text1"><strong>Medacare Natural - Botanical:</strong> Calle Cuarta 2083 Local 15, Col. Obrera, Ensenada, B.C CP. 22830</p>
                  <p className="fotter-text1"><strong>Clinics Príncipe Salud:</strong> Calzada del Tecnológico 2100 Local 342, Otay Constituyentes, 22457 Tijuana, B.C.</p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col md={2} className="social-icons">
                  <LogoFace />
                  <LogoInsta />
                  <LogoLinkedin />
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col md={1} className="footer-email">
                  <LogoCorreo /> <span className="fotter-text">
                    <a style={{ textDecoration: 'none', color: 'inherit' }}
                      href="mailto:info@medacarehealth.com" className="footer-text">
                      info@medacarehealth.com
                    </a>
                  </span>
                </Col>
              </Row>
            </>
          ) : (

            <Row className="justify-content-between align-items-start">
              <Col md={4} className="footer-column">
                <h5 className="footer-title"><LogoFotter /></h5>
                <p className="fotter-text">We innovate healthcare, transform lives, and empower businesses.</p>
                <div className="social-icons">
                  <LogoFace />
                  <LogoInsta />
                  <LogoLinkedin />
                </div>
                <Row>
                  <Col md={1}><LogoCorreo /></Col>
                  <Col className="foter-correo"><p className="fotter-text">                  <a style={{ textDecoration: 'none', color: 'inherit' }}
                    href="mailto:info@medacarehealth.com" className="footer-text">
                    info@medacarehealth.com
                  </a>
                  </p></Col>
                </Row>
              </Col>
              <Col md={4} className="footer-column">
                <h5 className="footer-title">United States</h5>
                <p className="fotter-text">78370 Highway 111 Suite 270,</p>
                <p className="fotter-text"> La Quinta, CA, 92253</p>

              </Col>
              <Col md={4} className="footer-column fotter-mexico">
                <h5 className="footer-title">México</h5>
                <p className="fotter-text1"><strong>Management:</strong> Ave Rayón No. 472, Zona Centro, Ensenada, B.C. CP. 22800</p>
                <p className="fotter-text1"><strong>Medacare Natural - Botanical:</strong> Calle Cuarta 2083 Local 15, Col. Obrera, Ensenada, B.C CP. 22830</p>
                <p className="fotter-text1"><strong>Clinics Príncipe Salud:</strong> Calzada del Tecnológico 2100 Local 342, Otay Constituyentes, 22457 Tijuana, B.C.</p>
              </Col>
            </Row>
          )}
        </Container>
      </footer>
    </div>
  );
};

export default App;
