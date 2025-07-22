// Lista de vídeos
const videos = [
    {
    titulo: "Inscrição no CPF",
    youtubeId: "6kcSClv6aWk",
    categoria: "CPF"
    },
    {
    titulo: "Situação do CPF",
    youtubeId: "-KdbgTbcn8c",
    categoria: "CPF"
    },
    {
    titulo: "CNPJ",
    youtubeId: "Kv3-E5z31J8",
    categoria: "CNPJ"
    },
    {
    titulo: "Simples Nacional e MEI",
    youtubeId: "1C1J3xFl1oc",
    categoria: "CNPJ"
    },
    {
    titulo: "Declaração do Imposto de Renda - IR",
    youtubeId: "bljazfC2Vdc",
    categoria: "Malha e Declarações"
    },
    {
    titulo: "Acompanhamento da Declaração e Malha IR",
    youtubeId: "lxiz-LEtOeA",
    categoria: "Malha e Declarações"
    },
    {
    titulo: "Pesquisa de situação fiscal e Certidões",
    youtubeId: "JWuKHayEIWY",
    categoria: "Consulta"
    },
    {
    titulo: "Imóveis Rurais e ITR",
    youtubeId: "j8w9O2QLkHg",
    categoria: "Imóveis"
    },
    {
    titulo: "Canais de Atendimento da Receita Federal",
    youtubeId: "ohwXiJsxAEI",
    categoria: "Serviços"
    },
    {
    titulo: "Serviços Digitais e Procurações da Receita Federal",
    youtubeId: "v3Jhxlkm9ig",
    categoria: "Serviços"
    },
    // Adicione mais vídeos aqui
];

const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('categoryFilter');
const videoGrid = document.getElementById('videoGrid');

// Preenche categorias únicas no filtro
const categorias = [...new Set(videos.map(v => v.categoria))];
categorias.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
});

// Função para renderizar vídeos com base nos filtros
function renderVideos() {
    const termo = searchInput.value.toLowerCase();
    const categoriaSelecionada = categorySelect.value;
    videoGrid.innerHTML = "";

    const filtrados = videos.filter(video => {
    const tituloOK = video.titulo.toLowerCase().includes(termo);
    const categoriaOK = categoriaSelecionada === "todas" || video.categoria === categoriaSelecionada;
    return tituloOK && categoriaOK;
    });

    if (filtrados.length === 0) {
    videoGrid.innerHTML = "<p>Nenhum vídeo encontrado.</p>";
    return;
    }

    filtrados.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${video.youtubeId}" allowfullscreen></iframe>
        <div class="video-title">${video.titulo}</div>
    `;
    videoGrid.appendChild(card);
    });
}

// Eventos
searchInput.addEventListener('input', renderVideos);
categorySelect.addEventListener('change', renderVideos);

// Inicializa
renderVideos();