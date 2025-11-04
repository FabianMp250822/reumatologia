import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaStethoscope, FaHospital, FaUserMd, FaCalendarCheck, FaHeartbeat, FaBone, FaHandHoldingMedical, FaMicroscope, FaAmbulance, FaXRay, FaSyringe, FaVials, FaClinicMedical, FaNotesMedical, FaProcedures, FaUserNurse } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-blue-200 text-sm uppercase tracking-wider font-semibold">REUMATOLOGÍA</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Portafolio de Servicios<br />
              <span className="text-blue-300">Integrales de Reumatología</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Atención especializada y multidisciplinaria para el diagnóstico, tratamiento y seguimiento de enfermedades reumáticas
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué es la Reumatología? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">¿Qué es la Reumatología?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La reumatología es la especialidad médica que se encarga del estudio, diagnóstico y tratamiento de las enfermedades del sistema musculoesquelético y del tejido conectivo. Abarca un amplio espectro de más de 200 enfermedades diferentes que afectan las articulaciones, músculos, huesos y tejidos blandos.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Enfermedades inflamatorias de las articulaciones</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Enfermedades autoinmunes sistémicas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Trastornos metabólicos óseos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Enfermedades degenerativas articulares</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Enfermedades Reumatológicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Tipos de Enfermedades Reumatológicas</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Tratamiento especializado para diversas patologías del sistema musculoesquelético
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <DiseaseItem title="Artritis Reumatoide" />
            <DiseaseItem title="Lupus Eritematoso Sistémico" />
            <DiseaseItem title="Espondiloartritis" />
            <DiseaseItem title="Osteoartritis" />
            <DiseaseItem title="Fibromialgia" />
            <DiseaseItem title="Gota" />
            <DiseaseItem title="Síndrome de Sjögren" />
            <DiseaseItem title="Esclerosis Sistémica" />
            <DiseaseItem title="Vasculitis" />
            <DiseaseItem title="Polimialgia Reumática" />
            <DiseaseItem title="Osteoporosis" />
            <DiseaseItem title="Enfermedad Mixta del Tejido Conectivo" />
          </div>
        </div>
      </section>

      {/* Servicios Ambulatorios */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Servicios Ambulatorios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Consulta externa especializada con atención integral y seguimiento continuo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Consulta Externa Especializada */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <FaUserMd className="text-4xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Consulta Externa Especializada</h3>
              </div>
              <ul className="space-y-3">
                <ServiceListItem text="Primera consulta" />
                <ServiceListItem text="Consulta de seguimiento" />
                <ServiceListItem text="Consulta prioritaria" />
                <ServiceListItem text="Interconsulta hospitalaria" />
                <ServiceListItem text="Junta médica" />
              </ul>
            </div>

            {/* Ayudas Diagnósticas */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <FaMicroscope className="text-4xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Ayudas Diagnósticas</h3>
              </div>
              <ul className="space-y-3">
                <ServiceListItem text="Capilaroscopia" />
                <ServiceListItem text="Densitometría ósea" />
                <ServiceListItem text="Ecografía musculoesquelética" />
                <ServiceListItem text="Artrocentesis diagnóstica" />
                <ServiceListItem text="Biopsia de glándula salival" />
              </ul>
            </div>

            {/* Procedimientos Terapéuticos */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <FaSyringe className="text-4xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Procedimientos Terapéuticos</h3>
              </div>
              <ul className="space-y-3">
                <ServiceListItem text="Infiltración articular ecoguiada" />
                <ServiceListItem text="Infiltración de partes blandas" />
                <ServiceListItem text="Bloqueo de nervio periférico" />
                <ServiceListItem text="Viscosup lementación" />
                <ServiceListItem text="Artrocentesis terapéutica" />
              </ul>
            </div>

            {/* Medicina Biológica */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <FaVials className="text-4xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Medicina Biológica</h3>
              </div>
              <ul className="space-y-3">
                <ServiceListItem text="Infusión de medicamentos biológicos" />
                <ServiceListItem text="Aplicación de terapias dirigidas" />
                <ServiceListItem text="Monitoreo de efectos adversos" />
                <ServiceListItem text="Seguimiento farmacológico" />
                <ServiceListItem text="Asesoría en terapia biológica" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cuatro Sedes en la Región Caribe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Cuatro Sedes en la Región Caribe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <LocationCard 
              city="Barranquilla"
              subtitle="Sede Principal"
              address="Calle 77B #57-141"
              phone="(605) 385 8000"
            />
            <LocationCard 
              city="Cartagena"
              subtitle="Sede Norte"
              address="Calle 77B #57-141"
              phone="(605) 385 8000"
            />
            <LocationCard 
              city="Santa Marta"
              subtitle="Sede Costa"
              address="Calle 77B #57-141"
              phone="(605) 385 8000"
            />
            <LocationCard 
              city="Valledupar"
              subtitle="Sede Oriental"
              address="Calle 77B #57-141"
              phone="(605) 385 8000"
            />
          </div>
        </div>
      </section>

      {/* Servicios Transversales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Servicios Transversales</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Servicios complementarios para una atención integral del paciente reumático
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <TransversalServiceCard 
              icon={<FaClinicMedical className="text-5xl text-blue-600" />}
              title="Enfermería Especializada"
              services={[
                "Educación al paciente",
                "Administración de medicamentos",
                "Toma de muestras",
                "Curaciones"
              ]}
            />
            <TransversalServiceCard 
              icon={<FaHeartbeat className="text-5xl text-blue-600" />}
              title="Rehabilitación"
              services={[
                "Fisioterapia",
                "Terapia ocupacional",
                "Hidroterapia",
                "Ejercicio terapéutico"
              ]}
            />
            <TransversalServiceCard 
              icon={<FaNotesMedical className="text-5xl text-blue-600" />}
              title="Nutrición"
              services={[
                "Valoración nutricional",
                "Plan alimenticio",
                "Suplementación",
                "Seguimiento"
              ]}
            />
            <TransversalServiceCard 
              icon={<FaUserNurse className="text-5xl text-blue-600" />}
              title="Psicología"
              services={[
                "Evaluación psicológica",
                "Terapia individual",
                "Manejo del dolor",
                "Apoyo emocional"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Centro de Investigación Clínica */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                Centro de Investigación Clínica
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprometidos con el avance científico y la generación de nuevo conocimiento
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <FaMicroscope className="text-5xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Investigación</h3>
                <ul className="space-y-3">
                  <ServiceListItem text="Estudios clínicos fase II-IV" />
                  <ServiceListItem text="Protocolos de investigación" />
                  <ServiceListItem text="Registro de pacientes" />
                  <ServiceListItem text="Publicaciones científicas" />
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <FaUserMd className="text-5xl text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Educación</h3>
                <ul className="space-y-3">
                  <ServiceListItem text="Rotaciones académicas" />
                  <ServiceListItem text="Educación médica continua" />
                  <ServiceListItem text="Congresos y simposios" />
                  <ServiceListItem text="Formación de especialistas" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Población Objetivo */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Población Objetivo</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Nuestros servicios están dirigidos a pacientes con sospecha o diagnóstico confirmado de enfermedad reumática, de todas las edades y cualquier nivel de complejidad
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <PopulationCard 
                title="Adultos"
                description="Pacientes mayores de 18 años con enfermedades reumáticas"
              />
              <PopulationCard 
                title="Pediatría"
                description="Niños y adolescentes con patologías reumáticas"
              />
              <PopulationCard 
                title="Adulto Mayor"
                description="Atención especializada para pacientes geriátricos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reumatólogos Expertos */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Reumatólogos Expertos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Equipo médico altamente calificado con amplia experiencia en el manejo de enfermedades reumáticas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DoctorCard 
              name="Dr. Carlos Mendoza"
              specialty="Reumatólogo"
              experience="15 años de experiencia"
              education="Universidad Nacional - Fellow Johns Hopkins"
            />
            <DoctorCard 
              name="Dra. Ana Patricia Silva"
              specialty="Reumatóloga Pediátrica"
              experience="12 años de experiencia"
              education="Universidad de los Andes - Fellow Boston Children's"
            />
            <DoctorCard 
              name="Dr. Jorge Ramírez"
              specialty="Reumatólogo"
              experience="20 años de experiencia"
              education="Universidad del Rosario - Fellow Mayo Clinic"
            />
          </div>
        </div>
      </section>

      {/* Nuestro Compromiso con la Calidad */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                Nuestro Compromiso con la Calidad
              </h2>
              <p className="text-gray-600">
                Trabajamos constantemente para brindar la mejor atención a nuestros pacientes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <QualityCard 
                title="Acreditación Internacional"
                description="Certificados por los más altos estándares de calidad en atención médica"
              />
              <QualityCard 
                title="Tecnología de Vanguardia"
                description="Equipos de última generación para diagnóstico y tratamiento"
              />
              <QualityCard 
                title="Enfoque Multidisciplinario"
                description="Trabajo en equipo con diferentes especialidades para atención integral"
              />
              <QualityCard 
                title="Educación Continua"
                description="Actualización permanente de nuestro equipo médico"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Contáctanos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Agenda tu cita o consulta tus dudas
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactCard 
              icon={<FaPhone className="text-4xl text-blue-600" />}
              title="Línea de Atención"
              info="(605) 385 8000"
              link="tel:+576053858000"
            />
            <ContactCard 
              icon={<FaWhatsapp className="text-4xl text-green-500" />}
              title="WhatsApp"
              info="+57 300 123 4567"
              link="https://wa.me/573001234567"
            />
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-3xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Sede Barranquilla</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Calle 77B #57-141<br />
                    Barranquilla, Atlántico<br />
                    Colombia
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <FaClock className="text-blue-600 text-3xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Horarios</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lunes a Viernes: 7:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 12:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStethoscope className="text-blue-300 text-3xl" />
                <h3 className="text-xl font-bold">Reumatología</h3>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Portafolio de servicios integrales especializados en el diagnóstico, tratamiento y seguimiento de enfermedades reumáticas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Servicios</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#servicios" className="hover:text-white transition">Consulta Externa</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Ayudas Diagnósticas</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Procedimientos</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Medicina Biológica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Sobre Nosotros</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#nosotros" className="hover:text-white transition">Nuestro Equipo</a></li>
                <li><a href="#nosotros" className="hover:text-white transition">Investigación</a></li>
                <li><a href="#nosotros" className="hover:text-white transition">Educación</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Sedes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Contacto</h4>
              <ul className="space-y-3 text-blue-200 text-sm">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-blue-400" />
                  <span>(605) 385 8000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaWhatsapp className="text-green-400" />
                  <span>+57 300 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Barranquilla, Colombia</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Servicio de Reumatología. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs text-blue-400">Diseñado para brindar atención integral y especializada en enfermedades reumáticas</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573001234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 animate-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  )
}

// Component: DiseaseItem
function DiseaseItem({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100 hover:shadow-md transition-all">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
        <p className="text-gray-700 font-medium">{title}</p>
      </div>
    </div>
  )
}

// Component: ServiceListItem
function ServiceListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start space-x-3">
      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
      <span className="text-gray-700">{text}</span>
    </li>
  )
}

// Component: LocationCard
function LocationCard({ city, subtitle, address, phone }: { city: string; subtitle: string; address: string; phone: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
      <div className="text-center">
        <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-gray-800 mb-1">{city}</h3>
        <p className="text-sm text-blue-600 mb-4">{subtitle}</p>
        <p className="text-gray-600 text-sm mb-2">{address}</p>
        <p className="text-gray-700 font-semibold">{phone}</p>
      </div>
    </div>
  )
}

// Component: TransversalServiceCard
function TransversalServiceCard({ icon, title, services }: { icon: React.ReactNode; title: string; services: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800">{title}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-600 text-sm">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Component: PopulationCard
function PopulationCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  )
}

// Component: DoctorCard
function DoctorCard({ name, specialty, experience, education }: { name: string; specialty: string; experience: string; education: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
        <FaUserMd className="text-4xl text-white" />
      </div>
      <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{name}</h3>
      <p className="text-blue-600 text-center font-semibold mb-3">{specialty}</p>
      <p className="text-gray-600 text-center text-sm mb-2">{experience}</p>
      <p className="text-gray-500 text-center text-xs">{education}</p>
    </div>
  )
}

// Component: QualityCard
function QualityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
      <div className="flex items-start space-x-4">
        <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
        <div>
          <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Component: ContactCard
function ContactCard({ icon, title, info, link }: { icon: React.ReactNode; title: string; info: string; link: string }) {
  return (
    <a 
      href={link}
      className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl hover:shadow-xl transition-all text-center block border border-blue-100"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-700 break-words font-semibold">{info}</p>
    </a>
  )
}
