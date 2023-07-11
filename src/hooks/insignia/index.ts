import {useMutation} from 'react-query';
import {typeInsignias} from '../../types/insignias';
import {saveInsigniaByUser, updateInsigniaByUser} from '../../services';
import {ResponseType} from '../../contexts/UserDataProvider';

export const useCreateInsigniasMutation = (
  props: ResponseType & {uid: string},
) => {
  return useMutation('prueba', (data: {nuevasInsignias: typeInsignias}) =>
    saveInsigniaByUser({
      uid: props.uid,
      nuevasInsignias: data.nuevasInsignias,
    }),
  );
};

export const useUpdateInsigniasMutation = (
  props: ResponseType & {uid: string},
) => {
  return useMutation('prueba', (data: {nuevasInsignias: typeInsignias}) =>
    updateInsigniaByUser({
      uid: props.uid,
      nuevasInsignias: data.nuevasInsignias,
    }),
  );
};
