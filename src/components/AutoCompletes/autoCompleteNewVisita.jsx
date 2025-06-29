import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const unidade = [
  { id: 1, nome: "Home" },
  { id: 2, nome: "Sobreaviso" },
  { id: 3, nome: "Folga" },
  { id: 4, nome: "CRST Freguesia do Ó" },
  { id: 5, nome: "CRST Lapa" },
  { id: 6, nome: "CRST Leste" },
  { id: 7, nome: "CRST Mooca" },
  { id: 8, nome: "CRST Santo Amaro" },
  { id: 9, nome: "CRST Sé" },
  { id: 10, nome: "H Cantareira" },
  { id: 11, nome: "HD Brasilandia" },
  { id: 12, nome: "HM Alipio" },
  { id: 13, nome: "HM Benedicto" },
  { id: 14, nome: "HM Brigadeiro" },
  { id: 15, nome: "HM Cachoeirinha" },
  { id: 16, nome: "HM Campo Limpo" },
  { id: 17, nome: "HM Capela Do Socorro" },
  { id: 18, nome: "HM Hungria" },
  { id: 19, nome: "HM Ignacio" },
  { id: 20, nome: "HM Mario Degni" },
  { id: 21, nome: "HM Saboya" },
  { id: 22, nome: "HM Sorocabana" },
  { id: 23, nome: "HM Tatuape" },
  { id: 24, nome: "HM Tide" },
  { id: 25, nome: "HM Waldomiro" },
  { id: 26, nome: "HM Zaio" },
  { id: 27, nome: "PA Sao Mateus" },
  { id: 28, nome: "LSP - Centro de Exames da Mulher Capela do Socorro" },
  { id: 29, nome: "UPA Ipiranga - Dr. Augusto Gomes de Mattos" },
  { id: 30, nome: "PSM Balneario Sao Jose" },
  { id: 31, nome: "PSM Lapa (desabilitado)" },
  { id: 32, nome: "UPA Dona Maria Antonieta" },
  { id: 33, nome: "UPA Elisa Maria" },
  { id: 34, nome: "UPA Lapa" },
  { id: 35, nome: "UPA Parelheiros" },
  { id: 36, nome: "UPA Pedreira" },
  { id: 37, nome: "CAPS AD II Cachoeirinha" },
  { id: 38, nome: "CAPS AD II Cangaiba" },
  { id: 39, nome: "CAPS AD II Cidade Ademar" },
  { id: 40, nome: "CAPS AD II Ermelino Matarazzo" },
  { id: 41, nome: "CAPS AD II Guaianases" },
  { id: 42, nome: "CAPS AD II Jabaquara" },
  { id: 43, nome: "CAPS AD II Jardim Nelia" },
  { id: 44, nome: "CAPS AD II Mooca" },
  { id: 45, nome: "CAPS AD II Pinheiros" },
  { id: 46, nome: "CAPS AD II Sacoma" },
  { id: 47, nome: "CAPS AD II Santo Amaro" },
  { id: 48, nome: "CAPS AD II Sapopemba" },
  { id: 49, nome: "CAPS AD II Vila Madalena Prosam" },
  { id: 50, nome: "CAPS AD II Vila Mariana" },
  { id: 51, nome: "CAPS AD III Armenia" },
  { id: 52, nome: "CAPS AD III Boracea" },
  { id: 53, nome: "CAPS AD III Butanta" },
  { id: 54, nome: "CAPS AD III Campo Limpo" },
  { id: 55, nome: "CAPS AD III Capela Do Socorro" },
  { id: 56, nome: "CAPS AD III Centro" },
  { id: 57, nome: "CAPS AD III Complexo Prates" },
  { id: 58, nome: "CAPS AD III Freguesia Do O Brasilandia" },
  { id: 59, nome: "CAPS AD III Grajau" },
  { id: 60, nome: "CAPS AD III Heliopolis" },
  { id: 61, nome: "CAPS AD III Itaquera" },
  { id: 62, nome: "CAPS AD III Jardim Angela" },
  { id: 63, nome: "CAPS AD III Jardim Sao Luiz" },
  { id: 64, nome: "CAPS AD III Leopoldina" },
  { id: 65, nome: "CAPS AD III Mandaqui" },
  { id: 66, nome: "CAPS AD III Paraisopolis" },
  { id: 67, nome: "CAPS AD III Penha" },
  { id: 68, nome: "CAPS AD III Pirituba Casa Azul" },
  { id: 69, nome: "CAPS AD III Santana" },
  { id: 70, nome: "CAPS AD III Sao Mateus Liberdade De Escolha" },
  { id: 71, nome: "CAPS AD III Sao Miguel" },
  { id: 72, nome: "CAPS AD IV Redencao" },
  { id: 73, nome: "CAPS Adulto II Aricanduva Formosa" },
  { id: 74, nome: "CAPS Adulto II Brasilandia" },
  { id: 75, nome: "CAPS Adulto II Butanta" },
  { id: 76, nome: "CAPS Adulto II Casa Verde" },
  { id: 77, nome: "CAPS Adulto II Cidade Ademar" },
  { id: 78, nome: "CAPS Adulto II Cidade Tiradentes" },
  { id: 79, nome: "CAPS Adulto II Ermelino Matarazzo" },
  { id: 80, nome: "CAPS Adulto II Guaianases Artur Bispo Do Rosario" },
  { id: 81, nome: "CAPS Adulto II Itaim Bibi" },
  { id: 82, nome: "CAPS Adulto II Itaim Paulista" },
  { id: 83, nome: "CAPS Adulto II Itaquera" },
  { id: 84, nome: "CAPS Adulto II Jabaquara" },
  { id: 85, nome: "CAPS Adulto II Jacana Dr Leonidio Galvao Dos Santos" },
  { id: 86, nome: "CAPS Adulto II Jardim Lidia" },
  { id: 87, nome: "CAPS Adulto II Perdizes Manoel Munhoz" },
  { id: 88, nome: "CAPS Adulto II Perus" },
  { id: 89, nome: "CAPS Adulto II Sao Miguel" },
  { id: 90, nome: "CAPS Adulto II Vila Monumento" },
  { id: 91, nome: "CAPS Adulto II Vila Prudente" },
  { id: 92, nome: "CAPS Adulto III Capela Do Socorro" },
  { id: 93, nome: "CAPS Adulto III Freguesia Do O Brasilandia" },
  { id: 94, nome: "CAPS Adulto III Grajau" },
  { id: 95, nome: "CAPS Adulto III Itaim Bibi" },
  { id: 96, nome: "CAPS Adulto III Jardim Sao Luiz" },
  { id: 97, nome: "CAPS Adulto III Lapa" },
  { id: 98, nome: "CAPS Adulto III Largo 13" },
  { id: 99, nome: "CAPS Adulto III M Boi Mirim" },
  { id: 100, nome: "CAPS Adulto III Mandaqui" },
  { id: 101, nome: "CAPS Adulto III Mooca" },
  { id: 102, nome: "CAPS Adulto III Paraisopolis" },
  { id: 103, nome: "CAPS Adulto III Parelheiros" },
  { id: 104, nome: "CAPS Adulto III Perdizes" },
  { id: 105, nome: "CAPS Adulto III Pirituba Jaragua" },
  { id: 106, nome: "CAPS Adulto III Sao Mateus" },
  { id: 107, nome: "CAPS Adulto III Sapopemba" },
  { id: 108, nome: "CAPS Adulto III Se" },
  { id: 109, nome: "CAPS Adulto III Vila Matilde" },
  { id: 110, nome: "CAPS IJ II Butanta" },
  { id: 111, nome: "CAPS IJ II Campo Limpo" },
  { id: 112, nome: "CAPS IJ II Capela Do Socorro Piracao" },
  { id: 113, nome: "CAPS IJ II Casa Verde Nise Da Silveira" },
  { id: 114, nome: "CAPS IJ II Cidade Ademar" },
  { id: 115, nome: "CAPS IJ II Cidade Lider" },
  { id: 116, nome: "CAPS IJ II Cidade Tiradentes" },
  { id: 117, nome: "CAPS IJ II Ermelino Matarazzo" },
  { id: 118, nome: "CAPS IJ II Freguesia Do O Brasilandia" },
  { id: 119, nome: "CAPS IJ II Guaianases Coloridamente" },
  { id: 120, nome: "CAPS IJ II Ipiranga" },
  { id: 121, nome: "CAPS IJ II Itaim Paulista" },
  { id: 122, nome: "CAPS IJ II Itaquera" },
  { id: 123, nome: "CAPS IJ II Jabaquara Casinha" },
  { id: 124, nome: "CAPS IJ II Lapa" },
  { id: 125, nome: "CAPS IJ II M Boi Mirim" },
  { id: 126, nome: "CAPS IJ II Mooca" },
  { id: 127, nome: "CAPS IJ II Parelheiros Aquarela" },
  { id: 128, nome: "CAPS IJ II Perus" },
  { id: 129, nome: "CAPS IJ II Pirituba Jaragua" },
  { id: 130, nome: "CAPS IJ II Santo Amaro" },
  { id: 131, nome: "CAPS IJ II Sao Mateus" },
  { id: 132, nome: "CAPS IJ II Sapopemba" },
  { id: 133, nome: "CAPS IJ II Vila Maria Vila Guilherme" },
  { id: 134, nome: "CAPS IJ II Vila Mariana Quixote" },
  { id: 135, nome: "CAPS IJ II Vila Prudente" },
  { id: 136, nome: "CAPS IJ III Aricanduva" },
  { id: 137, nome: "CAPS IJ III Cidade Dutra" },
  { id: 138, nome: "CAPS IJ III Heliopolis" },
  { id: 139, nome: "CAPS IJ III Jardim Sao Luiz" },
  { id: 140, nome: "CAPS IJ III Penha" },
  { id: 141, nome: "CAPS IJ III Pirituba" },
  { id: 142, nome: "CAPS IJ III Santana" },
  { id: 143, nome: "CAPS IJ III Sao Miguel" },
  { id: 144, nome: "CAPS IJ III Se Amorzeira" },
  { id: 145, nome: "CIES - Luz Campos Elíseos" },
  { id: 146, nome: "PSM Álvaro Dino (Barra Funda)" },
  { id: 147, nome: "CNR Redenção" },
  { id: 148, nome: "UPA 21 de Junho" },
  { id: 149, nome: "UPA 26 de Agosto" },
  { id: 150, nome: "SCP AD Boracea" },
  { id: 151, nome: "SCP AD Pirituba" },
  { id: 152, nome: "UPA Campo Limpo" },
  { id: 153, nome: "UPA Carrao" },
  { id: 154, nome: "UPA City Jaragua" },
  { id: 155, nome: "UPA Ermelino Matarazzo" },
  { id: 156, nome: "UPA Jabaquara" },
  { id: 157, nome: "UPA Jacana" },
  { id: 158, nome: "UPA Jardim Angela" },
  { id: 159, nome: "UPA Julio Tupy" },
  { id: 160, nome: "UPA Mooca" },
  { id: 161, nome: "UPA Parque Doroteia" },
  { id: 162, nome: "UPA Peri" },
  { id: 163, nome: "UPA Perus" },
  { id: 164, nome: "UPA Pirituba" },
  { id: 165, nome: "UPA Rio Pequeno" },
  { id: 166, nome: "UPA Santo Amaro" },
  { id: 167, nome: "UPA Tatuape" },
  { id: 168, nome: "UPA Tiradentes" },
  { id: 169, nome: "UPA Tito Lopes" },
  { id: 170, nome: "UPA Vera Cruz" },
  { id: 171, nome: "UPA Vergueiro" },
  { id: 172, nome: "UPA Vila Mariana" },
  { id: 173, nome: "UPA Vila Santa Catarina" },
  { id: 174, nome: "UPA Ipiranga Dr. Augusto Gomes de Mattos" },
  { id: 175, nome: "PSM Barra Funda Dr. Alvaro Dino de Almeida" }
];

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

const escala = [
  {id: 1, escala: "5x2"},
  {id: 2, escala: "12x36"}
]

const AutocompleteToUse = styled(Autocomplete)(({ theme }) => ({
  borderColor: 'black',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: 'black',
  }
}));

export default function AutocompleteTecnico() {

  const [tempState, setTempState] = React.useState(null);

  return (
    <AutocompleteToUse
      options={tecnico}
      sx={{ width: '30%' }}
      // 2) exibir no campo somente o ID
      getOptionLabel={opt => `${opt.id} | ${opt.nome}`}
      // 3) controlar o valor
      value={tempState}
      onChange={(_, newValue) => {
        // newValue é o objeto completo ou null
        setTempState(newValue);
        console.log(newValue.id)
      }}
      renderInput={(params) => (
        <TextField {...params} label="Técnico" variant="outlined" />
      )}
    />
  );
}

export function AutocompleteUnidade() {

  const [tempState, setTempState] = React.useState(null);

  return (
    <AutocompleteToUse
      options={unidade}
      sx={{
        width: '30%',
      }}
      // 2) exibir no campo somente o ID
      getOptionLabel={opt => `${opt.id} | ${opt.nome}`}
      // 3) controlar o valor
      value={tempState}
      onChange={(_, newValue) => {
        // newValue é o objeto completo ou null
        setTempState(newValue);
        console.log(newValue.id)
      }}
      renderInput={(params) => (
        <TextField {...params} label="Unidade" variant="outlined" />
      )}
    />
  );
}

export function AutocompleteTurno() {

  const [tempState, setTempState] = React.useState(null);

  return (
    <AutocompleteToUse
      options={turno}
      sx={{ width: '30%' }}
      // 2) exibir no campo somente o ID
      getOptionLabel={opt => `${opt.id} | ${opt.turno}`}
      // 3) controlar o valor
      value={tempState}
      onChange={(_, newValue) => {
        // newValue é o objeto completo ou null
        setTempState(newValue);
        console.log(newValue.id)
      }}
      renderInput={(params) => (
        <TextField {...params} label="Turno" variant="outlined" />
      )}
    />
  );
}

export function AutocompleteLocalizacao() {

  const [tempState, setTempState] = React.useState(null);

  return (
    <AutocompleteToUse
      options={localizacao}
      sx={{ width: '30%' }}
      // 2) exibir no campo somente o ID
      getOptionLabel={opt => `${opt.id} | ${opt.localizacao}`}
      // 3) controlar o valor
      value={tempState}
      onChange={(_, newValue) => {
        // newValue é o objeto completo ou null
        setTempState(newValue);
        console.log(newValue.id)
      }}
      renderInput={(params) => (
        <TextField {...params} label="Localizacao" variant="outlined" />
      )}
    />
  );
}

export function AutocompleteEscala() {

  const [tempState, setTempState] = React.useState(null);

  return (
    <AutocompleteToUse
      options={escala}
      sx={{
        width: '30%',
      }}
      // 2) exibir no campo somente o ID
      getOptionLabel={opt => `${opt.id} | ${opt.escala}`}
      // 3) controlar o valor
      value={tempState}
      onChange={(_, newValue) => {
        // newValue é o objeto completo ou null
        setTempState(newValue);
        console.log(newValue.id)
      }}
      renderInput={(params) => (
        <TextField {...params} label="Escala" variant="outlined" />
      )}
    />
  );
}
