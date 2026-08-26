export type ImageAsset = { src: string; fallback: string; alt: string }

export const portfolio = {
  person: {
    name: 'Uíza de Carvalho',
    role: 'Making releases safer.',
    location: 'São Paulo, Brazil',
    bio: 'QA Analyst with experience in manual and automated testing, including functional, non-functional, regression, and API testing.',
    image: { src: '/images/profile.jpg', fallback: '[PROFILE IMAGE]', alt: 'Uíza de Carvalho profile photo' } satisfies ImageAsset,
  },
  social: {
    email: 'uizacarvalhosilva@gmail.com',
    linkedin: 'https://www.linkedin.com/in/uizacarvalho/',
    github: 'https://github.com/uizacarvalhosilva',
    cv: '/files/profile.pdf',
  },
  capabilities: [
    { icon: '✦', title: 'Manual + automated', detail: 'testing where it counts' },
    { icon: '↗', title: 'API + regression', detail: 'coverage for real workflows' },
    { icon: '✳', title: 'BDD + clear bugs', detail: 'feedback teams can use' },
  ],
  experience: [
    {
      company: 'Docato',
      industry: 'Ponta Grossa, PR',
      arrangement: 'Current role',
      logo: { src: '/images/company-01.png', fallback: '[COMPANY LOGO]', alt: 'Docato logo' } satisfies ImageAsset,
      roles: [
        {
          title: 'Tester', start: 'Feb 2026', end: 'Present',
          description: 'Validating products, flows, and features against requirements and defined quality standards.',
          responsibilities: [
            'Analyze user stories and acceptance criteria, identifying ambiguities before development starts.',
            'Plan and execute manual and automated tests, document evidence, and report bugs.',
            'Analyze business rules and participate in Scrum and Kanban rituals with developers and Product Owners.',
          ],
        },
      ],
    },
    {
      company: 'HostGator América Latina',
      industry: 'Florianópolis, SC',
      arrangement: '4 years',
      logo: { src: '/images/company-02.png', fallback: '[COMPANY LOGO]', alt: 'HostGator logo' } satisfies ImageAsset,
      roles: [{
        title: 'Junior Test Analyst', start: 'Feb 2025', end: 'Oct 2025',
        description: 'Mapped test scenarios and BDDs, supported releases, and maintained quality documentation.',
        responsibilities: [
          'Executed manual, API, functional, exploratory, and regression tests.',
          'Managed release approval and blocking, monitored deployments, and automated E2E tests with Cypress.',
          'Reported bugs, defects, and improvements in Jira and collaborated with development, product, and UX/UI teams.',
        ],
      }, {
        title: 'Development Analyst Starter | QA', start: 'Feb 2024', end: 'Feb 2025',
        description: 'Worked in QA during product development and collaborated with agile delivery teams.',
        responsibilities: ['Contributed to test scenarios and quality checks across product changes.', 'Supported reliable releases and continuous quality improvement.'],
      }, {
        title: 'Development Analyst Trainee | QA', start: 'Nov 2023', end: 'Feb 2024',
        description: 'Developed practical QA experience through product testing and team collaboration.',
        responsibilities: ['Supported test scenarios and quality checks during product delivery.'],
      }, {
        title: 'Support Assistant (N1)', start: 'Nov 2021', end: 'Nov 2023',
        description: 'Provided customer support for hosting, infrastructure, domains, and websites through Zendesk.',
        responsibilities: ['Worked with domains, DNS, redirects, MySQL, WordPress, email authentication, SSH, FTP, and SSL/TLS.', 'Supported CentOS servers, Cloudflare, WHM, cPanel, VPS, dedicated servers, malware scans, and log analysis.'],
      }],
    },
    {
      company: 'Vale das Flores Empreendimentos e Adm Ltda',
      industry: 'Teófilo Otoni, MG',
      arrangement: '4 years 11 months',
      logo: { src: '/images/company-03.png', fallback: '[COMPANY LOGO]', alt: 'Vale das Flores logo' } satisfies ImageAsset,
      roles: [{
        title: 'Administrative Assistant', start: 'Dec 2018', end: 'Oct 2021',
        description: 'Supported internal systems, processes, finances, devices, and remote company units.',
        responsibilities: ['Managed users, supported and trained colleagues on the internal software, and created manuals and standard operating procedures.', 'Controlled monthly revenues and expenses, generated bank remittances, and supported printers, physical and virtual machines, and internal networks.'],
      }, {
        title: 'IT Intern', start: 'Dec 2016', end: 'Dec 2018',
        description: 'Built practical IT support experience across the organisation.',
        responsibilities: ['Configured and maintained thin clients, formatted machines, and installed internal systems and utility packages.', 'Configured networks, domain controllers, virtualization, and remote support for external units.'],
      }],
    },
  ],
  education: [
    { title: 'QA and Software Testing', institution: 'Faculdade VINCIT', type: 'Lato Sensu specialisation', start: 'May 2024', end: 'May 2025' },
    { title: 'Analytics and Business Intelligence', institution: 'Pontifícia Universidade Católica de Minas Gerais', type: 'Specialisation', start: '2020', end: '2021' },
    { title: 'Information Systems', institution: 'Faculdades Doctum', type: 'Bachelor’s degree', start: '2016', end: '2019' },
    { title: 'Computer Technician', institution: 'Centro de Educação Profissional Paulo Viana-CEP', type: 'Technical education', start: '2013', end: '2014' },
    { title: 'Administration Technician', institution: 'SENAI Teófilo Otoni UI Edson Gonçalves Soares', type: 'Technical education', start: '2012', end: '2013' },
  ],
  projects: [
    { title: 'API Tests - Petstore', description: 'API test automation with JavaScript, Jest, and Axios, covering CRUD operations for the Pet resource.', category: 'QA engineering', tags: ['JavaScript', 'Jest', 'Axios'], year: '2026', image: { src: '/images/project-01.jpg', fallback: '[PETSTORE]', alt: 'Petstore API tests project' } satisfies ImageAsset, url: 'https://github.com/uizacarvalhosilva/petstore', repository: 'https://github.com/uizacarvalhosilva/petstore' },
    { title: 'E2E testing project', description: 'Em breve.', category: 'QA engineering', tags: ['Testing', 'E2E', 'WIP'], year: 'Coming soon', image: { src: '/images/project-02.jpg', fallback: '[COMING SOON]', alt: 'E2E testing project coming soon' } satisfies ImageAsset, url: '#', repository: '#', inProgress: true },
  ],
} as const

export type Language = 'en' | 'pt'

export function getPortfolio(language: Language) {
  if (language === 'en') return portfolio

  return {
    ...portfolio,
    person: {
      ...portfolio.person,
      role: 'Tornando as entregas mais seguras.',
      location: 'São Paulo, Brasil',
      bio: 'Analista de QA com experiência em testes manuais e automatizados, incluindo testes funcionais, não funcionais, regressivos e de API.',
    },
    capabilities: [
      { icon: '✦', title: 'Manual + automatizado', detail: 'testes onde importa' },
      { icon: '↗', title: 'API + regressão', detail: 'cobertura para fluxos reais' },
      { icon: '✳', title: 'BDD + bugs claros', detail: 'feedback útil para os times' },
    ],
    experience: [
      {
        ...portfolio.experience[0],
        industry: 'Ponta Grossa, PR',
        arrangement: 'Cargo atual',
        roles: [{
          ...portfolio.experience[0].roles[0],
          title: 'Tester',
          start: 'fevereiro de 2026',
          end: 'Presente',
          description: 'Validação de produtos, fluxos e funcionalidades, verificando se atendem aos requisitos e padrões de qualidade definidos.',
          responsibilities: [
            'Análise de histórias de usuário e critérios de aceitação, identificando ambiguidades antes do desenvolvimento.',
            'Planejamento e execução de testes manuais e automatizados, documentação de evidências e reporte de bugs.',
            'Análise de regras de negócio e atuação em rituais de Scrum e Kanban com desenvolvedores e POs.',
          ],
        }],
      },
      {
        ...portfolio.experience[1],
        industry: 'Florianópolis, Santa Catarina, Brasil',
        arrangement: '4 anos',
        roles: [
          { ...portfolio.experience[1].roles[0], title: 'Analista de Testes Jr.', start: 'fevereiro de 2025', end: 'outubro de 2025', description: 'Mapeamento de cenários e BDDs, apoio às releases e manutenção da documentação de Garantia da Qualidade.', responsibilities: ['Execução de testes manuais, de API, funcionais, exploratórios e regressivos.', 'Liberação e bloqueio de releases, acompanhamento de deploys e automação E2E com Cypress.', 'Reporte de bugs, defects e melhorias via Jira, em colaboração com desenvolvimento, produto e UX/UI.'] },
          { ...portfolio.experience[1].roles[1], title: 'Analista de Desenvolvimento Starter | QA', start: 'fevereiro de 2024', end: 'fevereiro de 2025', description: 'Atuação em QA durante o desenvolvimento de produtos e colaboração com times ágeis.', responsibilities: ['Contribuição para cenários de teste e verificações de qualidade.', 'Apoio a entregas confiáveis e à melhoria contínua da qualidade.'] },
          { title: 'Test Drive Analista de Desenvolvimento Starter | QA', start: 'novembro de 2023', end: 'fevereiro de 2024', description: 'Desenvolvimento de experiência prática em QA por meio de testes de produto e colaboração com o time.', responsibilities: ['Apoio a cenários de teste e verificações de qualidade durante as entregas.'] },
          { ...portfolio.experience[1].roles[2], title: 'Assistente de Suporte (N1)', start: 'novembro de 2021', end: 'novembro de 2023', description: 'Atendimento ao cliente para hospedagem, infraestrutura, domínios e websites via Zendesk.', responsibilities: ['Atuação com domínios, DNS, redirecionamentos, MySQL, WordPress, autenticação de e-mails, SSH, FTP e SSL/TLS.', 'Suporte a servidores CentOS, Cloudflare, WHM, cPanel, VPS, servidores dedicados, análise de malware e logs.'] },
        ],
      },
      {
        ...portfolio.experience[2],
        company: 'Vale das Flores Empreendimentos e Adm Ltda',
        industry: 'Teófilo Otoni e região, Brasil',
        arrangement: '4 anos e 11 meses',
        roles: [
          { ...portfolio.experience[2].roles[0], title: 'Auxiliar Administrativo', start: 'dezembro de 2018', end: 'outubro de 2021', description: 'Suporte a sistemas internos, processos, finanças, equipamentos e unidades remotas da empresa.', responsibilities: ['Controle de usuários, suporte e treinamento no software interno, além da criação de manuais e POPs.', 'Controle de receitas e despesas, geração de remessas bancárias e suporte a impressoras, máquinas e redes internas.'] },
          { ...portfolio.experience[2].roles[1], title: 'Estagiário de TI', start: 'dezembro de 2016', end: 'dezembro de 2018', description: 'Construção de experiência prática em suporte de TI em toda a organização.', responsibilities: ['Configuração e manutenção de Thin Clients, formatação de máquinas e instalação de sistemas internos.', 'Configuração de redes, controlador de domínio, virtualização e suporte remoto a unidades externas.'] },
        ],
      },
    ],
    education: [
      { title: 'QA e Testes de Software', institution: 'Faculdade VINCIT', type: 'Pós-graduação Lato Sensu', start: 'maio de 2024', end: 'maio de 2025' },
      { title: 'Analytics e Business Intelligence', institution: 'Pontifícia Universidade Católica de Minas Gerais', type: 'Especialização', start: '2020', end: '2021' },
      { title: 'Sistemas de Informação', institution: 'Faculdades Doctum', type: 'Graduação', start: '2016', end: '2019' },
      { title: 'Técnico em Informática', institution: 'Centro de Educação Profissional Paulo Viana-CEP', type: 'Curso técnico', start: '2013', end: '2014' },
      { title: 'Técnico em Administração', institution: 'SENAI Teófilo Otoni UI Edson Gonçalves Soares', type: 'Curso técnico', start: '2012', end: '2013' },
    ],
    projects: [
      { ...portfolio.projects[0], title: 'Testes de API - Petstore', description: 'Automação de testes de API com JavaScript, Jest e Axios, cobrindo operações CRUD do recurso Pet.', category: 'Engenharia de QA', tags: ['JavaScript', 'Jest', 'Axios'], year: '2026' },
      { ...portfolio.projects[1], title: 'Projeto de testes E2E', description: 'Em breve.', category: 'Engenharia de QA', year: 'Em breve', tags: ['Testes', 'E2E', 'WIP'] },
    ],
  } as const
}
