export interface Empreendimento {
    id: number;
    createdAt: string;
    datGeracaoConjuntoDados: string;
    datRalie: string;
    ideNucleoCEG: string;
    codCEG: string;
    sigUFPrincipal: string;
    dscOrigemCombustivel: string;
    sigTipoGeracao: string;
    nomEmpreendimento: string;
    mdaPotenciaOutorgadaKw: number;
    dscPropriRegimePariticipacao: string;
    dscTipoConexao: string;
    nomConexao: string;
    mdaTensaoConexao: number;
    nomEmpresaConexao: string;
    numCnpjEmpresaConexao: string;
    dscViabilidade: string;
    dscSituacaoObra: string;
}
