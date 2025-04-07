import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Refresh, Delete } from "@mui/icons-material";
import {
  fetchTop5,
  atualizarDados,
  limparDados,
} from "./services/relatorioService";
import { Empreendimento } from "./types/Empreendimento";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function App() {
  const [dados, setDados] = useState<Empreendimento[]>([]);
  const [loading, setLoading] = useState(false);

  const carregarTop5 = async () => {
    setLoading(true);
    try {
      const top5 = await fetchTop5();
      setDados(top5);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarTop5();
  }, []);

  const handleAtualizar = async () => {
    await atualizarDados();
    carregarTop5();
  };

  const handleLimpar = async () => {
    await limparDados();
    setDados([]);
  };

  const colunas: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 80,
      flex: 0.3,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "NomEmpreendimento",
      headerName: "Empreendimento",
      minWidth: 300,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "SigUFPrincipal",
      headerName: "UF",
      minWidth: 50,
      flex: 0.2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "MdaPotenciaOutorgadaKw",
      headerName: "Potência (kW)",
      minWidth: 130,
      flex: 0.6,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "SigTipoGeracao",
      headerName: "Tipo Geração",
      minWidth: 120,
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "NomEmpresaConexao",
      headerName: "Empresa Conexão",
      minWidth: 300,
      flex: 1.2,
      headerAlign: "center",
      align: "center",
    },
  ];


  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        p: 4,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        Top 5 Empreendimentos
      </Typography>

      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Visualize os empreendimentos com maior potência outorgada.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
        <Button
          variant="contained"
          startIcon={<Refresh />}
          onClick={handleAtualizar}
          disabled={loading}
        >
          Atualizar Relatório
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={handleLimpar}
          disabled={loading}
        >
          Limpar Dados
        </Button>
      </Stack>

      <Paper elevation={3} sx={{ height: 500, width: "100%" }}>
        {loading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
            <CircularProgress />
          </Stack>
        ) : (
          <DataGrid
            rows={dados}
            columns={colunas}
            pageSizeOptions={[5, 10]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
            disableRowSelectionOnClick
          />
        )}
      </Paper>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          width: "100%",
          mt: 4,
          py: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid #ccc",
          gap: 1,
        }}
      >
        <Typography variant="body2">Desenvolvido por catureba</Typography>
        <img
          src="https://avatars.githubusercontent.com/u/85377721?s=400&u=5bca6ea20bec2526e9cdfaf7032b4d6fdc9cecef&v=4"
          alt="Avatar de catureba"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
}

export default App;
