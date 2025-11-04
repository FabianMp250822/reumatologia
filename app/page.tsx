'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaStethoscope, FaHospital, FaUserMd, FaCalendarCheck, FaMicroscope, FaBook, FaChevronDown, FaBars, FaTimes, FaHeartbeat, FaBone, FaHandHoldingMedical, FaAmbulance, FaXRay, FaSyringe, FaVials, FaClinicMedical, FaNotesMedical, FaProcedures, FaUserNurse, FaFlask, FaPills, FaAllergies, FaWheelchair } from 'react-icons/fa'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Reumatología Clínica de la Costa" 
                width={280} 
                height={80}
                className="h-16 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#reumatologia" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                Reumatología
              </a>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition text-sm font-medium flex items-center space-x-1">
                  <span>Servicios</span>
                  <FaChevronDown className="text-xs" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#servicios-ambulatorios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Servicios Ambulatorios</a>
                    <a href="#servicios-transversales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Servicios Transversales</a>
                  </div>
                </div>
              </div>

              <a href="#sedes" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                Sedes
              </a>

              <a href="#investigacion" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                Investigación
              </a>

              <a href="#medicos" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                Médicos
              </a>

              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium">
                Contacto
              </a>

              <a 
                href="https://www.clinicadelacosta.com/appointment" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
              >
                Agendar Cita
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                <a href="#reumatologia" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2">
                  Reumatología
                </a>
                <a href="#servicios-ambulatorios" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2 pl-4">
                  • Servicios Ambulatorios
                </a>
                <a href="#servicios-transversales" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2 pl-4">
                  • Servicios Transversales
                </a>
                <a href="#sedes" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2">
                  Sedes
                </a>
                <a href="#investigacion" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2">
                  Investigación
                </a>
                <a href="#medicos" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2">
                  Médicos
                </a>
                <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition text-sm font-medium py-2">
                  Contacto
                </a>
                <a 
                  href="https://www.clinicadelacosta.com/appointment" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm font-medium text-center"
                >
                  Agendar Cita
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium">Líderes en Reumatología del Caribe Colombiano</p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Portafolio de Servicios<br />
              Integrales de Reumatología
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Atención de vanguardia para enfermedades autoinmunes y del aparato locomotor, con un enfoque humano y científico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#servicios-ambulatorios" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center shadow-xl">
                Conoce Nuestros Servicios
              </a>
              <a 
                href="https://www.clinicadelacosta.com/appointment" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center shadow-xl border-2 border-white"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalClinic",
                "@id": "https://reumatologia.vercel.app/#organization",
                "name": "Reumatología Clínica de la Costa",
                "description": "Clínica especializada en reumatología, líder en el Caribe Colombiano en el tratamiento de enfermedades reumáticas y autoinmunes",
                "url": "https://reumatologia.vercel.app",
                "logo": "https://reumatologia.vercel.app/logo.png",
                "image": "https://reumatologia.vercel.app/logo.png",
                "telephone": "+57-5-555-5555",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Barranquilla",
                  "addressRegion": "Atlántico",
                  "addressCountry": "CO"
                },
                "medicalSpecialty": "Rheumatology",
                "availableService": [
                  {
                    "@type": "MedicalProcedure",
                    "name": "Tratamiento de Artritis Reumatoide"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Tratamiento de Lupus Eritematoso"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Tratamiento de Fibromialgia"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Tratamiento de Gota"
                  },
                  {
                    "@type": "MedicalProcedure",
                    "name": "Tratamiento de Espondilitis"
                  }
                ]
              },
              {
                "@type": "Physician",
                "@id": "https://reumatologia.vercel.app/#jorge-perez",
                "name": "Dr. Jorge Pérez",
                "image": "https://reumatologia.vercel.app/doctors/jorge-perez.jpg",
                "jobTitle": "Director del Programa de Reumatología",
                "description": "Especialista en enfermedades autoinmunes sistémicas y artritis reumatoide",
                "medicalSpecialty": "Rheumatology",
                "memberOf": {
                  "@id": "https://reumatologia.vercel.app/#organization"
                }
              },
              {
                "@type": "Physician",
                "@id": "https://reumatologia.vercel.app/#antonio-iglesias",
                "name": "Dr. Antonio Iglesias",
                "image": "https://reumatologia.vercel.app/doctors/antonio-iglesias.jpg",
                "jobTitle": "Reumatólogo",
                "description": "Especialista en enfermedades reumáticas con amplia experiencia en el diagnóstico y tratamiento de patologías autoinmunes",
                "medicalSpecialty": "Rheumatology",
                "memberOf": {
                  "@id": "https://reumatologia.vercel.app/#organization"
                }
              },
              {
                "@type": "Physician",
                "@id": "https://reumatologia.vercel.app/#jesus-godoy",
                "name": "Dr. Jesús Godoy",
                "image": "https://reumatologia.vercel.app/doctors/jesus-godoy.jpg",
                "jobTitle": "Reumatólogo",
                "description": "Experto en el manejo integral de enfermedades del aparato locomotor y enfermedades reumáticas crónicas",
                "medicalSpecialty": "Rheumatology",
                "memberOf": {
                  "@id": "https://reumatologia.vercel.app/#organization"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://reumatologia.vercel.app/#website",
                "url": "https://reumatologia.vercel.app",
                "name": "Reumatología Clínica de la Costa",
                "description": "Portal de servicios integrales de reumatología",
                "publisher": {
                  "@id": "https://reumatologia.vercel.app/#organization"
                },
                "inLanguage": "es-CO"
              },
              {
                "@type": "WebPage",
                "@id": "https://reumatologia.vercel.app/#webpage",
                "url": "https://reumatologia.vercel.app",
                "name": "Reumatología Clínica de la Costa | Especialistas en Enfermedades Reumáticas",
                "description": "Líderes en Reumatología del Caribe Colombiano. Tratamiento especializado de artritis reumatoide, lupus, fibromialgia y enfermedades autoinmunes",
                "isPartOf": {
                  "@id": "https://reumatologia.vercel.app/#website"
                },
                "about": {
                  "@id": "https://reumatologia.vercel.app/#organization"
                },
                "inLanguage": "es-CO"
              }
            ]
          })
        }}
      />

      {/* ¿Qué es la Reumatología? */}
      <section id="reumatologia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">¿Qué es la Reumatología?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  La reumatología es la especialidad médica que se encarga del estudio, diagnóstico y tratamiento de las enfermedades del sistema musculoesquelético y del tejido conectivo.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Abarca un amplio espectro de más de 200 enfermedades diferentes que afectan las articulaciones, músculos, huesos y tejidos blandos, incluyendo enfermedades inflamatorias y autoinmunes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Áreas de Atención:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Enfermedades inflamatorias de las articulaciones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Enfermedades autoinmunes sistémicas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Trastornos metabólicos óseos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Enfermedades degenerativas articulares</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Enfermedades Reumatológicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">
              Tipos de Enfermedades Reumatológicas
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <DiseaseCard 
                title="Artritis Reumatoide"
                items={[
                  'Artritis Reumatoide',
                  'Espondilitis Anquilosante',
                  'Artritis Psoriásica',
                  'Artritis Reactiva'
                ]}
              />
              <DiseaseCard 
                title="Enfermedades Autoinmunes"
                items={[
                  'Lupus Eritematoso Sistémico',
                  'Síndrome de Sjögren',
                  'Esclerosis Sistémica',
                  'Polimiositis/Dermatomiositis'
                ]}
              />
              <DiseaseCard 
                title="Otras Condiciones"
                items={[
                  'Osteoartritis',
                  'Gota',
                  'Fibromialgia',
                  'Osteoporosis'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Ambulatorios */}
      <section id="servicios-ambulatorios" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Servicios Ambulatorios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Atención especializada integral para el diagnóstico y tratamiento de enfermedades reumáticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Consulta Especializada */}
              <ServiceSection 
                icon={<FaStethoscope className="text-4xl text-blue-600" />}
                title="Consulta Reumatológica Especializada"
                items={[
                  'Primera consulta diagnóstica',
                  'Consulta de seguimiento',
                  'Valoración pre-terapia biológica',
                  'Evaluación integral del paciente',
                  'Plan de tratamiento personalizado'
                ]}
              />

              {/* Exámenes Diagnósticos */}
              <ServiceSection 
                icon={<FaMicroscope className="text-4xl text-blue-600" />}
                title="Exámenes Diagnósticos"
                items={[
                  'Capilaroscopia',
                  'Densitometría ósea',
                  'Ecografía musculoesquelética',
                  'Análisis de líquido sinovial',
                  'Pruebas de laboratorio especializadas'
                ]}
              />

              {/* Procedimientos */}
              <ServiceSection 
                icon={<FaSyringe className="text-4xl text-blue-600" />}
                title="Procedimientos Especializados"
                items={[
                  'Infiltraciones articulares',
                  'Artrocentesis diagnóstica',
                  'Bloqueos articulares',
                  'Aplicación de terapias biológicas',
                  'Viscosuplemenatación'
                ]}
              />

              {/* Terapias */}
              <ServiceSection 
                icon={<FaPills className="text-4xl text-blue-600" />}
                title="Terapias Avanzadas"
                items={[
                  'Terapias biológicas',
                  'Inmunosupresores',
                  'Terapia con corticoides',
                  'Manejo del dolor',
                  'Medicina regenerativa'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asesoría de Enfermedades Reumatológicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">
              Asesoría de Enfermedades Reumatológicas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <AssessmentSection 
                title="Evaluación del estado de salud del paciente"
                items={[
                  'Historia clínica completa',
                  'Examen físico detallado',
                  'Evaluación de síntomas',
                  'Análisis de estudios previos',
                  'Valoración funcional'
                ]}
              />
              <AssessmentSection 
                title="Diseño de terapias individuales según paciente"
                items={[
                  'Plan de tratamiento personalizado',
                  'Selección de medicamentos apropiados',
                  'Ajuste de dosis según respuesta',
                  'Terapias combinadas',
                  'Seguimiento continuo'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cuatro Sedes en la Región Caribe */}
      <section id="sedes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
              Cuatro Sedes en la Región Caribe
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SedeCard 
                city="Barranquilla - Sede Principal"
                services={[
                  'Consulta especializada',
                  'Procedimientos',
                  'Terapias biológicas',
                  'Centro de investigación'
                ]}
              />
              <SedeCard 
                city="Barranquilla - Sede Norte"
                services={[
                  'Consulta especializada',
                  'Exámenes diagnósticos',
                  'Procedimientos',
                  'Seguimiento'
                ]}
              />
              <SedeCard 
                city="Santa Marta - Sede"
                services={[
                  'Consulta especializada',
                  'Procedimientos',
                  'Terapias',
                  'Diagnóstico'
                ]}
              />
              <SedeCard 
                city="Valledupar - Sede"
                services={[
                  'Consulta especializada',
                  'Exámenes',
                  'Procedimientos',
                  'Tratamiento'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Transversales */}
      <section id="servicios-transversales" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Servicios Transversales</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Servicios complementarios para una atención integral y multidisciplinaria
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TransversalService 
                icon={<FaUserNurse className="text-4xl text-blue-600" />}
                title="Enfermería Especializada"
                items={[
                  'Educación al paciente',
                  'Aplicación de medicamentos',
                  'Seguimiento de tratamiento',
                  'Cuidados especializados'
                ]}
              />
              <TransversalService 
                icon={<FaHandHoldingMedical className="text-4xl text-blue-600" />}
                title="Fisioterapia"
                items={[
                  'Rehabilitación articular',
                  'Terapia física',
                  'Ejercicios terapéuticos',
                  'Manejo del dolor'
                ]}
              />
              <TransversalService 
                icon={<FaNotesMedical className="text-4xl text-blue-600" />}
                title="Nutrición"
                items={[
                  'Asesoría nutricional',
                  'Dietas especializadas',
                  'Control de peso',
                  'Suplementación'
                ]}
              />
              <TransversalService 
                icon={<FaHeartbeat className="text-4xl text-blue-600" />}
                title="Psicología"
                items={[
                  'Apoyo emocional',
                  'Manejo de ansiedad',
                  'Terapia cognitiva',
                  'Grupos de apoyo'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centro de Investigación Clínica */}
      <section id="investigacion" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <FaFlask className="text-6xl mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Centro de Investigación Clínica</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Contribuyendo al avance de la reumatología a través de la investigación científica y estudios clínicos de vanguardia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <ResearchCard 
                title="Estudios Clínicos"
                description="Participación en ensayos clínicos internacionales para nuevos tratamientos y terapias innovadoras."
              />
              <ResearchCard 
                title="Investigación Aplicada"
                description="Desarrollo de protocolos de atención y mejores prácticas basadas en evidencia científica."
              />
              <ResearchCard 
                title="Publicaciones Científicas"
                description="Contribución al conocimiento médico a través de publicaciones en revistas especializadas."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Población Objetivo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">Población Objetivo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Nuestros servicios están dirigidos a pacientes con sospecha o diagnóstico confirmado de enfermedades reumáticas, autoinmunes y del aparato locomotor
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <PopulationCard 
                title="Pacientes Nuevos"
                description="Personas con síntomas como dolor articular, inflamación, rigidez matutina o manifestaciones autoinmunes que requieren evaluación especializada."
              />
              <PopulationCard 
                title="Pacientes en Seguimiento"
                description="Personas con diagnóstico establecido que necesitan monitoreo continuo, ajuste de tratamiento y evaluación de respuesta terapéutica."
              />
              <PopulationCard 
                title="Todas las Edades"
                description="Atención integral desde población pediátrica hasta adultos mayores, con enfoque especializado según la etapa de vida y necesidades específicas."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reumatólogos Expertos */}
      <section id="medicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">Reumatólogos Expertos</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Equipo médico altamente calificado con formación especializada y experiencia en el manejo de enfermedades reumáticas
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <DoctorCard 
                name="Dr. Jorge Pérez"
                specialty="Reumatólogo"
                description="Director del Programa de Reumatología. Especialista en enfermedades autoinmunes sistémicas y artritis reumatoide."
                image="/doctors/jorge-perez.jpg"
                isDirector={true}
              />
              <DoctorCard 
                name="Dr. Antonio Iglesias"
                specialty="Reumatólogo"
                description="Especialista en enfermedades reumáticas con amplia experiencia en el diagnóstico y tratamiento de patologías autoinmunes."
                image="/doctors/antonio-iglesias.jpg"
              />
              <DoctorCard 
                name="Dr. Jesús Godoy"
                specialty="Reumatólogo"
                description="Experto en el manejo integral de enfermedades del aparato locomotor y enfermedades reumáticas crónicas."
                image="/doctors/jesus-godoy.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso con la Calidad */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
              Nuestro Compromiso con la Calidad
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <CommitmentCard 
                icon={<FaStethoscope className="text-5xl text-blue-600" />}
                title="Excelencia Médica"
                description="Equipo de especialistas certificados con formación continua y actualización en los últimos avances de la reumatología."
              />
              <CommitmentCard 
                icon={<FaHeartbeat className="text-5xl text-blue-600" />}
                title="Atención Humanizada"
                description="Trato cálido y personalizado, entendiendo que cada paciente es único y merece atención individualizada."
              />
              <CommitmentCard 
                icon={<FaMicroscope className="text-5xl text-blue-600" />}
                title="Tecnología de Vanguardia"
                description="Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos."
              />
              <CommitmentCard 
                icon={<FaBook className="text-5xl text-blue-600" />}
                title="Medicina Basada en Evidencia"
                description="Decisiones clínicas fundamentadas en investigación científica y mejores prácticas internacionales."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Agenda Tu Cita</h2>
            <p className="text-xl text-gray-600 mb-10">
              Estamos aquí para ayudarte. Contáctanos y programa tu consulta con nuestros especialistas
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <ContactCard 
                icon={<FaPhone className="text-4xl text-blue-600" />}
                title="Teléfono"
                info="+57 (5) 336 8000"
                link="tel:+573053368000"
              />
              <ContactCard 
                icon={<FaWhatsapp className="text-4xl text-green-500" />}
                title="WhatsApp"
                info="+57 300 123 4567"
                link="https://wa.me/573001234567"
              />
              <ContactCard 
                icon={<FaEnvelope className="text-4xl text-blue-600" />}
                title="Email"
                info="reumatologia@clinicadelacosta.com"
                link="mailto:reumatologia@clinicadelacosta.com"
              />
            </div>
            <a 
              href="https://www.clinicadelacosta.com/appointment" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg shadow-xl"
            >
              Agendar Cita en Línea
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image 
                src="/logo.png" 
                alt="Reumatología Clínica de la Costa" 
                width={200} 
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Líderes en atención reumatológica en el Caribe Colombiano. Compromiso con la excelencia y el cuidado humanizado.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#servicios-ambulatorios" className="hover:text-blue-400 transition">Servicios Ambulatorios</a></li>
                <li><a href="#servicios-transversales" className="hover:text-blue-400 transition">Servicios Transversales</a></li>
                <li><a href="#investigacion" className="hover:text-blue-400 transition">Investigación Clínica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sedes</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Barranquilla - Principal</li>
                <li>Barranquilla - Norte</li>
                <li>Santa Marta</li>
                <li>Valledupar</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <FaPhone className="flex-shrink-0" />
                  <span>+57 (5) 336 8000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="flex-shrink-0" />
                  <span>reumatologia@clinicadelacosta.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="flex-shrink-0" />
                  <span>Barranquilla, Colombia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Servicio de Reumatología - Clínica de la Costa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573001234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  )
}

// Component: DiseaseCard
function DiseaseCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h4 className="text-lg font-bold mb-4 text-gray-800">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-blue-600 mt-1">•</span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: ServiceSection
function ServiceSection({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: AssessmentSection
function AssessmentSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-blue-50 p-8 rounded-xl">
      <h4 className="text-xl font-bold mb-4 text-gray-800">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: SedeCard
function SedeCard({ city, services }: { city: string; services: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center mb-4">
        <FaMapMarkerAlt className="text-3xl text-blue-600" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">{city}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-blue-600 text-xs mt-1">✓</span>
            <span className="text-gray-600 text-sm">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: TransversalService
function TransversalService({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-blue-600 text-xs mt-1">•</span>
            <span className="text-gray-600 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: ResearchCard
function ResearchCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  )
}

// Component: PopulationCard
function PopulationCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component: DoctorCard
function DoctorCard({ name, specialty, description, image, isDirector }: { name: string; specialty: string; description: string; image: string; isDirector?: boolean }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow relative">
      {isDirector && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Director
        </div>
      )}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image 
          src={image}
          alt={name}
          width={128}
          height={128}
          className="rounded-full object-cover w-full h-full border-4 border-blue-600"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{specialty}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

// Component: CommitmentCard
function CommitmentCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

// Component: ContactCard
function ContactCard({ icon, title, info, link }: { icon: React.ReactNode; title: string; info: string; link: string }) {
  return (
    <a 
      href={link}
      className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all hover:shadow-lg block"
    >
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-700 text-sm break-words">{info}</p>
    </a>
  )
}
