import {useMutation} from 'react-query';
import {loginWithEmailAndPassword2} from '../../services/account/account.service';
import {ResponseType} from '../../contexts';

export const useLoginWithEmailAndPassword = (props: ResponseType) => {
  return useMutation(
    'useLoginWithEmailAndPassword',
    (data: {email: string; password: string}) =>
      loginWithEmailAndPassword2({
        email: data.email,
        password: data.password,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};
