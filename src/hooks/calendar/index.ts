import { useMutation, useQuery } from 'react-query';
import { ResponseType } from '../../contexts';
import { createEmotionTodayByUser, getCalendarByUser, getEmotionsTodayByUser, updateEmotionTodayByUser } from '../../services/calendar';
import { CalendarioItemType } from '../../types/calendario';

export const useGetCalendarByUser = (props: ResponseType & { uid: string }) => {
    return useQuery(
        'useGetCalendarByUser',
        () => getCalendarByUser({ uid: props.uid }),
        {
            ...props,
        },
    );
};

export const useGetEmotionsTodayByUser = (props: ResponseType & { uid: string }) => {
    return useQuery(
        'useGetEmotionsTodayByUser',
        () => getEmotionsTodayByUser({ uid: props.uid }),
        {
            ...props,
        },
    );
};

export const useCreateEmotionTodayByUser = (props: ResponseType & { uid: string }) => {
    return useMutation(
        'useCreateEmotionTodayByUser',
        (data: { nuevoItem: CalendarioItemType }) =>
            createEmotionTodayByUser({
                uid: props.uid,
                nuevoItem: data.nuevoItem,
            }),
        {
            onSuccess: () => props.onSuccess && props.onSuccess(),
            onError: () => props.onError && props.onError(),
        },
    );
};

export const useUpdateEmotionTodayByUser = (props: ResponseType & { uid: string }) => {
    return useMutation(
        'useUpdateEmotionTodayByUser',
        (data: { itemActualizar: CalendarioItemType }) =>
            updateEmotionTodayByUser({
                uid: props.uid,
                itemActualizar: data.itemActualizar,
            }),
        {
            onSuccess: () => props.onSuccess && props.onSuccess(),
            onError: () => props.onError && props.onError(),
        },
    );
};
