import React from "react";
import { Empreendimento } from "../types/Empreendimento";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

interface Props {
    empreendimentos: Empreendimento[];
}

const EmpreendimentoList: React.FC<Props> = ({ empreendimentos }) => (
    <List>
        {empreendimentos.map((e) => (
            <React.Fragment key={e.id}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={`${e.nomEmpreendimento} (${e.sigUFPrincipal})`}
                        secondary={
                            <>
                                <div><strong>Tipo de Geração:</strong> {e.sigTipoGeracao}</div>
                                <div><strong>Potência Outorgada:</strong> {e.mdaPotenciaOutorgadaKw} kW</div>
                                <div><strong>Origem do Combustível:</strong> {e.dscOrigemCombustivel}</div>
                                <div><strong>Empresa de Conexão:</strong> {e.nomEmpresaConexao}</div>
                                <div><strong>Regime de Participação:</strong> {e.dscPropriRegimePariticipacao}</div>
                                <div><strong>Situação da Obra:</strong> {e.dscSituacaoObra}</div>
                            </>
                        }
                    />
                </ListItem>
                <Divider component="li" />
            </React.Fragment>
        ))}
    </List>
);

export default EmpreendimentoList;
