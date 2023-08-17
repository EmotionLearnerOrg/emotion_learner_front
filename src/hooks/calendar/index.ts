import {useMutation, useQuery} from 'react-query';
import {ResponseType} from '../../contexts';
import {getCalendarByUser, updateCalendarByUser} from '../../services';
import {CalendarioType, defaultCalendar} from '../../types';

export const useGetCalendarByUser = (
  props: ResponseType<CalendarioType> & {uid: string},
) => {
  return useQuery<CalendarioType>(
    'useGetCalendarByUser',
    () => getCalendarByUser({uid: props.uid}),
    {
      ...props,
      initialData: defaultCalendar, // Agregar el valor inicial aquí
      onSuccess: (data: CalendarioType) => props.onSuccess?.(data),
      onError: (err: any) => {
        if (props.onError) {
          props.onError(err);
        }
      },
    },
  );
};

export const useUpdateEmotionTodayByUser = (
  props: ResponseType & {uid: string},
) => {
  return useMutation(
    'updateCalendarByUser',
    (data: {calendario: CalendarioType}) =>
      updateCalendarByUser({
        uid: props.uid,
        agenda: data.calendario,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};
