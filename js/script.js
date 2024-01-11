function gerarRotas() {
    const cidadesInput = document.getElementById("cidadesInput").value;

    const cidades = cidadesInput.split('\n').map(line => line.trim()).filter(Boolean);

    const resultado = document.getElementById("output");
    resultado.innerHTML = "";

    const table = document.createElement("table");
    resultado.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const headerRow = document.createElement("tr");
    thead.appendChild(headerRow);

    const criarCabecalho = (texto) => {
        const th = document.createElement("th");
        th.textContent = texto;
        headerRow.appendChild(th);
    };

    criarCabecalho("ORIGEM");
    criarCabecalho("DESTINO");

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const rotasEncontradas = new Set();

    const adicionarLinha = (origem, destino) => {
        const rota = `${origem} - ${destino}`;

        if (!rotasEncontradas.has(rota)) {
            const row = document.createElement("tr");

            const criarCelula = (texto) => {
                const cell = document.createElement("td");
                cell.textContent = texto;
                row.appendChild(cell);
            };

            criarCelula(origem);
            criarCelula(destino);

            tbody.appendChild(row);

            rotasEncontradas.add(rota);
        }
    };

    for (const origem of cidades) {
        for (const destino of cidades) {
            if (origem !== destino) {
                adicionarLinha(origem, destino);
            }
        }
    }
};
