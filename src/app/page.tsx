import CertificatesTable from "./_components/Certificates/CertificatesTable";
import { useState } from "react";
import ProjectsTabs from "./_components/Projects/ProjectsTabs";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="rounded-full bg-grid-pattern bg-grid-size bg-foreground flex flex-col gap-6 items-center justify-center py-8 px-16 mx-16 my-4">
        <img
          alt="My profile pic"
          src="https://github.com/gustavodscruz.png"
          className="size-40 bg-cover rounded-full"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-secondary text-4xl text-center text-slate-50">
            Gustavo Dias da Silva Cruz
          </h2>
          <h3 className="text-xl text-center">Dev Fullstack Java</h3>
        </div>
        <p className="text-sm text-center w-7/12 m-auto">
          I am a passionate full-stack developer in training at FIAP,
          specializing in Java, Node.js, React.js, and Next.js for Back-End and
          Front-End development. I have experience with SQL databases, UML
          diagrams, Agile methodologies, and API integrations, using tools like
          Postman and Insomnia. My goal is to continuously improve my skills and
          become an excellent full-stack developer.
        </p>
        <button className="border border-gray-300 rounded-md px-4 py-2 ml-6 w-max hover:bg-gray-300 hover:text-slate-700 clickable">
          Contact me
        </button>
      </section>
      <section className="flex flex-col gap-2 my-6 items-center">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          About me
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Get to know me
        </p>
        <p className="text-center">
          Hi there! I&apos;m Gustavo Dias, a data scientist specializing in data
          analytics, predictive modeling, natural language processing, machine
          learning, and AI chatbots. With a passion for unraveling insights from
          complex datasets, I&apos;m dedicated to helping businesses make
          informed decisions and stay ahead in today&apos;s data-driven world. I
          bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it&apos;s
          uncovering hidden patterns, predicting future trends, or automating
          processes with AI, I&apos;m here to help you harness the full
          potential of your data. Let&apos;s work together to transform your
          data into actionable insights that drive real results. Get in touch,
          and let&apos;s start unlocking the power of your data today!
        </p>
        <a
          className="border border-gray-300 rounded-md px-4 py-2 ml-6 hover:bg-gray-300 hover:text-slate-700 clickable my-4"
          href=""
          download={true}
        >
          Download Resume
        </a>
      </section>
      <section className="flex flex-col gap-5 my-5">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Projects
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Some of my work
        </p>
        <div>
          <ProjectsTabs /> 
        </div>
        {/* <TagList />
        <ProjectsTable /> */}
      </section>
      <section className="flex flex-col gap-5 my-5">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Certificates
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Badges than I conquer with time
        </p>
        <CertificatesTable />
      </section>
      <section className="flex flex-col gap-5 my-5 max-w-screen-md w-full">
        <h2 className="text-center text-3xl font-semibold text-slate-50">
          Get in touch
        </h2>
        <p className="text-center font-semibold text-sm -mt-2">
          Let&apos;s work together
        </p>
        <form action="" method="POST" className="flex flex-col gap-2 border border-gray-300 rounded-md p-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input className="p-2 rounded-sm outline-none" type="text" name="nameInput" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input className="p-2 rounded-sm outline-none" type="email" name="nameInput" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Service</label>
            <input className="p-2 rounded-sm outline-none" type="text" name="nameInput" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows={10} className="rounded-sm outline-none text-black p-3" id="message"></textarea>
          </div>
          <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-slate-700 clickable my-4">Send</button>
        </form>
      </section>
    </div>
  );
}
