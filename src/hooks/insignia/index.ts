import {useMutation, useQuery} from 'react-query';
import {typeInsignias} from '../../types/insignias';
import {createInsigniaByUser, updateInsigniaByUser} from '../../services';
import {ResponseType} from '../../contexts';
import {getInsigniasByUser} from '../../services';

export const useGetInsigniasByUser = (props: ResponseType & {uid: string}) => {
  return useQuery(
    'useGetInsigniasByUser',
    () => getInsigniasByUser({uid: props.uid}),
    {
      ...props,
    },
  );
};

export const useCreateInsigniaByUser = (
  props: ResponseType & {uid: string},
) => {
  return useMutation(
    'useCreateInsigniaByUser',
    (data: {nuevasInsignias: typeInsignias}) =>
      createInsigniaByUser({
        uid: props.uid,
        nuevasInsignias: data.nuevasInsignias,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};

export const useUpdateInsigniaByUser = (
  props: ResponseType & {uid: string},
) => {
  return useMutation(
    'useUpdateInsigniaByUser',
    (data: {nuevasInsignias: typeInsignias}) =>
      updateInsigniaByUser({
        uid: props.uid,
        nuevasInsignias: data.nuevasInsignias,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};
