
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { X } from 'lucide-react';

import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import SubmitButton from '../Buttons/submitButton'
import BackButton from '../Buttons/backButton';
import AutocompleteTecnico, {
  AutocompleteTurno,
  AutocompleteUnidade,
  AutocompleteLocalizacao,
  AutocompleteEscala
} from '../AutoCompletes/autoCompleteNewVisita';
import DateTimeTextField from '../TextField/dateTime.jsx'
import TableAddVisitas from '../DataTable/dataTable';
import TextFieldObjetivoDaVisita from '../TextField/textField.jsx'

import handleInsertVisita from '../../services/PostService.js'

import LoadingOverlay from '../Loading/loadingOverlay.jsx';
import { TextField } from '@mui/material';

export function ModalNewVisita({ openModal, closeModal }) {

  const [stateTecnico, setStateTecnico] = useState();
  const [stateUnidade, setStateUnidade] = useState();
  const [stateTurno, setStateTurno] = useState();
  const [stateLocalizacao, setStateLocalizacao] = useState();
  const [stateDataVisita, setStateDataVisita] = useState();
  const [stateHoraInicio, setStateHoraInicio] = useState();
  const [stateHoraFim, setStateHoraFim] = useState();
  const [stateEscala, setStateEscala] = useState();
  const [stateObjetivoDaVisita, setStateObjetivoDaVisita] = useState();
  const [stateNumCard, setStateNumCard] = useState();

  const objectInsertVisita = {
    tecnico: {
      id: stateTecnico
    },
    unidade: {
      id: stateUnidade
    },
    localizacao: {
      id: stateLocalizacao
    },
    turno: {
      id: stateTurno
    },
    escala: {
      id: stateEscala
    },
    resposavelRegistro: {
      id: 1
    },
    dataHoraInicioVisita: stateDataVisita + " " + stateHoraInicio,
    dataHoraFimVisita: stateDataVisita + " " + stateHoraFim,
    objetivoDaVisita: stateObjetivoDaVisita,
    dataHoraRegistro: new Date(),
    numCard: stateNumCard
  }

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleFetchInsertVisita = async () => {
  setLoading(true);
  setError(null);
  try {
    const events = await handleInsertVisita(objectInsertVisita);
    setVisitasData(events);
    console.log("Visita inserida com sucesso!")
  } catch (err) {
    setError("Falha ao inserir visitas");
  } finally {
    setLoading(false);
  }
};

return (
  <Modal
    open={openModal}
    onClose={closeModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{
      position: 'absolute',
      inset: '5% 12.5%',       // 90% height, 75% width centered
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 24,
      p: 3,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" id="modal-modal-title">
          Inserção de Visita
        </Typography>
        <Button
          sx={{ color: 'black', borderColor: 'black' }}
          className='h-9 gap-2'
          variant='outlined'
          onClick={closeModal}>
          <X size={20} color='black' /> Fechar
        </Button>
      </Box>

      {/* Header Body content */}
      <Box sx={{ mb: 2, display: 'grid', gap: 2 }}>
        {/* AQUI */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <AutocompleteTecnico
            sx={{ flex: 1 }}
            value={stateTecnico}
            onChange={(e, value) => { setStateTecnico(value) }} />
          <AutocompleteTurno
            sx={{ flex: 1 }}
            value={stateTurno}
            onChange={(e, value) => { setStateTurno(value) }} />
          <AutocompleteEscala
            sx={{ flex: 1 }}
            value={stateEscala}
            onChange={(e, value) => { setStateEscala(value) }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <AutocompleteUnidade
            sx={{ flex: 1 }}
            value={stateUnidade}
            onChange={(e, value) => { setStateUnidade(value) }} />
          <AutocompleteLocalizacao
            sx={{ flex: 1 }}
            value={stateLocalizacao}
            onChange={(e, value) => { setStateLocalizacao(value) }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <DateTimeTextField
            label="Data da Visita"
            type="date"
            sx={{ width: '30%' }}
            focused
            value={stateDataVisita}
            onChange={e => setStateDataVisita(e.target.value)} />
          <TextFieldObjetivoDaVisita
            sx={{ flex: 1, width: 10 }}
            label="Objetivo da Visita"
            variant='outlined'
            type='text'
            value={stateObjetivoDaVisita}
            onChange={(e) => { setStateObjetivoDaVisita(e.target.value); console.log(e.target.value) }} />
          <TextFieldObjetivoDaVisita
            sx={{ flex: 1, width: 10 }}
            label="Número Card"
            variant='outlined'
            type='text'
            value={stateNumCard}
            onChange={(e) => { setStateNumCard(e.target.value); console.log(e.target.value) }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <DateTimeTextField
            label="Hora Início Visita"
            type="time"
            sx={{ width: '30%' }}
            focused
            value={stateHoraInicio}
            onChange={e => { setStateHoraInicio(e.target.value); console.log(e.target.value) }} />
          <DateTimeTextField
            label="Hora Fim Visita"
            type="time"
            sx={{ width: '30%' }}
            focused
            value={stateHoraFim}
            onChange={e => { setStateHoraFim(e.target.value); console.log(e.target.value) }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <BackButton
            sx={{ flex: 1 }}
            onClick={closeModal}
            className='w-48'
            startIcon={<AddIcon />}
            variant="outlined"
          >
            Adicionar a Lista
          </BackButton>
          <SubmitButton
            sx={{ flex: 1 }}
            onClick={handleFetchInsertVisita}
            className='w-48'
            startIcon={<SendIcon />}
            variant="outlined"
          >
            Lançar visita
          </SubmitButton>
          <LoadingOverlay open={loading} />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TableAddVisitas />
      </Box>
    </Box>
  </Modal>
);
}


