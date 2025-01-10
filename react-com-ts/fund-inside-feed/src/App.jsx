import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"
import './global.css'
import styles from './App.module.css'


export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/larisa.png",
        name: "Leirisson Souza",
        role: "Developer Web",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publisheAt: new Date("2023-05-04 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/johndoe.png",
        name: "John Doe",
        role: "UI/UX Designer",
      },
      content: [
        { type: "paragraph", content: "Oi pessoal! 😄" },
        {
          type: "paragraph",
          content:
            "Acabei de criar um novo design para o aplicativo que estamos desenvolvendo no trabalho. Ficou incrível!",
        },
        { type: "link", content: "👉 behance.net/johndoe" },
      ],
      publisheAt: new Date("2023-05-05 14:30:00"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/janesmith.png",
        name: "Jane Smith",
        role: "Backend Developer",
      },
      content: [
        { type: "paragraph", content: "Boa noite, devs! 🌙" },
        {
          type: "paragraph",
          content:
            "Terminei hoje o desenvolvimento da API para o projeto do hackathon. Testes rodando 100%! 🎉",
        },
        { type: "link", content: "👉 github.com/janesmith/api-hackathon" },
      ],
      publisheAt: new Date("2023-05-06 19:45:00"),
    },
    {
      id: 4,
      author: {
        avatarUrl: "https://github.com/chrismiller.png",
        name: "Chris Miller",
        role: "Frontend Developer",
      },
      content: [
        { type: "paragraph", content: "E aí, pessoal! 🚀" },
        {
          type: "paragraph",
          content:
            "Compartilhei uma nova biblioteca para animações em React no meu GitHub. Confiram e me digam o que acharam!",
        },
        { type: "link", content: "👉 github.com/chrismiller/react-animations" },
      ],
      publisheAt: new Date("2023-05-07 10:15:00"),
    },
    {
      id: 5,
      author: {
        avatarUrl: "https://github.com/sarahlee.png",
        name: "Sarah Lee",
        role: "Full-Stack Developer",
      },
      content: [
        { type: "paragraph", content: "Hello devs! 👩‍💻" },
        {
          type: "paragraph",
          content:
            "Hoje publiquei um artigo sobre boas práticas no desenvolvimento de APIs REST. Dá uma olhada no meu blog!",
        },
        { type: "link", content: "👉 sarahlee.dev/rest-best-practices" },
      ],
      publisheAt: new Date("2023-05-08 08:00:00"),
    },
    {
      id: 6,
      author: {
        avatarUrl: "https://github.com/mikejohnson.png",
        name: "Mike Johnson",
        role: "DevOps Engineer",
      },
      content: [
        { type: "paragraph", content: "Salve, devs! 💻" },
        {
          type: "paragraph",
          content:
            "Acabei de configurar um pipeline CI/CD para nosso novo projeto. Automatização é tudo! 🚀",
        },
        { type: "link", content: "👉 dev.to/mikejohnson/cicd-automation" },
      ],
      publisheAt: new Date("2023-05-09 12:30:00"),
    },
    {
      id: 7,
      author: {
        avatarUrl: "https://github.com/alexjames.png",
        name: "Alex James",
        role: "Mobile Developer",
      },
      content: [
        { type: "paragraph", content: "Fala aí, galera! 📱" },
        {
          type: "paragraph",
          content:
            "Hoje finalizei o desenvolvimento de um app Flutter para um cliente internacional. O resultado ficou top!",
        },
        { type: "link", content: "👉 dribbble.com/alexjames/flutter-app" },
      ],
      publisheAt: new Date("2023-05-10 16:00:00"),
    },
    {
      id: 8,
      author: {
        avatarUrl: "https://github.com/emilyclark.png",
        name: "Emily Clark",
        role: "AI Specialist",
      },
      content: [
        { type: "paragraph", content: "Oi, pessoal! 🤖" },
        {
          type: "paragraph",
          content:
            "Publiquei um novo paper sobre redes neurais no meu site. Quem tiver interesse em IA, dá uma olhada!",
        },
        { type: "link", content: "👉 emilyclark.ai/research" },
      ],
      publisheAt: new Date("2023-05-11 11:15:00"),
    },
    {
      id: 9,
      author: {
        avatarUrl: "https://github.com/robertlee.png",
        name: "Robert Lee",
        role: "Data Scientist",
      },
      content: [
        { type: "paragraph", content: "Olá, devs! 📊" },
        {
          type: "paragraph",
          content:
            "Concluí uma análise preditiva usando machine learning para um case de mercado. Resultados impressionantes!",
        },
        { type: "link", content: "👉 robertlee.com/ml-case-study" },
      ],
      publisheAt: new Date("2023-05-12 09:00:00"),
    },
    {
      id: 10,
      author: {
        avatarUrl: "https://github.com/annafernandez.png",
        name: "Anna Fernandez",
        role: "Software Architect",
      },
      content: [
        { type: "paragraph", content: "Hey, pessoal! 🛠️" },
        {
          type: "paragraph",
          content:
            "Escrevi um guia sobre como arquitetar sistemas escaláveis. Está disponível no meu blog!",
        },
        { type: "link", content: "👉 annafernandez.dev/scalable-architecture" },
      ],
      publisheAt: new Date("2023-05-13 13:45:00"),
    },
  ];
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {
          posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publisheAt={post.publisheAt}
            />
          ))
        }
        </main>
       
      </div>

    </>
  )
}

