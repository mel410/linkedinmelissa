
import styles from "./page.module.css";

const pessoas = [
    {
        nome: "Bianca Pasini",
        descricao: "Desenvolvedora | Tecnologia",
        foto: "https://i.pravatar.cc/100?img=47"
    },
    {
        nome: "Rafael Lima",
        descricao: "Estudante de programação",
        foto: "https://i.pravatar.cc/100?img=12"
    },
    {
        nome: "Luana Ramos",
        descricao: "Design e desenvolvimento",
        foto: "https://i.pravatar.cc/100?img=44"
    },
    {
        nome: "Noemi Santana",
        descricao: "Profissional de tecnologia",
        foto: "https://i.pravatar.cc/100?img=49"
    },
    {
        nome: "Davi de Sousa",
        descricao: "Desenvolvedor Web",
        foto: "https://i.pravatar.cc/100?img=11"
    }
];

export default function Home() {
    return (
        <main className={styles.container}>

            <header className={styles.header}>
                <div className={styles.logo}>in</div>

                <input
                    className={styles.pesquisa}
                    placeholder="⌕  Pesquisar"
                />

                <nav className={styles.menu}>
                    <div><span>◆</span>Início</div>
                    <div><span>♟</span>Minha rede</div>
                    <div><span>▣</span>Vagas</div>
                    <div><span>▤</span>Mensagens</div>
                    <div><span>♟</span>Notificações</div>
                    <div><span>▦</span>Soluções</div>
                </nav>
            </header>

            <div className={styles.conteudo}>

                <section className={styles.principal}>

                    <div className={styles.cardPerfil}>
                        <div className={styles.capa}></div>

                        <div className={styles.dadosPerfil}>
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                                alt="Foto de perfil"
                                className={styles.fotoPerfil}
                            />

                            <div className={styles.informacoes}>
                                <h1>Melissa Biazotto Barbosa</h1>

                                <h3>
                                    Desenvolvedora | HTML | CSS | JavaScript | React | Node
                                </h3>

                                <p>
                                    Fala sobre #javascript, #frontend, #reactjs e #backend
                                </p>

                                <p>
                                    Mirandópolis, São Paulo, Brasil
                                    <span className={styles.azul}>
                                        {" "}· Informações de contato
                                    </span>
                                </p>

                                <p className={styles.azul}>
                                    500+ seguidores · 500+ conexões
                                </p>

                                <div className={styles.botoes}>
                                    <button>Mensagem</button>
                                    <button>Mais</button>
                                </div>
                            </div>

                            <div className={styles.instituicoes}>
                                <div>
                                    <div className={styles.miniLogo}>S</div>
                                    <strong>SESI</strong>
                                </div>

                                <div>
                                    <div className={styles.miniLogo}>S</div>
                                    <strong>SENAI</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Destaques</h2>

                        <div className={styles.publicacoes}>
                            <div className={styles.publicacao}>
                                <span>Publicação</span>
                                <h3>Legenda da primeira publicação...</h3>
                                <img
                                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500"
                                    alt="Código de programação"
                                />
                            </div>

                            <div className={styles.publicacao}>
                                <span>Publicação</span>
                                <h3>Legenda da segunda publicação...</h3>
                                <img
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500"
                                    alt="Programação"
                                />
                            </div>

                            <div className={styles.publicacao}>
                                <span>Publicação</span>
                                <h3>Legenda da terceira publicação...</h3>
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500"
                                    alt="Equipe trabalhando"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Sobre</h2>

                        <p>
                            Sou estudante de Desenvolvimento de Sistemas
                            no SESI/SENAI. Tenho interesse em tecnologia,
                            programação e desenvolvimento de aplicações.
                            Busco constantemente aprender novas tecnologias
                            e aprimorar meus conhecimentos.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Experiência</h2>

                        <div className={styles.experiencia}>
                            <div className={styles.miniLogo}>S</div>

                            <div className={styles.dadosExperiencia}>
                                <h3>SESI/SENAI</h3>
                                <p>1 ano e 7 meses</p>

                                <div className={styles.cargo}>
                                    <strong>Estudante de Desenvolvimento de Sistemas</strong>
                                    <p>Formação técnica</p>
                                    <p>2025 - o momento</p>
                                    <p>Mirandópolis, São Paulo, Brasil</p>
                                </div>

                                <div className={styles.cargo}>
                                    <strong>Desenvolvimento Web</strong>
                                    <p>Projetos acadêmicos</p>
                                    <p>HTML, CSS, JavaScript e React</p>
                                </div>

                                <div className={styles.cargo}>
                                    <strong>Programação</strong>
                                    <p>Aprendizado e desenvolvimento de projetos</p>
                                    <p>Next.js e Node.js</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Formação acadêmica</h2>

                        <div className={styles.experiencia}>
                            <div className={styles.miniLogo}>S</div>

                            <div>
                                <h3>SESI/SENAI</h3>
                                <p>Ensino Médio integrado ao Curso Técnico</p>
                                <p>Desenvolvimento de Sistemas</p>
                                <p>2024 - o momento</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Idiomas</h2>

                        <div className={styles.idioma}>
                            <strong>Português</strong>
                            <p>Fluente ou nativo</p>
                        </div>

                        <hr />

                        <div className={styles.idioma}>
                            <strong>Inglês</strong>
                            <p>Intermediário</p>
                        </div>
                    </div>

                </section>

                <aside className={styles.lateral}>

                    <div className={styles.card}>
                        <h3>As pessoas também viram</h3>

                        {pessoas.map((pessoa, index) => (
                            <div className={styles.pessoa} key={index}>
                                <img src={pessoa.foto} alt={pessoa.nome} />

                                <div className={styles.dadosPessoa}>
                                    <strong>{pessoa.nome}</strong>
                                    <p>{pessoa.descricao}</p>
                                    <button>Enviar mensagem</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.card}>
                        <h3>Pessoas que talvez você conheça</h3>

                        {pessoas.slice(0, 3).map((pessoa, index) => (
                            <div className={styles.pessoa} key={index}>
                                <img src={pessoa.foto} alt={pessoa.nome} />

                                <div className={styles.dadosPessoa}>
                                    <strong>{pessoa.nome}</strong>
                                    <p>{pessoa.descricao}</p>
                                    <button>Conectar</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </aside>

            </div>

        </main>
    );
}
