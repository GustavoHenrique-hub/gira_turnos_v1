import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const unidade = [
  {
    id: 1, unidade: "CRST Freguesia do Ó"
  },
  {
    id: 2, unidade: "CRST Lapa"
  },
  {
    id: 3, unidade: "CRST Leste"
  },
  {
    id: 4, unidade: "CRST Mooca"
  },
  {
    id: 5, unidade: "CRST Santo Amaro"
  },
  {
    id: 6, unidade: "CRST Sé"
  },
  {
    id: 7, unidade: "H Cantareira"
  },
  {
    id: 8, unidade: "HD Brasilandia"
  },
  {
    id: 9, unidade: "HM Alipio"
  },
  {
    id: 10, unidade: "HM Benedicto"
  },
  {
    id: 11, unidade: "HM Brigadeiro"
  },
  {
    id: 12, unidade: "HM Cachoeirinha"
  },
  {
    id: 13, unidade: "HM Campo Limpo"
  },
  {
    id: 14, unidade: "HM Capela Do Socorro"
  },
  {
    id: 15, unidade: "HM Hungria"
  },
  {
    id: 16, unidade: "HM Ignacio"
  },
  {
    id: 17, unidade: "HM Mario Degni"
  },
  {
    id: 18, unidade: "HM Saboya"
  },
  {
    id: 19, unidade: "HM Sorocabana"
  },
  {
    id: 20, unidade: "HM Tatuape"
  },
  {
    id: 21, unidade: "HM Tide"
  },
  {
    id: 22, unidade: "HM Waldomiro"
  },
  {
    id: 23, unidade: "HM Zaio"
  },
  {
    id: 24, unidade: "PA Sao Mateus"
  },
  {
    id: 25, unidade: "LSP - Centro de Exames da Mulher Capela do Socorro"
  },
  {
    id: 26, unidade: "UPA Ipiranga - Dr. Augusto Gomes de Mattos"
  },
  {
    id: 27, unidade: "PSM Balneario Sao Jose"
  },
  {
    id: 28, unidade: "PSM Lapa (desabilitado)"
  },
  {
    id: 29, unidade: "UPA Dona Maria Antonieta"
  },
  {
    id: 30, unidade: "UPA Elisa Maria"
  },
  {
    id: 31, unidade: "UPA Lapa"
  },
  {
    id: 32, unidade: "UPA Parelheiros"
  },
  {
    id: 33, unidade: "UPA Pedreira"
  },
  {
    id: 34, unidade: "CAPS AD II Cachoeirinha"
  },
  {
    id: 35, unidade: "CAPS AD II Cangaiba"
  },
  {
    id: 36, unidade: "CAPS AD II Cidade Ademar"
  },
  {
    id: 37, unidade: "CAPS AD II Ermelino Matarazzo"
  },
  {
    id: 38, unidade: "CAPS AD II Guaianases"
  },
  {
    id: 39, unidade: "CAPS AD II Jabaquara"
  },
  {
    id: 40, unidade: "CAPS AD II Jardim Nelia"
  },
  {
    id: 41, unidade: "CAPS AD II Mooca"
  },
  {
    id: 42, unidade: "CAPS AD II Pinheiros"
  },
  {
    id: 43, unidade: "CAPS AD II Sacoma"
  },
  {
    id: 44, unidade: "CAPS AD II Santo Amaro"
  },
  {
    id: 45, unidade: "CAPS AD II Sapopemba"
  },
  {
    id: 46, unidade: "CAPS AD II Vila Madalena Prosam"
  },
  {
    id: 47, unidade: "CAPS AD II Vila Mariana"
  },
  {
    id: 48, unidade: "CAPS AD III Armenia"
  },
  {
    id: 49, unidade: "CAPS AD III Boracea"
  },
  {
    id: 50, unidade: "CAPS AD III Butanta"
  },
  {
    id: 51, unidade: "CAPS AD III Campo Limpo"
  },
  {
    id: 52, unidade: "CAPS AD III Capela Do Socorro"
  },
  {
    id: 53, unidade: "CAPS AD III Centro"
  },
  {
    id: 54, unidade: "CAPS AD III Complexo Prates"
  },
  {
    id: 55, unidade: "CAPS AD III Freguesia Do O Brasilandia"
  },
  {
    id: 56, unidade: "CAPS AD III Grajau"
  },
  {
    id: 57, unidade: "CAPS AD III Heliopolis"
  },
  {
    id: 58, unidade: "CAPS AD III Itaquera"
  },
  {
    id: 59, unidade: "CAPS AD III Jardim Angela"
  },
  {
    id: 60, unidade: "CAPS AD III Jardim Sao Luiz"
  },
  {
    id: 61, unidade: "CAPS AD III Leopoldina"
  },
  {
    id: 62, unidade: "CAPS AD III Mandaqui"
  },
  {
    id: 63, unidade: "CAPS AD III Paraisopolis"
  },
  {
    id: 64, unidade: "CAPS AD III Penha"
  },
  {
    id: 65, unidade: "CAPS AD III Pirituba Casa Azul"
  },
  {
    id: 66, unidade: "CAPS AD III Santana"
  },
  {
    id: 67, unidade: "CAPS AD III Sao Mateus Liberdade De Escolha"
  },
  {
    id: 68, unidade: "CAPS AD III Sao Miguel"
  },
  {
    id: 69, unidade: "CAPS AD IV Redencao"
  }
]

const tecnico = [
  {
    id: 1, nome: "ALLEF BARBOSA", email: "allef.barbosa@libertyti.com.br"
  },
  {
    id: 2, nome: "ANDRE ASSIS", email: "andre.assis@libertyti.com.br"
  },
  {
    id: 3, nome: "AUGUSTO ENGLER", email: "augusto.engler@libertyti.com.br"
  },
  {
    id: 4, nome: "CESAR TEIXEIRA", email: "cesar.teixeira@libertyti.com.br"
  },
  {
    id: 5, nome: "GEOVANNA OLIVEIRA", email: "EXPIRADO"
  },
  {
    id: 6, nome: "GUSTAVO SILVA", email: "gustavo.silva@libertyti.com.br"
  },
  {
    id: 7, nome: "JOAO MARINHO", email: "joao.marinho@libertyti.com.br"
  },
  {
    id: 8, nome: "KAIQUE LORETI", email: "kaique.loreti@libertyti.com.br"
  },
  {
    id: 9, nome: "KAUE RODRIGUES", email: "kaue.rodrigues@libertyti.com.br"
  },
  {
    id: 10, nome: "LUIS SANTOS", email: "luis.santos@libertyti.com.br"
  },
  {
    id: 11, nome: "MATEUS MARINHO", email: "mateus.marinho@libertyti.com.br"
  },
  {
    id: 12, nome: "PEDRO BORGES", email: "pedro.borges@libertyti.com.br"
  },
  {
    id: 13, nome: "VALDEMIR ARAUJO", email: "valdemir.araujo@libertyti.com.br"
  },
  {
    id: 14, nome: "VITOR MARTINS", email: "vitor.martins@libertyti.com.br"
  }
]

const turno = [
  {
    id: 1, turno: "DIURNO"
  },
  {
    id: 2, turno: "NOTURNO"
  }
]

const localizacao = [
  {
    id: 1, localizacao: "UNIDADE"
  },
  {
    id: 2, localizacao: "HOME"
  },
  {
    id: 3, localizacao: "FOLGA"
  },
  {
    id: 4, localizacao: "SOBREAVISO"
  }
]

export default function AutocompleteTecnico() {

    const [selectedFilm, setSelectedFilm] = React.useState(null);

    return (
        <Autocomplete
            options={tecnico}
            sx={{width: '30%'}}
            // 2) exibir no campo somente o ID
            getOptionLabel={opt => `${opt.id} – ${opt.nome}`}
            // 3) controlar o valor
            value={selectedFilm}
            onChange={(_, newValue) => {
                // newValue é o objeto completo ou null
                setSelectedFilm(newValue);
                console.log(newValue.id)
            }}
            renderInput={(params) => (
                <TextField {...params} label="Técnico (ID)" variant="outlined" />
            )}
        />
    );
}

export function AutocompleteUnidade() {

    const [selectedFilm, setSelectedFilm] = React.useState(null);

    return (
        <Autocomplete
            options={unidade}
            sx={{width: '30%'}}
            // 2) exibir no campo somente o ID
            getOptionLabel={opt => `${opt.id} | ${opt.unidade}`}
            // 3) controlar o valor
            value={selectedFilm}
            onChange={(_, newValue) => {
                // newValue é o objeto completo ou null
                setSelectedFilm(newValue);
                console.log(newValue.id)
            }}
            renderInput={(params) => (
                <TextField {...params} label="Unidade (ID)" variant="outlined" />
            )}
        />
    );
}

export function AutocompleteTurno() {

    const [selectedFilm, setSelectedFilm] = React.useState(null);

    return (
        <Autocomplete
            options={turno}
            sx={{width: '30%'}}
            // 2) exibir no campo somente o ID
            getOptionLabel={opt => `${opt.id} – ${opt.turno}`}
            // 3) controlar o valor
            value={selectedFilm}
            onChange={(_, newValue) => {
                // newValue é o objeto completo ou null
                setSelectedFilm(newValue);
                console.log(newValue.id)
            }}
            renderInput={(params) => (
                <TextField {...params} label="Turno (ID)" variant="outlined" />
            )}
        />
    );
}

export function AutocompleteLocalizacao() {

    const [selectedFilm, setSelectedFilm] = React.useState(null);

    return (
        <Autocomplete
            options={localizacao}
            sx={{width: '30%'}}
            // 2) exibir no campo somente o ID
            getOptionLabel={opt => `${opt.id} – ${opt.localizacao}`}
            // 3) controlar o valor
            value={selectedFilm}
            onChange={(_, newValue) => {
                // newValue é o objeto completo ou null
                setSelectedFilm(newValue);
                console.log(newValue.id)
            }}
            renderInput={(params) => (
                <TextField {...params} label="Localizacao (ID)" variant="outlined" />
            )}
        />
    );
}
