import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationServices";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  // const cepValido = ValidationService.cep(cep) ? "CEP Válido" : "CEP Inválido";

  return {
    cep,
    setCep,
    cepValido,
  };
}
