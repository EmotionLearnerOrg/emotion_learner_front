import {useMutation} from 'react-query';
import {loginWithEmailAndPassword2} from '../../services/account/account.service';

export const useLoginWithEmailAndPassword = () => {
  return useMutation(
    'useLoginWithEmailAndPassword',
    (data: any) =>
      loginWithEmailAndPassword2({
        email: data.email,
        password: data.password,
      }),
    // {
    //   onSuccess: () => props.onSuccess && props.onSuccess(),
    //   onError: () => props.onError && props.onError(),
    // },
  );
};
