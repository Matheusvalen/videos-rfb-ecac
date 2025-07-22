// Lista de vídeos
const videos = [
    {
    titulo: "Como fazer login",
    youtubeId: "ID_DO_VIDEO1",
    categoria: "Login"
    },
    {
    titulo: "Cadastro de usuários",
    youtubeId: "ID_DO_VIDEO2",
    categoria: "Cadastro"
    },
    {
    titulo: "Gerar relatórios",
    youtubeId: "ID_DO_VIDEO3",
    categoria: "Relatórios"
    },
    {
    titulo: "Configurações do sistema",
    youtubeId: "ID_DO_VIDEO4",
    categoria: "Configuração"
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