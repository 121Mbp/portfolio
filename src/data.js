const introduce = {
    name: '프론트의 세계에서 백엔드로의 전환: 코드의 두 얼굴을 만나다',
    appeal: '글로벌 게임회사에서 다양한 프로젝트 경험을 통하여 16개 국가의 언어를 대응한 경험이 있으며, 자발적으로 기획, 디자인, 프론트까지 직접 100% 참여하여 사이트를 성공적으로 오픈한 경험도 있습니다. 뿐만 아니라 GDPR 및 다양한 국가의 언어 대응에 있어, 직접 주도하여 각 부서와의 협업을 통해 편의성 및 효율성을 높이는데 기여하기도 하였습니다. 또한 네비게이션, 팝업 등의 다양한 기능을 위한 플러그인을 직접 개발하여 팀의 작업 효율을 향상시키는 경험도 쌓았습니다. 현재는 백엔드 개발자의 역량을 키우면서 프론트엔드에 대한 심도 있는 이해와 경험을 바탕으로, 두 분야를 융합하여 멀티플레이어 개발자로 성장하고자 합니다. 이러한 다양한 도전에 대한 열린 마음과 끊임없는 학습의지를 가지고, 두 개의 심장을 가진 박지성 선수처럼 더 나은 개발자로 성장해 나가겠습니다.',
    contact: [
        {
            name: 'github',
            url: 'https://github.com/121Mbp',
            brand: 'Github'
        },
        {
            name: 'notion',
            url: 'https://near-blackbird-72e.notion.site/Hello-d067db43fc7b43a8bf88d4e19dfcd472?pvs=4',
            brand: 'Resume'
        },
        {
            name: 'mail',
            url: 'mailto:nino09@naver.com',
            brand: 'E-mail'
        },
    ],
}

const timeline = [
    {
        type: 'graduation',
        content: '한남대학교 건축공학과 졸업',
        date: '2011. 09.'
    },
    {
        type: 'company',
        content: '(재)한국건설안전기술원 건축팀',
        date: '2012. 03. - 2014. 04.'
    },
    {
        type: 'company',
        content: '애드쿠아 인터렉티브 테크팀 사원',
        date: '2014. 10. - 2016. 07.'
    },
    {
        type: 'company',
        content: '게임빌컴투스플랫폼 웹개발팀 퍼블리싱 파트 사원',
        date: '2016. 08. - 2017. 02.'
    },
    {
        type: 'company',
        content: '엠텍크루(현 디케이테크인) 멜론 UI팀 매니저',
        date: '2017. 02. - 2018. 06.'
    },
    {
        type: 'company',
        content: '컴투스 플랫폼 웹개발팀 퍼블리싱 파트 책임',
        date: '2018. 06. - 2023. 05.'
    },
    {
        type: 'education',
        content: 'AWS클라우드 기반 자바&스프링&리액트 교육',
        date: '2023. 07. - 2024. 01.'
    },    
]

const projects = [
    {
        name: 'Front-End Portfolio',
        period: '2014. 12. - 2023. 05.',
        type: 'Practice',
        role: 'FE 100%',
        content: '2014 - 2023년 웹퍼블리셔 UI개발자 포트폴리오',
        url: 'https://121mbp.github.io/room/',
        skill: ['js', 'html', 'css', 'jquery', 'scss']
    },
    {
        name: 'Bank CLI Application',
        period: '2023. 08.',
        type: 'Team',
        role: 'BE 100% (3명)',
        content: '미니 프로젝트로 이클립스 CLI에서 Scanner로 입력값을 받아 회원가입, 계좌개설, 입금, 출금, 조회, 계좌이체를 구현하였습니다.',
        url: 'https://github.com/121Mbp/minibank',
        skill: ['java']
    },
    {
        name: 'Starbucks',
        period: '2023. 10. - 11.',
        type: 'Team',
        role: 'FE 100%, BE 100%, Design 100% (4명)',
        content: '스타벅스 앱을 기반하여 maven에 필요한 라이브러리를 설정 후 SQL은 MyBatis로 연결하여, servlet과 jsp로 동적으로 웹 페이지를 생성하여 구현하였습니다.',
        url: 'https://github.com/121Mbp/semi-starbucks',
        skill: ['js', 'jquery', 'html', 'css', 'java', 'maria']
    },
    {
        name: 'Palette',
        period: '2023. 11.',
        type: 'Personal',
        role: 'FE 100%, Design 100%',
        content: '컬러를 선택하여 로컬 스토리지에 저장 및 삭제하여 컬러값을 관리할 수 있습니다. 또한 좌측상단 마스타치 {} 로고를 클릭하면 SCSS형태로 변환되어 사용이 가능하도록 구현했습니다.',
        url: 'https://github.com/121Mbp/palette',
        skill: ['js', 'html', 'css', 'react', 'scss']
    },
    {
        name: 'Todo List',
        period: '2023. 11.',
        type: 'Personal',
        role: 'FE 100%, BE 100%, Design 100%',
        content: 'JPA로 DB테이블 생성 후 리액트에서 axios로 API를 GET, POST, PUT, DELETE하여 Todo List를 구현하였습니다.',
        url: 'https://github.com/121Mbp/todo',
        skill: ['js', 'html', 'css', 'react', 'scss', 'java' , 'springboot', 'oracle']
    },
    {
        name: 'Woute',
        period: '2023. 12. - 2024. 01.',
        type: 'Team',
        role: 'FE 100%, BE 100% (4명)',
        content: '나만의 코스를 기록하여 공유하는 sns 프로젝트',
        url: 'https://github.com/121Mbp/woute-spring-backend',
        skill: ['js', 'html', 'css', 'scss', 'react', 'springboot', 'java', 'oracle', 's3', 'ec2', 'nginx', 'actions']
    },
]

const skillset = [
    { name: 'js', lang: 'Java Script', learn: true },
    { name: 'html', lang: 'HTML5', learn: true },
    { name: 'css', lang: 'CSS3', learn: true },
    { name: 'jquery', lang: 'jQuery', learn: true },
    { name: 'scss', lang: 'SCSS', learn: true },
    { name: 'react', lang: 'React', learn: true },
    { name: 'node', lang: 'nodeJS', learn: true },
    { name: 'git', lang: 'Git', learn: true },
    { name: 'java', lang: 'JAVA', learn: true },
    { name: 'spring', lang: 'Spring', learn: true },
    { name: 'springboot', lang: 'Spring Boot', learn: true },
    { name: 'oracle', lang: 'OracleDB', learn: true },
    { name: 'maria', lang: 'MariaDB', learn: true },
    { name: 's3', lang: 'AWS S3', learn: true },
    { name: 'ec2', lang: 'AWS EC2', learn: true },
    { name: 'actions', lang: 'Actions', learn: true },
    { name: 'nginx', lang: 'NGINX', learn: true },
]

const tools = [
    { name: 'vscode', lang: 'VScode', learn: true },
    { name: 'intellij', lang: 'IntelliJ', learn: true },
    { name: 'storm', lang: 'WebStorm', learn: true },
    { name: 'eclipse', lang: 'Eclipse', learn: true },
    { name: 'jira', lang: 'Jira', learn: true },
    { name: 'postman', lang: 'Postman', learn: true },
    { name: 'dbeaver', lang: 'DBeaver', learn: true },
    { name: 'swagger', lang: 'Swagger', learn: true },
    { name: 'docker', lang: 'Docker', learn: false },
]


export { introduce, timeline, projects, skillset, tools }