import axios from "axios";
import { Empreendimento } from "../types/Empreendimento";

const API_BASE_URL = "http://localhost:8080/relatorio"; //poderia ser um .env porém pra facilitar que vocês utilizem o projeto eu deixei mockado mesmo

export const fetchTop5 = async (): Promise<Empreendimento[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/top5`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar top 5", error);
        throw error;
    }
};

export const atualizarDados = async (): Promise<void> => {
    try {
        await axios.post(`${API_BASE_URL}/atualizar`);
    } catch (error) {
        console.error("Erro ao atualizar dados", error);
        throw error;
    }
};

export const limparDados = async (): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/limpar`);
    } catch (error) {
        console.error("Erro ao limpar dados", error);
        throw error;
    }
};