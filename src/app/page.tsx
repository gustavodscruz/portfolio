import Image from "next/image";
import CertificatesTable from "./_components/Certificates/CertificatesCarrousel";
import ResumeFrame from "./_components/ResumeFrame";
import ProjectsCarrousel from "./_components/Projects/ProjectsCarrousel";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="max-sm:mt-12 sm:rounded-full bg-grid-pattern bg-grid-size bg-foreground flex flex-col gap-6 items-center justify-center sm:py-8 sm:px-16 sm:mx-16 sm:my-4 max-sm:p-4 ">
        <Image
          alt="My profile pic"
          src="https://github.com/gustavodscruz.png"
          className="sm:size-40 max-sm:size-28 bg-cover rounded-full"
          height={160}
          width={160}
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-secondary  text-4xl max-sm:text-3xl text-center text-slate-50">
            Gustavo Dias da Silva Cruz
          </h2>
          <h3 className="text-xl text-center">Dev Fullstack Java</h3>
        </div>
        <p className="text-sm text-center sm:w-7/12 max-sm:w-full m-auto leading-7">
          Sou um apaixonado desenvolvedor full-stack em treinamento na FIAP,
          especializado em Java, Node.js, React.js e Next.js para
          desenvolvimento Back-End e Front-End. Tenho experiência com bancos de
          dados SQL, diagramas UML, metodologias Agile e integrações de API,
          usando ferramentas como Postman e Insomnia. Meu objetivo é melhorar
          continuamente minhas habilidades e me tornar um excelente
          desenvolvedor full-stack.
        </p>
        <a
          href="#contact"
          className="border border-gray-300 rounded-md px-4 py-2 w-max hover:bg-gray-300 hover:text-slate-700 clickable"
        >
          Entre em contato
        </a>
      </section>
      <section className="flex flex-col gap-2 my-6 items-center p-4 max-sm:p-10">
        <h2 className="text-center max-sm:text-justify text-3xl font-semibold text-slate-50">
          Sobre mim :)
        </h2>
        <p className="text-center max-sm:text-left font-semibold text-sm -mt-2 leading-7 mb-5">
          Saiba um pouco sobre mim
        </p>
        <p className="text-center max-sm:text-left leading-7">
          Olá! Sou Gustavo Dias, um cientista de dados especializado em análise
          de dados, modelagem preditiva, processamento de linguagem natural,
          aprendizado de máquina e chatbots de IA.
        </p>
        <p className="text-center max-sm:text-left leading-7">
          Com uma paixão por desvendar insights de conjuntos de dados complexos,
          dedico-me a ajudar empresas a tomar decisões informadas e permanecer à
          frente no mundo atual orientado por dados.{" "}
        </p>
        <p className="text-center max-sm:text-left leading-7">
          Trago uma mistura de conhecimento técnico, experiência prática e um
          compromisso com uma comunicação clara para cada projeto.
        </p>
        <p className="text-center max-sm:text-left leading-7">
          Seja descobrindo padrões ocultos, prevendo tendências futuras ou
          automatizando processos com IA, estou aqui para ajudar você a
          aproveitar todo o potencial dos seus dados.{" "}
        </p>
        <p className="text-center max-sm:text-left leading-7">
          Vamos trabalhar juntos para transformar seus dados em insights
          acionáveis ​​que geram resultados reais. Entre em contato e vamos
          começar a desbloquear o poder dos seus dados hoje mesmo!
        </p>
        <ResumeFrame />
      </section>
      <section className="flex flex-col gap-5 my-5">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Serviços
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Algumas coisas na qual posso ajudar você
        </p>
        <div className="grid grid-cols-1 gap-6 max-w-screen-xl m-auto sm:grid-cols-2 lg:grid-cols-3 text-slate-800 mt-6 max-sm:w-[80vw]">
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">WordPress - Landing Pages</h3>
            <p className="text-sm mt-2">
              Desenvolvimento rápido de sites e páginas de destino
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">Java | Spring Boot</h3>
            <p className="text-sm mt-2">
              Back-end de aplicações robustas e escaláveis
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">Next.js | React</h3>
            <p className="text-sm mt-2">
              Front-ends poderosos e landing pages modernas
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 my-5">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Projetos
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Um pouco do meu trabalho
        </p>
        <div>
          {/* <ProjectsTabs />  */}
          <ProjectsCarrousel />
        </div>
        {/* <TagList />
        <ProjectsTable /> */}
      </section>
      <section className="flex flex-col gap-5 my-5">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Certificados
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Certificados que conquistei com o tempo
        </p>
        <CertificatesTable />
      </section>
      <section id="contact" className="flex flex-col gap-4 my-3 bg-grid-pattern bg-grid-size bg-foreground max-sm:p-4 sm:py-20 sm:px-44 rounded-full">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Entre em contato
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Vamos trabalhar juntos!
        </p>
        <Image
          src="/linkedin.gif"
          height={480}
          width={1280}
          alt="linkedin gif"
          className="border-4 border-foreground rounded-[48px]  object-cover h-[360px] max-w-screen-sm max-sm:w-full max-sm:rounded-lg"
        />
        <h3 className="text-center font-semibold tracking-wide text-xl">
          Fale comigo por aqui!
        </h3>
        <div className="flex flex-col max-w-screen-sm m-auto gap-6 justify-center ">
          <a
            href="https://www.linkedin.com/gustavodiasdsc"
            className="hover:scale-125 transition-all duration-300 justify-center  bg-[#0a66c2] px-5 py-1 rounded-md flex gap-2 items-center font-semibold"
            target="_blank"
          >
            <FaLinkedin
              className="cursor-pointer hover:scale-125 transition-all duration-300"
              color="#072849"
              size={20}
            />
            Linkedin
          </a>
          <a
            href="mailto:gustavodiasdsc@gmail.com?subject=Contato e interesse&body=Olá Gustavo, tudo bem? Gostaria de falar com você porque fiquei interessado nos projetos..."
            className="hover:scale-125 transition-all duration-300 justify-center  bg-[#ff5d40] rounded-md px-5 py-1 flex gap-2 items-center font-semibold"
            target="_blank"
          >
            <MdEmail
              className="cursor-pointer hover:scale-125 transition-all duration-300"
              color="#993222"
              size={22}
            />
            gustavodiasdsc@gmail.com
          </a>
          <a
            href="https://www.github.com/gustavodscruz"
            target="_blank"
            className="hover:scale-125 transition-all duration-300 justify-center  bg-[#222328] rounded-md px-5 py-1 flex gap-2 items-center font-semibold"
          >
            <FaGithub
              color="#ededf1"
              size={20}
              className="cursor-pointer hover:scale-125 transition-all duration-300"
            />
            Github
          </a>
        </div>
      </section>
    </div>
  );
}
