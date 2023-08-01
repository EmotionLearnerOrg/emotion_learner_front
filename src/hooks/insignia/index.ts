import {useMutation, useQuery} from 'react-query';
import {typeInsignias} from '../../types/insignias';
import {
  createInsigniaByUser,
  updateInsigniaByUser,
  getInsigniasByUser,
} from '../../services';
import {ResponseType} from '../../contexts';

export const useGetInsigniasByUser = (props: ResponseType & {uid: string}) => {
  return useQuery({
    queryKey: `useGetInsigniasByUser${props.uid}`,
    queryFn: () => getInsigniasByUser({uid: props.uid}),
  });
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
      onSuccess: () => props.onSuccess?.(),
      onError: () => props.onError?.(),
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
      onSuccess: () => props.onSuccess?.(),
      onError: () => props.onError?.(),
    },
  );
};
